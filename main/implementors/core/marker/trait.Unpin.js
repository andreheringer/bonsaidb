(function() {var implementors = {};
implementors["pliantdb"] = [{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl&lt;'a, Cn, Cl&gt; Unpin for Collection&lt;'a, Cn, Cl&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Cl: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Id","synthetic":true,"types":[]},{"text":"impl Unpin for Schema","synthetic":true,"types":[]},{"text":"impl&lt;'a, C&gt; Unpin for Document&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Revision","synthetic":true,"types":[]},{"text":"impl&lt;'k, K, V&gt; Unpin for Map&lt;'k, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Unpin for SerializableValue&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;DB&gt; Unpin for Storage&lt;DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()