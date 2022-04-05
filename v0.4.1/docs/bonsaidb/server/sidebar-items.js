initSidebarItems({"constant":[["LETS_ENCRYPT_PRODUCTION_DIRECTORY","URI of https://letsencrypt.org/ prod Directory. Certificates aquired from this are trusted by most Browsers."],["LETS_ENCRYPT_STAGING_DIRECTORY","URI of https://letsencrypt.org/ staging Directory. Use this for tests. See https://letsencrypt.org/docs/staging-environment/"]],"enum":[["BackendError","An error that can occur inside of a [`Backend`] function."],["ConnectionHandling","Controls how a server should handle a connection."],["DefaultPermissions","The default permissions to use for all connections to the server."],["Error","An error occurred while interacting with a `Server`."],["NoBackend","A [`Backend`] with no custom functionality."],["StandardTcpProtocols","TCP [`ApplicationProtocols`] that BonsaiDb has some knowledge of."],["Transport","The ways a client can be connected to the server."]],"mod":[["api","Types for defining API handlers."],["cli","Command-line interface for the server."],["fabruic","TODO"],["test_util",""]],"struct":[["AcmeConfiguration","The Automated Certificate Management Environment (ACME) configuration."],["ConnectedClient","A connected database client."],["CustomServer","A BonsaiDb server."],["LockedClientDataGuard","A locked reference to associated client data."],["Peer","A connected network peer."],["ServerConfiguration","Configuration options for `Server`"],["ServerDatabase","A database belonging to a [`CustomServer`]."]],"trait":[["ApplicationProtocols","A collection of supported protocols for a network service."],["Backend","Tailors the behavior of a server to your needs."],["HttpService","A service that can handle incoming HTTP connections. A convenience implementation of [`TcpService`] that is useful is you are only serving HTTP and WebSockets over a service."],["TcpService","A service that can handle incoming TCP connections."]],"type":[["Server","A BonsaiDb server without a custom backend."]]});