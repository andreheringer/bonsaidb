(function() {var implementors = {};
implementors["pliantdb_core"] = [{"text":"impl From&lt;&amp;'static str&gt; for Id","synthetic":false,"types":[]},{"text":"impl From&lt;String&gt; for Id","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; From&lt;&amp;'a T&gt; for SerializableValue&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]}];
implementors["pliantdb_local"] = [{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Box&lt;ErrorKind, Global&gt;&gt; for Error","synthetic":false,"types":[]},{"text":"impl From&lt;Error&gt; for Error","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()