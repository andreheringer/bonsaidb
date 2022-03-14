use std::{
    collections::HashMap,
    net::SocketAddr,
    ops::{Deref, DerefMut},
    sync::Arc,
};

use async_lock::{Mutex, MutexGuard};
use bonsaidb_core::{
    arc_bytes::serde::Bytes,
    circulate::Message,
    connection::{Session, SessionId},
    custom_api::{CustomApi, CustomApiResult},
    networking::{DatabaseResponse, Response},
    pubsub::Subscriber as _,
};
use bonsaidb_local::Subscriber;
use bonsaidb_utils::fast_async_lock;
use derive_where::derive_where;
use flume::Sender;
use parking_lot::RwLock;

use crate::{Backend, CustomServer, Error, NoBackend};

/// The ways a client can be connected to the server.
#[derive(Debug, PartialEq, Eq)]
pub enum Transport {
    /// A connection over BonsaiDb's QUIC-based protocol.
    Bonsai,
    /// A connection over WebSockets.
    #[cfg(feature = "websockets")]
    WebSocket,
}

/// A connected database client.
#[derive(Debug)]
#[derive_where(Clone)]
pub struct ConnectedClient<B: Backend = NoBackend> {
    data: Arc<Data<B>>,
}

#[derive(Debug)]
struct Data<B: Backend = NoBackend> {
    id: u32,
    sessions: RwLock<HashMap<Option<SessionId>, ClientSession>>,
    address: SocketAddr,
    transport: Transport,
    response_sender: Sender<(Option<SessionId>, Response)>,
    client_data: Mutex<Option<B::ClientData>>,
}

#[derive(Debug)]
struct ClientSession {
    session: Session,
    subscribers: HashMap<u64, Subscriber>,
}

impl<B: Backend> ConnectedClient<B> {
    /// Returns the address of the connected client.
    #[must_use]
    pub fn address(&self) -> &SocketAddr {
        &self.data.address
    }

    /// Returns the transport method the client is connected via.
    #[must_use]
    pub fn transport(&self) -> &Transport {
        &self.data.transport
    }

    pub(crate) fn logged_in_as(&self, session: Session) {
        println!("Authenticating as: {:?}", session);
        let mut sessions = self.data.sessions.write();
        sessions.insert(
            session.id,
            ClientSession {
                session,
                subscribers: HashMap::default(),
            },
        );
    }

    /// Sends a custom API response to the client.
    pub fn send<Api: CustomApi>(
        &self,
        session: Option<&Session>,
        response: &CustomApiResult<Api>,
    ) -> Result<(), Error> {
        let encoded = pot::to_vec(&response)?;
        self.data.response_sender.send((
            session.and_then(|session| session.id),
            Response::Api {
                name: Api::name(),
                response: Bytes::from(encoded),
            },
        ))?;
        Ok(())
    }

    /// Returns a locked reference to the stored client data.
    pub async fn client_data(&self) -> LockedClientDataGuard<'_, B::ClientData> {
        LockedClientDataGuard(fast_async_lock!(self.data.client_data))
    }

    pub fn session(&self, session_id: Option<SessionId>) -> Option<Session> {
        let sessions = self.data.sessions.read();
        sessions.get(&session_id).map(|data| data.session.clone())
    }

    pub(crate) fn register_subscriber(
        &self,
        subscriber: Subscriber,
        session_id: Option<SessionId>,
    ) {
        let subscriber_id = subscriber.id();
        let receiver = subscriber.receiver().clone();
        {
            let mut sessions = self.data.sessions.write();
            if let Some(client_session) = sessions.get_mut(&session_id) {
                client_session
                    .subscribers
                    .insert(subscriber.id(), subscriber);
            } else {
                // TODO return error for session not found.
                return;
            }
        }
        let task_self = self.clone();
        tokio::task::spawn(async move {
            task_self
                .forward_notifications_for(session_id, subscriber_id, receiver)
                .await;
        });
    }

    /// Sets the associated data for this client.
    pub async fn set_client_data(&self, data: B::ClientData) {
        let mut client_data = fast_async_lock!(self.data.client_data);
        *client_data = Some(data);
    }

    async fn forward_notifications_for(
        &self,
        session_id: Option<SessionId>,
        subscriber_id: u64,
        receiver: flume::Receiver<Arc<Message>>,
    ) {
        while let Ok(message) = receiver.recv_async().await {
            if self
                .data
                .response_sender
                .send((
                    session_id,
                    Response::Database(DatabaseResponse::MessageReceived {
                        subscriber_id,
                        topic: message.topic.clone(),
                        payload: Bytes::from(&message.payload[..]),
                    }),
                ))
                .is_err()
            {
                break;
            }
        }
    }

    pub(crate) fn subscribe_by_id(
        &self,
        subscriber_id: u64,
        topic: String,
        check_session_id: Option<SessionId>,
    ) -> Result<(), crate::Error> {
        let mut sessions = self.data.sessions.write();
        if let Some(client_session) = sessions.get_mut(&check_session_id) {
            if let Some(subscriber) = client_session.subscribers.get(&subscriber_id) {
                subscriber.subscribe_to(topic)?;
                Ok(())
            } else {
                Err(Error::Transport(String::from("invalid subscriber id")))
            }
        } else {
            Err(Error::Transport(String::from("invalid session id")))
        }
    }

    pub(crate) fn unsubscribe_by_id(
        &self,
        subscriber_id: u64,
        topic: &str,
        check_session_id: Option<SessionId>,
    ) -> Result<(), crate::Error> {
        let mut sessions = self.data.sessions.write();
        if let Some(client_session) = sessions.get_mut(&check_session_id) {
            if let Some(subscriber) = client_session.subscribers.get(&subscriber_id) {
                subscriber.unsubscribe_from(topic)?;
                Ok(())
            } else {
                Err(Error::Transport(String::from("invalid subscriber id")))
            }
        } else {
            Err(Error::Transport(String::from("invalid session id")))
        }
    }

    pub(crate) fn unregister_subscriber_by_id(
        &self,
        subscriber_id: u64,
        check_session_id: Option<SessionId>,
    ) -> Result<(), crate::Error> {
        let mut sessions = self.data.sessions.write();
        if let Some(client_session) = sessions.get_mut(&check_session_id) {
            if client_session.subscribers.remove(&subscriber_id).is_some() {
                Ok(())
            } else {
                Err(Error::Transport(String::from("invalid subscriber id")))
            }
        } else {
            Err(Error::Transport(String::from("invalid session id")))
        }
    }
}

/// A locked reference to associated client data.
pub struct LockedClientDataGuard<'client, ClientData>(MutexGuard<'client, Option<ClientData>>);

impl<'client, ClientData> Deref for LockedClientDataGuard<'client, ClientData> {
    type Target = Option<ClientData>;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl<'client, ClientData> DerefMut for LockedClientDataGuard<'client, ClientData> {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.0
    }
}

#[derive(Debug)]
pub struct OwnedClient<B: Backend> {
    client: ConnectedClient<B>,
    runtime: tokio::runtime::Handle,
    server: Option<CustomServer<B>>,
}

impl<B: Backend> OwnedClient<B> {
    pub(crate) fn new(
        id: u32,
        address: SocketAddr,
        transport: Transport,
        response_sender: Sender<(Option<SessionId>, Response)>,
        server: CustomServer<B>,
        default_session: Session,
    ) -> Self {
        let mut session = HashMap::new();
        session.insert(
            None,
            ClientSession {
                session: default_session,
                subscribers: HashMap::default(),
            },
        );
        Self {
            client: ConnectedClient {
                data: Arc::new(Data {
                    id,
                    address,
                    transport,
                    response_sender,
                    sessions: RwLock::new(session),
                    client_data: Mutex::default(),
                }),
            },
            runtime: tokio::runtime::Handle::current(),
            server: Some(server),
        }
    }

    pub fn clone(&self) -> ConnectedClient<B> {
        self.client.clone()
    }
}

impl<B: Backend> Drop for OwnedClient<B> {
    fn drop(&mut self) {
        let id = self.client.data.id;
        let server = self.server.take().unwrap();
        self.runtime.spawn(async move {
            server.disconnect_client(id).await;
        });
    }
}

impl<B: Backend> Deref for OwnedClient<B> {
    type Target = ConnectedClient<B>;

    fn deref(&self) -> &Self::Target {
        &self.client
    }
}
