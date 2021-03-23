var searchIndex = JSON.parse('{\
"pliantdb":{"doc":"pliantdb (name not set in stone) is a programmable …","i":[[0,"connection","pliantdb","types for interacting with a database",null,null],[8,"Connection","pliantdb::connection","a trait that defines all interactions with a <code>Database</code>, …",null,null],[10,"collection","","access a collection for the connected <code>Database</code>",0,[[],[["result",4],["collection",3],["error",4]]]],[10,"insert","","insert a newly created document into the connected …",0,[[["vec",3]],[["box",3],["pin",3]]]],[10,"update","","update an existing document in the connected <code>Database</code> for …",0,[[["document",3]],[["pin",3],["box",3]]]],[10,"get","","retrieve a stored document from collection <code>C</code> identified …",0,[[["uuid",3]],[["pin",3],["box",3]]]],[10,"apply_transaction","","apply a transaction to the database. If any operation in …",0,[[["transaction",3]],[["box",3],["pin",3]]]],[3,"Collection","","a struct used to interact with a collection over a …",null,null],[11,"push","","add a new <code>Document<Cl></code> with the contents <code>item</code>",1,[[]]],[11,"update","","add a new <code>Document<Cl></code> with the contents <code>item</code>",1,[[["document",3]]]],[11,"get","","retrieve a <code>Document<Cl></code> with <code>id</code> from the connection",1,[[["uuid",3]]]],[0,"document","pliantdb","types for interacting with <code>Document</code>s",null,null],[3,"Revision","pliantdb::document","a struct containing information about a <code>Document</code>\'s …",null,null],[12,"id","","The current revision id of the document. This value is …",2,null],[12,"sha256","","The SHA256 digest of the bytes contained within the …",2,null],[3,"Header","","the header of a <code>Document</code>",null,null],[12,"id","","the id of the Document. Unique across the collection <code>C</code>",3,null],[12,"revision","","the revision of the stored document.",3,null],[3,"Document","","a struct representing a document in the database",null,null],[12,"collection","","the <code>Id</code> of the <code>Collection</code> this document belongs to",4,null],[12,"header","","the header of the document, which contains the id and …",4,null],[12,"contents","","the serialized bytes of the stored item",4,null],[11,"new","","create a new document with <code>contents</code>",4,[[["id",3],["cow",4]]]],[11,"with_contents","","create a new document with serialized bytes from <code>contents</code>",4,[[["id",3]],[["result",4],["error",3]]]],[11,"contents","","retrieves <code>contents</code> through deserialization into the type <code>D</code>",4,[[],[["deserialize",8],["result",4],["error",3]]]],[11,"set_contents","","serializes and stores <code>contents</code> into this document",4,[[],[["result",4],["error",3]]]],[11,"emit","","create a <code>Map</code> result with an empty key and value",4,[[],["map",3]]],[11,"emit_key","","create a <code>Map</code> result with a <code>key</code> and an empty value",4,[[["key",8]],[["key",8],["map",3]]]],[11,"emit_value","","create a <code>Map</code> result with <code>value</code> and an empty key",4,[[["serialize",8]],[["map",3],["serialize",8]]]],[11,"emit_key_and_value","","create a <code>Map</code> result with a <code>key</code> and <code>value</code>",4,[[["key",8],["serialize",8]],[["key",8],["map",3],["serialize",8]]]],[11,"to_owned","","clone the document\'s data so that it\'s no longer borrowed …",4,[[],["document",3]]],[0,"schema","pliantdb","types for defining database schema",null,null],[0,"collection","pliantdb::schema","types for defining a <code>Collection</code>",null,null],[3,"Id","pliantdb::schema::collection","a unique collection id. Choose collection names that …",null,null],[12,"0","","",5,null],[8,"Collection","","a namespaced collection of <code>Document<Self></code> items and views",null,null],[10,"id","","the <code>Id</code> of this collection",6,[[],["id",3]]],[10,"define_views","","implementors define all of their <code>View</code>s in <code>schema</code>",6,[[["schema",3]]]],[0,"view","pliantdb::schema","types for defining map/reduce-powered <code>View</code>s",null,null],[0,"map","pliantdb::schema::view","types for defining a <code>Map</code> within a <code>View</code>",null,null],[3,"Map","pliantdb::schema::view::map","a structure representing a document\'s entry in a View\'s …",null,null],[12,"source","","the id of the document that emitted this entry",7,null],[12,"key","","the key used to index the View",7,null],[12,"value","","an associated value stored in the view",7,null],[11,"new","","creates a new Map entry for the document with id <code>source</code>",7,[[["uuid",3]]]],[3,"Serialized","","a structure representing a document\'s entry in a View\'s …",null,null],[12,"source","","the id of the document that emitted this entry",8,null],[12,"key","","the key used to index the View",8,null],[12,"value","","an associated value stored in the view",8,null],[8,"Key","","a trait that enables a type to convert itself to a …",null,null],[10,"into_endian_bytes","","convert <code>self</code> into an <code>IVec</code> containing bytes ordered in a …",9,[[],["cow",4]]],[10,"from_endian_bytes","","convert a slice of bytes into <code>Self</code> by interpretting <code>bytes</code> …",9,[[]]],[4,"Error","pliantdb::schema::view","errors that arise when interacting with views",null,null],[13,"SerializationError","","an error occurred while serializing or deserializing",10,null],[13,"ReduceUnimplemented","","returned when",10,null],[6,"MapResult","","a type alias for the result of <code>View::map()</code>",null,null],[8,"View","","a map/reduce powered indexing and aggregation schema",null,null],[16,"MapKey","","the key for this view. If you\'re using ranged queries, …",11,null],[16,"MapValue","","an associated type that can be stored with each entry in …",11,null],[16,"Reduce","","when implementing reduce(), this is the returned type",11,null],[10,"version","","the version of the view. Changing this value will cause …",11,[[]]],[10,"name","","the name of the view. Must be unique per collection.",11,[[],["cow",4]]],[10,"map","","the map function for this view. This function is …",11,[[["document",3]],["mapresult",6]]],[11,"reduce","","the reduce function for this view. If …",11,[[],[["result",4],["error",4]]]],[4,"SerializableValue","","an enum representing either an owned value or a borrowed …",null,null],[13,"Owned","","an owned value",12,null],[13,"Borrowed","","a borrowed value",12,null],[8,"Database","pliantdb::schema","a trait that defines a group of collections that are …",null,null],[10,"define_collections","","implementors must define their <code>Collection</code>s in <code>schema</code>",13,[[["schema",3]]]],[3,"Schema","","a collection of defined collections and views",null,null],[0,"storage","pliantdb","types for interacting with a local, file-based database",null,null],[3,"Storage","pliantdb::storage","a local, file-based database",null,null],[11,"open_local","","opens a local file as a pliantdb",14,[[["asref",8],["path",3]],[["result",4],["error",4]]]],[4,"Error","","errors that can occur from interacting with storage",null,null],[13,"Sled","","an error occurred interacting with <code>sled</code>",15,null],[13,"InternalSerialization","","an error occurred serializing the underlying database …",15,null],[13,"Serialization","","an error occurred serializing the contents of a <code>Document</code> …",15,null],[0,"transaction","pliantdb","types for executing transactions",null,null],[3,"Transaction","pliantdb::transaction","a list of operations to execute as a single unit. If any …",null,null],[12,"operations","","the operations in this transaction",16,null],[11,"push","","add an operation to the transaction",16,[[["operation",3]]]],[3,"Operation","","a single operation performed on a <code>Collection</code>",null,null],[12,"collection","","the id of the <code>Collection</code>",17,null],[12,"command","","the command being performed",17,null],[4,"Command","","a command to execute within a <code>Collection</code>",null,null],[13,"Insert","","insert a new document containing <code>contents</code>",18,null],[12,"contents","pliantdb::transaction::Command","the initial contents of the document",19,null],[13,"Update","pliantdb::transaction","update an existing <code>Document</code> identified by <code>id</code>. <code>revision</code> …",18,null],[12,"header","pliantdb::transaction::Command","the current header of the <code>Document</code>",20,null],[12,"contents","","the new contents to store within the <code>Document</code>",20,null],[4,"OperationResult","pliantdb::transaction","information about the result of each <code>Operation</code> in a …",null,null],[13,"Success","","an operation succeeded but had no information to output",21,null],[13,"DocumentUpdated","","a <code>Document</code> was updated",21,null],[12,"collection","pliantdb::transaction::OperationResult","the id of the <code>Collection</code> of the updated <code>Document</code>",22,null],[12,"header","","the header of the updated <code>Document</code>",22,null],[3,"Executed","pliantdb::transaction","details about an executed transaction",null,null],[12,"id","","the id of the transaction",23,null],[12,"changed_documents","","a list of containing ids of <code>Documents</code> changed",23,null],[3,"ChangedDocument","","a record of a changed",null,null],[12,"collection","","the id of the <code>Collection</code> of the changed <code>Document</code>",24,null],[12,"id","","the id of the changed <code>Document</code>",24,null],[4,"Error","pliantdb","an enumeration of errors that this crate can produce",null,null],[13,"Storage","","an error from serializing or deserializing from a <code>Document</code>",25,null],[13,"CollectionNotFound","","an attempt to use a <code>Collection</code> with a <code>Database</code> that it …",25,null],[13,"DocumentNotFound","","an attempt to update a document that doesn\'t exist",25,null],[13,"DocumentConflict","","when updating a document, if a situation is detected …",25,null],[11,"from","pliantdb::connection","",1,[[]]],[11,"into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"init","","",1,[[]]],[11,"deref","","",1,[[]]],[11,"deref_mut","","",1,[[]]],[11,"drop","","",1,[[]]],[11,"from","pliantdb::document","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"init","","",2,[[]]],[11,"deref","","",2,[[]]],[11,"deref_mut","","",2,[[]]],[11,"drop","","",2,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"init","","",3,[[]]],[11,"deref","","",3,[[]]],[11,"deref_mut","","",3,[[]]],[11,"drop","","",3,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"init","","",4,[[]]],[11,"deref","","",4,[[]]],[11,"deref_mut","","",4,[[]]],[11,"drop","","",4,[[]]],[11,"from","pliantdb::schema::collection","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"to_string","","",5,[[],["string",3]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"init","","",5,[[]]],[11,"deref","","",5,[[]]],[11,"deref_mut","","",5,[[]]],[11,"drop","","",5,[[]]],[11,"from","pliantdb::schema","",26,[[]]],[11,"into","","",26,[[]]],[11,"borrow","","",26,[[]]],[11,"borrow_mut","","",26,[[]]],[11,"try_from","","",26,[[],["result",4]]],[11,"try_into","","",26,[[],["result",4]]],[11,"type_id","","",26,[[],["typeid",3]]],[11,"init","","",26,[[]]],[11,"deref","","",26,[[]]],[11,"deref_mut","","",26,[[]]],[11,"drop","","",26,[[]]],[11,"from","pliantdb::schema::view::map","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"init","","",7,[[]]],[11,"deref","","",7,[[]]],[11,"deref_mut","","",7,[[]]],[11,"drop","","",7,[[]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"init","","",8,[[]]],[11,"deref","","",8,[[]]],[11,"deref_mut","","",8,[[]]],[11,"drop","","",8,[[]]],[11,"from","pliantdb::schema::view","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_string","","",10,[[],["string",3]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"init","","",10,[[]]],[11,"deref","","",10,[[]]],[11,"deref_mut","","",10,[[]]],[11,"drop","","",10,[[]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"init","","",12,[[]]],[11,"deref","","",12,[[]]],[11,"deref_mut","","",12,[[]]],[11,"drop","","",12,[[]]],[11,"from","pliantdb::storage","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"init","","",14,[[]]],[11,"deref","","",14,[[]]],[11,"deref_mut","","",14,[[]]],[11,"drop","","",14,[[]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_string","","",15,[[],["string",3]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"init","","",15,[[]]],[11,"deref","","",15,[[]]],[11,"deref_mut","","",15,[[]]],[11,"drop","","",15,[[]]],[11,"from","pliantdb::transaction","",16,[[]]],[11,"into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"init","","",16,[[]]],[11,"deref","","",16,[[]]],[11,"deref_mut","","",16,[[]]],[11,"drop","","",16,[[]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"init","","",17,[[]]],[11,"deref","","",17,[[]]],[11,"deref_mut","","",17,[[]]],[11,"drop","","",17,[[]]],[11,"from","","",18,[[]]],[11,"into","","",18,[[]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"init","","",18,[[]]],[11,"deref","","",18,[[]]],[11,"deref_mut","","",18,[[]]],[11,"drop","","",18,[[]]],[11,"from","","",21,[[]]],[11,"into","","",21,[[]]],[11,"borrow","","",21,[[]]],[11,"borrow_mut","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"init","","",21,[[]]],[11,"deref","","",21,[[]]],[11,"deref_mut","","",21,[[]]],[11,"drop","","",21,[[]]],[11,"from","","",23,[[]]],[11,"into","","",23,[[]]],[11,"borrow","","",23,[[]]],[11,"borrow_mut","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"init","","",23,[[]]],[11,"deref","","",23,[[]]],[11,"deref_mut","","",23,[[]]],[11,"drop","","",23,[[]]],[11,"from","","",24,[[]]],[11,"into","","",24,[[]]],[11,"to_owned","","",24,[[]]],[11,"clone_into","","",24,[[]]],[11,"borrow","","",24,[[]]],[11,"borrow_mut","","",24,[[]]],[11,"try_from","","",24,[[],["result",4]]],[11,"try_into","","",24,[[],["result",4]]],[11,"type_id","","",24,[[],["typeid",3]]],[11,"init","","",24,[[]]],[11,"deref","","",24,[[]]],[11,"deref_mut","","",24,[[]]],[11,"drop","","",24,[[]]],[11,"from","pliantdb","",25,[[]]],[11,"into","","",25,[[]]],[11,"to_string","","",25,[[],["string",3]]],[11,"borrow","","",25,[[]]],[11,"borrow_mut","","",25,[[]]],[11,"try_from","","",25,[[],["result",4]]],[11,"try_into","","",25,[[],["result",4]]],[11,"type_id","","",25,[[],["typeid",3]]],[11,"init","","",25,[[]]],[11,"deref","","",25,[[]]],[11,"deref_mut","","",25,[[]]],[11,"drop","","",25,[[]]],[11,"collection","pliantdb::storage","",14,[[],[["result",4],["collection",3],["error",4]]]],[11,"insert","","",14,[[["vec",3]],[["box",3],["pin",3]]]],[11,"update","","",14,[[["document",3]],[["pin",3],["box",3]]]],[11,"apply_transaction","","",14,[[["transaction",3]],[["box",3],["pin",3]]]],[11,"get","","",14,[[["uuid",3]],[["box",3],["pin",3]]]],[11,"as_ref","pliantdb::schema::view","",12,[[]]],[11,"from","pliantdb::schema::collection","",5,[[]]],[11,"from","","",5,[[["string",3]]]],[11,"from","pliantdb::schema::view","",10,[[["error",3]]]],[11,"from","","",12,[[],["serializablevalue",4]]],[11,"from","pliantdb::storage","",15,[[["error",4]]]],[11,"from","","",15,[[["error",6]]]],[11,"from","","",15,[[["error",3]]]],[11,"from","pliantdb","",25,[[["error",4]]]],[11,"from","","",25,[[["error",4]]]],[11,"from","","",25,[[["error",3]]]],[11,"from","","",25,[[["error",6]]]],[11,"clone","pliantdb::document","",2,[[],["revision",3]]],[11,"clone","","",3,[[],["header",3]]],[11,"clone","pliantdb::schema::collection","",5,[[],["id",3]]],[11,"clone","pliantdb::storage","",14,[[],["storage",3]]],[11,"clone","pliantdb::transaction","",24,[[],["changeddocument",3]]],[11,"default","pliantdb::schema","",26,[[],["schema",3]]],[11,"default","pliantdb::transaction","",16,[[],["transaction",3]]],[11,"eq","pliantdb::document","",2,[[["revision",3]]]],[11,"ne","","",2,[[["revision",3]]]],[11,"eq","","",3,[[["header",3]]]],[11,"ne","","",3,[[["header",3]]]],[11,"eq","pliantdb::schema::collection","",5,[[["id",3]]]],[11,"ne","","",5,[[["id",3]]]],[11,"eq","pliantdb::schema::view::map","",7,[[["map",3]]]],[11,"ne","","",7,[[["map",3]]]],[11,"fmt","pliantdb::document","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","pliantdb::schema::collection","",5,[[["formatter",3]],["result",6]]],[11,"fmt","pliantdb::schema::view::map","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","pliantdb::schema::view","",10,[[["formatter",3]],["result",6]]],[11,"fmt","pliantdb::storage","",15,[[["formatter",3]],["result",6]]],[11,"fmt","pliantdb::transaction","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"fmt","","",18,[[["formatter",3]],["result",6]]],[11,"fmt","","",21,[[["formatter",3]],["result",6]]],[11,"fmt","","",23,[[["formatter",3]],["result",6]]],[11,"fmt","","",24,[[["formatter",3]],["result",6]]],[11,"fmt","pliantdb","",25,[[["formatter",3]],["result",6]]],[11,"fmt","pliantdb::schema::collection","",5,[[["formatter",3]],["result",6]]],[11,"fmt","pliantdb::schema::view","",10,[[["formatter",3]],["result",6]]],[11,"fmt","pliantdb::storage","",15,[[["formatter",3]],["result",6]]],[11,"fmt","pliantdb","",25,[[["formatter",3]],["result",6]]],[11,"source","pliantdb::schema::view","",10,[[],[["option",4],["error",8]]]],[11,"source","pliantdb::storage","",15,[[],[["option",4],["error",8]]]],[11,"source","pliantdb","",25,[[],[["option",4],["error",8]]]],[11,"serialize","pliantdb::document","",2,[[],["result",4]]],[11,"serialize","","",3,[[],["result",4]]],[11,"serialize","","",4,[[],["result",4]]],[11,"serialize","pliantdb::schema::collection","",5,[[],["result",4]]],[11,"serialize","pliantdb::schema::view::map","",8,[[],["result",4]]],[11,"serialize","pliantdb::transaction","",18,[[],["result",4]]],[11,"serialize","","",21,[[],["result",4]]],[11,"serialize","","",23,[[],["result",4]]],[11,"serialize","","",24,[[],["result",4]]],[11,"deserialize","pliantdb::document","",2,[[],["result",4]]],[11,"deserialize","","",3,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","pliantdb::schema::collection","",5,[[],["result",4]]],[11,"deserialize","pliantdb::schema::view::map","",8,[[],["result",4]]],[11,"deserialize","pliantdb::transaction","",18,[[],["result",4]]],[11,"deserialize","","",21,[[],["result",4]]],[11,"deserialize","","",23,[[],["result",4]]],[11,"deserialize","","",24,[[],["result",4]]],[11,"new","pliantdb::document","creates the first revision for a document with the SHA256 …",2,[[]]],[11,"next_revision","","creates the next revision in sequence with an updated …",2,[[],["option",4]]],[11,"define_collection","pliantdb::schema","adds the collection <code>C</code> and its views",26,[[]]],[11,"define_view","","adds the view <code>V</code>",26,[[]]],[11,"contains","","returns true if this schema contains the collection <code>C</code>",26,[[]]]],"p":[[8,"Connection"],[3,"Collection"],[3,"Revision"],[3,"Header"],[3,"Document"],[3,"Id"],[8,"Collection"],[3,"Map"],[3,"Serialized"],[8,"Key"],[4,"Error"],[8,"View"],[4,"SerializableValue"],[8,"Database"],[3,"Storage"],[4,"Error"],[3,"Transaction"],[3,"Operation"],[4,"Command"],[13,"Insert"],[13,"Update"],[4,"OperationResult"],[13,"DocumentUpdated"],[3,"Executed"],[3,"ChangedDocument"],[4,"Error"],[3,"Schema"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);