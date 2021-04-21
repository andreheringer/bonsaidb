(function() {var implementors = {};
implementors["pliantdb_client"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"pliantdb_client/enum.Error.html\" title=\"enum pliantdb_client::Error\">Error</a>","synthetic":false,"types":["pliantdb_client::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"pliantdb_client/enum.Error.html\" title=\"enum pliantdb_client::Error\">Error</a>","synthetic":false,"types":["pliantdb_client::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pliantdb_core/networking/enum.Error.html\" title=\"enum pliantdb_core::networking::Error\">Error</a>&gt; for <a class=\"enum\" href=\"pliantdb_client/enum.Error.html\" title=\"enum pliantdb_client::Error\">Error</a>","synthetic":false,"types":["pliantdb_client::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pliantdb_core/enum.Error.html\" title=\"enum pliantdb_core::Error\">Error</a>&gt; for <a class=\"enum\" href=\"pliantdb_client/enum.Error.html\" title=\"enum pliantdb_client::Error\">Error</a>","synthetic":false,"types":["pliantdb_client::error::Error"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;SendError&lt;T&gt;&gt; for <a class=\"enum\" href=\"pliantdb_client/enum.Error.html\" title=\"enum pliantdb_client::Error\">Error</a>","synthetic":false,"types":["pliantdb_client::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RecvError&gt; for <a class=\"enum\" href=\"pliantdb_client/enum.Error.html\" title=\"enum pliantdb_client::Error\">Error</a>","synthetic":false,"types":["pliantdb_client::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"enum\" href=\"https://docs.rs/bincode/1.3.3/bincode/error/enum.ErrorKind.html\" title=\"enum bincode::error::ErrorKind\">ErrorKind</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"pliantdb_client/enum.Error.html\" title=\"enum pliantdb_client::Error\">Error</a>","synthetic":false,"types":["pliantdb_client::error::Error"]}];
implementors["pliantdb_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"pliantdb_core/schema/view/enum.Error.html\" title=\"enum pliantdb_core::schema::view::Error\">Error</a>","synthetic":false,"types":["pliantdb_core::schema::view::Error"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"enum\" href=\"pliantdb_core/schema/view/enum.SerializableValue.html\" title=\"enum pliantdb_core::schema::view::SerializableValue\">SerializableValue</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.125/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["pliantdb_core::schema::view::SerializableValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"pliantdb_core/schema/struct.InvalidNameError.html\" title=\"struct pliantdb_core::schema::InvalidNameError\">InvalidNameError</a>&gt; for <a class=\"enum\" href=\"pliantdb_core/enum.Error.html\" title=\"enum pliantdb_core::Error\">Error</a>","synthetic":false,"types":["pliantdb_core::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"pliantdb_core/enum.Error.html\" title=\"enum pliantdb_core::Error\">Error</a>","synthetic":false,"types":["pliantdb_core::Error"]}];
implementors["pliantdb_local"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"pliantdb_local/enum.Error.html\" title=\"enum pliantdb_local::Error\">Error</a>","synthetic":false,"types":["pliantdb_local::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"enum\" href=\"pliantdb_local/core/networking/fabruic/error/enum.ErrorKind.html\" title=\"enum pliantdb_local::core::networking::fabruic::error::ErrorKind\">ErrorKind</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"pliantdb_local/enum.Error.html\" title=\"enum pliantdb_local::Error\">Error</a>","synthetic":false,"types":["pliantdb_local::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"pliantdb_local/enum.Error.html\" title=\"enum pliantdb_local::Error\">Error</a>","synthetic":false,"types":["pliantdb_local::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pliantdb_local/core/circulate/flume/enum.RecvError.html\" title=\"enum pliantdb_local::core::circulate::flume::RecvError\">RecvError</a>&gt; for <a class=\"enum\" href=\"pliantdb_local/enum.Error.html\" title=\"enum pliantdb_local::Error\">Error</a>","synthetic":false,"types":["pliantdb_local::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pliantdb_local/core/schema/view/enum.Error.html\" title=\"enum pliantdb_local::core::schema::view::Error\">Error</a>&gt; for <a class=\"enum\" href=\"pliantdb_local/enum.Error.html\" title=\"enum pliantdb_local::Error\">Error</a>","synthetic":false,"types":["pliantdb_local::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pliantdb_local/core/enum.Error.html\" title=\"enum pliantdb_local::core::Error\">Error</a>&gt; for <a class=\"enum\" href=\"pliantdb_local/enum.Error.html\" title=\"enum pliantdb_local::Error\">Error</a>","synthetic":false,"types":["pliantdb_local::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.40/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;&gt; for <a class=\"enum\" href=\"pliantdb_local/enum.Error.html\" title=\"enum pliantdb_local::Error\">Error</a>","synthetic":false,"types":["pliantdb_local::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pliantdb_local/enum.Error.html\" title=\"enum pliantdb_local::Error\">Error</a>&gt; for <a class=\"enum\" href=\"pliantdb_local/core/enum.Error.html\" title=\"enum pliantdb_local::core::Error\">Error</a>","synthetic":false,"types":["pliantdb_core::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"pliantdb_local/core/schema/struct.InvalidNameError.html\" title=\"struct pliantdb_local::core::schema::InvalidNameError\">InvalidNameError</a>&gt; for <a class=\"enum\" href=\"pliantdb_local/enum.Error.html\" title=\"enum pliantdb_local::Error\">Error</a>","synthetic":false,"types":["pliantdb_local::error::Error"]}];
implementors["pliantdb_server"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"pliantdb_server/enum.Error.html\" title=\"enum pliantdb_server::Error\">Error</a>","synthetic":false,"types":["pliantdb_server::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"pliantdb_server/enum.Error.html\" title=\"enum pliantdb_server::Error\">Error</a>","synthetic":false,"types":["pliantdb_server::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"pliantdb_server/enum.Error.html\" title=\"enum pliantdb_server::Error\">Error</a>","synthetic":false,"types":["pliantdb_server::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pliantdb_core/enum.Error.html\" title=\"enum pliantdb_core::Error\">Error</a>&gt; for <a class=\"enum\" href=\"pliantdb_server/enum.Error.html\" title=\"enum pliantdb_server::Error\">Error</a>","synthetic":false,"types":["pliantdb_server::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pliantdb_local/error/enum.Error.html\" title=\"enum pliantdb_local::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"pliantdb_server/enum.Error.html\" title=\"enum pliantdb_server::Error\">Error</a>","synthetic":false,"types":["pliantdb_server::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"pliantdb_core/schema/names/struct.InvalidNameError.html\" title=\"struct pliantdb_core::schema::names::InvalidNameError\">InvalidNameError</a>&gt; for <a class=\"enum\" href=\"pliantdb_server/enum.Error.html\" title=\"enum pliantdb_server::Error\">Error</a>","synthetic":false,"types":["pliantdb_server::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"enum\" href=\"https://docs.rs/bincode/1.3.3/bincode/error/enum.ErrorKind.html\" title=\"enum bincode::error::ErrorKind\">ErrorKind</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"enum\" href=\"pliantdb_server/enum.Error.html\" title=\"enum pliantdb_server::Error\">Error</a>","synthetic":false,"types":["pliantdb_server::error::Error"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()