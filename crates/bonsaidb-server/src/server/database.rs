use std::{ops::Deref, sync::Arc};

use async_trait::async_trait;
use bonsaidb_core::{
    circulate::Message,
    connection::{AccessPolicy, QueryKey},
    kv::Kv,
    pubsub::{PubSub, Subscriber},
    schema::{self, Collection, Map, MappedValue, Schema, View},
    transaction::Transaction,
};
use bonsaidb_local::Database;

use crate::{Backend, CustomServer};

/// A database belonging to a [`CustomServer`].
pub struct ServerDatabase<'a, B: Backend, DB: Schema> {
    pub(crate) server: &'a CustomServer<B>,
    pub(crate) db: Database<DB>,
}

impl<'a, B: Backend, DB: Schema> Deref for ServerDatabase<'a, B, DB> {
    type Target = Database<DB>;

    fn deref(&self) -> &Self::Target {
        &self.db
    }
}

/// Uses `CustomServer`'s `PubSub` relay.
#[async_trait]
impl<'a, B: Backend, DB: Schema> PubSub for ServerDatabase<'a, B, DB> {
    type Subscriber = ServerSubscriber<B>;

    async fn create_subscriber(&self) -> Result<Self::Subscriber, bonsaidb_core::Error> {
        Ok(self
            .server
            .create_subscriber(self.db.name().to_string())
            .await)
    }

    async fn publish<S: Into<String> + Send, P: serde::Serialize + Sync>(
        &self,
        topic: S,
        payload: &P,
    ) -> Result<(), bonsaidb_core::Error> {
        self.server
            .publish_message(self.db.name(), &topic.into(), pot::to_vec(payload)?)
            .await;
        Ok(())
    }

    async fn publish_to_all<P: serde::Serialize + Sync>(
        &self,
        topics: Vec<String>,
        payload: &P,
    ) -> Result<(), bonsaidb_core::Error> {
        self.server
            .publish_serialized_to_all(self.db.name(), &topics, pot::to_vec(payload)?)
            .await;
        Ok(())
    }
}

/// A `PubSub` subscriber for a [`CustomServer`].
pub struct ServerSubscriber<B: Backend> {
    /// The unique ID of this subscriber.
    pub id: u64,
    pub(crate) database: String,
    pub(crate) server: CustomServer<B>,
    pub(crate) receiver: flume::Receiver<Arc<Message>>,
}

#[async_trait]
impl<B: Backend> Subscriber for ServerSubscriber<B> {
    async fn subscribe_to<S: Into<String> + Send>(
        &self,
        topic: S,
    ) -> Result<(), bonsaidb_core::Error> {
        self.server
            .subscribe_to(self.id, &self.database, topic)
            .await
    }

    async fn unsubscribe_from(&self, topic: &str) -> Result<(), bonsaidb_core::Error> {
        self.server
            .unsubscribe_from(self.id, &self.database, topic)
            .await
    }

    fn receiver(&self) -> &'_ flume::Receiver<Arc<Message>> {
        &self.receiver
    }
}

/// Pass-through implementation
#[async_trait]
impl<'a, B: Backend, DB: Schema> bonsaidb_core::connection::Connection
    for ServerDatabase<'a, B, DB>
{
    async fn get<C: Collection>(
        &self,
        id: u64,
    ) -> Result<Option<bonsaidb_core::document::Document<'static>>, bonsaidb_core::Error> {
        self.db.get::<C>(id).await
    }

    async fn get_multiple<C: Collection>(
        &self,
        ids: &[u64],
    ) -> Result<Vec<bonsaidb_core::document::Document<'static>>, bonsaidb_core::Error> {
        self.db.get_multiple::<C>(ids).await
    }

    async fn query<V: View>(
        &self,
        key: Option<QueryKey<V::Key>>,
        access_policy: AccessPolicy,
    ) -> Result<Vec<Map<V::Key, V::Value>>, bonsaidb_core::Error>
    where
        Self: Sized,
    {
        self.db.query::<V>(key, access_policy).await
    }

    async fn query_with_docs<V: View>(
        &self,
        key: Option<QueryKey<V::Key>>,
        access_policy: AccessPolicy,
    ) -> Result<Vec<schema::MappedDocument<V::Key, V::Value>>, bonsaidb_core::Error>
    where
        Self: Sized,
    {
        self.db.query_with_docs::<V>(key, access_policy).await
    }

    async fn reduce<V: View>(
        &self,
        key: Option<QueryKey<V::Key>>,
        access_policy: AccessPolicy,
    ) -> Result<V::Value, bonsaidb_core::Error>
    where
        Self: Sized,
    {
        self.db.reduce::<V>(key, access_policy).await
    }

    async fn reduce_grouped<V: View>(
        &self,
        key: Option<QueryKey<V::Key>>,
        access_policy: AccessPolicy,
    ) -> Result<Vec<MappedValue<V::Key, V::Value>>, bonsaidb_core::Error>
    where
        Self: Sized,
    {
        self.db.reduce_grouped::<V>(key, access_policy).await
    }

    async fn apply_transaction(
        &self,
        transaction: Transaction<'static>,
    ) -> Result<Vec<bonsaidb_core::transaction::OperationResult>, bonsaidb_core::Error> {
        self.db.apply_transaction(transaction).await
    }

    async fn list_executed_transactions(
        &self,
        starting_id: Option<u64>,
        result_limit: Option<usize>,
    ) -> Result<Vec<bonsaidb_core::transaction::Executed<'static>>, bonsaidb_core::Error> {
        self.db
            .list_executed_transactions(starting_id, result_limit)
            .await
    }

    async fn last_transaction_id(&self) -> Result<Option<u64>, bonsaidb_core::Error> {
        self.db.last_transaction_id().await
    }

    async fn compact_collection<C: schema::Collection>(&self) -> Result<(), bonsaidb_core::Error> {
        self.db.compact_collection::<C>().await
    }

    async fn compact(&self) -> Result<(), bonsaidb_core::Error> {
        self.db.compact().await
    }

    async fn compact_key_value_store(&self) -> Result<(), bonsaidb_core::Error> {
        self.db.compact_key_value_store().await
    }
}

/// Pass-through implementation
#[async_trait]
impl<'a, B: Backend, DB: Schema> Kv for ServerDatabase<'a, B, DB> {
    async fn execute_key_operation(
        &self,
        op: bonsaidb_core::kv::KeyOperation,
    ) -> Result<bonsaidb_core::kv::Output, bonsaidb_core::Error> {
        self.db.execute_key_operation(op).await
    }
}
