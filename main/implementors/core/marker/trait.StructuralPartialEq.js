(function() {var implementors = {};
implementors["bonsaidb_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_core/admin/struct.Database.html\" title=\"struct bonsaidb_core::admin::Database\">Database</a>","synthetic":false,"types":["bonsaidb_core::admin::database::Database"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_core/connection/struct.Range.html\" title=\"struct bonsaidb_core::connection::Range\">Range</a>&lt;T&gt;","synthetic":false,"types":["bonsaidb_core::connection::Range"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"bonsaidb_core/connection/enum.Bound.html\" title=\"enum bonsaidb_core::connection::Bound\">Bound</a>&lt;T&gt;","synthetic":false,"types":["bonsaidb_core::connection::Bound"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_core/document/struct.Revision.html\" title=\"struct bonsaidb_core::document::Revision\">Revision</a>","synthetic":false,"types":["bonsaidb_core::document::revision::Revision"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_core/document/struct.Header.html\" title=\"struct bonsaidb_core::document::Header\">Header</a>","synthetic":false,"types":["bonsaidb_core::document::Header"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"bonsaidb_core/document/enum.KeyId.html\" title=\"enum bonsaidb_core::document::KeyId\">KeyId</a>","synthetic":false,"types":["bonsaidb_core::document::KeyId"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"bonsaidb_core/schema/trait.Collection.html\" title=\"trait bonsaidb_core::schema::Collection\">Collection</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + for&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.CollectionDocument.html\" title=\"struct bonsaidb_core::schema::CollectionDocument\">CollectionDocument</a>&lt;C&gt;","synthetic":false,"types":["bonsaidb_core::schema::collection::CollectionDocument"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"bonsaidb_core/schema/enum.NamedReference.html\" title=\"enum bonsaidb_core::schema::NamedReference\">NamedReference</a>&lt;'a&gt;","synthetic":false,"types":["bonsaidb_core::schema::collection::NamedReference"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.Name.html\" title=\"struct bonsaidb_core::schema::Name\">Name</a>","synthetic":false,"types":["bonsaidb_core::schema::names::Name"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.Authority.html\" title=\"struct bonsaidb_core::schema::Authority\">Authority</a>","synthetic":false,"types":["bonsaidb_core::schema::names::Authority"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.SchemaName.html\" title=\"struct bonsaidb_core::schema::SchemaName\">SchemaName</a>","synthetic":false,"types":["bonsaidb_core::schema::names::SchemaName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.CollectionName.html\" title=\"struct bonsaidb_core::schema::CollectionName\">CollectionName</a>","synthetic":false,"types":["bonsaidb_core::schema::names::CollectionName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/struct.ViewName.html\" title=\"struct bonsaidb_core::schema::ViewName\">ViewName</a>","synthetic":false,"types":["bonsaidb_core::schema::names::ViewName"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"bonsaidb_core/schema/view/trait.Key.html\" title=\"trait bonsaidb_core::schema::view::Key\">Key</a>, V:&nbsp;<a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/view/map/struct.Map.html\" title=\"struct bonsaidb_core::schema::view::map::Map\">Map</a>&lt;K, V&gt;","synthetic":false,"types":["bonsaidb_core::schema::view::map::Map"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"bonsaidb_core/schema/view/trait.Key.html\" title=\"trait bonsaidb_core::schema::view::Key\">Key</a>, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_core/schema/view/map/struct.MappedValue.html\" title=\"struct bonsaidb_core::schema::view::map::MappedValue\">MappedValue</a>&lt;K, V&gt;","synthetic":false,"types":["bonsaidb_core::schema::view::map::MappedValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_core/keyvalue/struct.Timestamp.html\" title=\"struct bonsaidb_core::keyvalue::Timestamp\">Timestamp</a>","synthetic":false,"types":["bonsaidb_core::keyvalue::timestamp::Timestamp"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"bonsaidb_core/keyvalue/enum.Value.html\" title=\"enum bonsaidb_core::keyvalue::Value\">Value</a>","synthetic":false,"types":["bonsaidb_core::keyvalue::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"bonsaidb_core/keyvalue/enum.Numeric.html\" title=\"enum bonsaidb_core::keyvalue::Numeric\">Numeric</a>","synthetic":false,"types":["bonsaidb_core::keyvalue::Numeric"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"bonsaidb_core/keyvalue/enum.KeyStatus.html\" title=\"enum bonsaidb_core::keyvalue::KeyStatus\">KeyStatus</a>","synthetic":false,"types":["bonsaidb_core::keyvalue::KeyStatus"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.Basic.html\" title=\"struct bonsaidb_core::test_util::Basic\">Basic</a>","synthetic":false,"types":["bonsaidb_core::test_util::Basic"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.EncryptedBasic.html\" title=\"struct bonsaidb_core::test_util::EncryptedBasic\">EncryptedBasic</a>","synthetic":false,"types":["bonsaidb_core::test_util::EncryptedBasic"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_core/test_util/struct.Unique.html\" title=\"struct bonsaidb_core::test_util::Unique\">Unique</a>","synthetic":false,"types":["bonsaidb_core::test_util::Unique"]}];
implementors["bonsaidb_local"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_local/jobs/task/struct.Id.html\" title=\"struct bonsaidb_local::jobs::task::Id\">Id</a>","synthetic":false,"types":["bonsaidb_local::jobs::task::Id"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bonsaidb_local/struct.StorageId.html\" title=\"struct bonsaidb_local::StorageId\">StorageId</a>","synthetic":false,"types":["bonsaidb_local::storage::StorageId"]}];
implementors["bonsaidb_server"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"bonsaidb_server/enum.Transport.html\" title=\"enum bonsaidb_server::Transport\">Transport</a>","synthetic":false,"types":["bonsaidb_server::server::connected_client::Transport"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()