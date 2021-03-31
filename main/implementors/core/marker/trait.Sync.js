(function() {var implementors = {};
implementors["pliantdb"] = [{"text":"impl Sync for Command","synthetic":true,"types":[]}];
implementors["pliantdb_core"] = [{"text":"impl&lt;'a, Cn, Cl&gt; Sync for Collection&lt;'a, Cn, Cl&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Cl: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Cn: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Cn, V&gt; Sync for View&lt;'a, Cn, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Cn: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;V as View&gt;::Key: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K&gt; Sync for QueryKey&lt;K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for AccessPolicy","synthetic":true,"types":[]},{"text":"impl Sync for Revision","synthetic":true,"types":[]},{"text":"impl Sync for Header","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Document&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for Id","synthetic":true,"types":[]},{"text":"impl Sync for Schema","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Sync for Map&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Sync for MappedDocument&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Serialized","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Sync for MappedValue&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Sync for SerializableValue&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Transaction&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Operation&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Command&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for OperationResult","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Sync for Executed&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Sync for ChangedDocument","synthetic":true,"types":[]},{"text":"impl Sync for Basic","synthetic":true,"types":[]},{"text":"impl Sync for BasicCount","synthetic":true,"types":[]},{"text":"impl Sync for BasicByParentId","synthetic":true,"types":[]},{"text":"impl Sync for BasicByCategory","synthetic":true,"types":[]},{"text":"impl Sync for BasicByBrokenParentId","synthetic":true,"types":[]},{"text":"impl Sync for BasicDatabase","synthetic":true,"types":[]},{"text":"impl Sync for TestDirectory","synthetic":true,"types":[]},{"text":"impl Sync for BasicCollectionWithNoViews","synthetic":true,"types":[]},{"text":"impl Sync for BasicCollectionWithOnlyBrokenParentId","synthetic":true,"types":[]},{"text":"impl Sync for UnassociatedCollection","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]}];
implementors["pliantdb_dump"] = [{"text":"impl Sync for Configuration","synthetic":true,"types":[]},{"text":"impl Sync for Tasks","synthetic":true,"types":[]},{"text":"impl Sync for Views","synthetic":true,"types":[]},{"text":"impl Sync for Cli","synthetic":true,"types":[]},{"text":"impl Sync for Command","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for OpenTrees","synthetic":true,"types":[]},{"text":"impl&lt;DB&gt; Sync for Storage&lt;DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for TaskManager","synthetic":true,"types":[]},{"text":"impl Sync for Statuses","synthetic":true,"types":[]},{"text":"impl&lt;DB&gt; Sync for IntegrityScanner&lt;DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for IntegrityScan","synthetic":true,"types":[]},{"text":"impl&lt;DB&gt; Sync for Mapper&lt;DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Map","synthetic":true,"types":[]},{"text":"impl&lt;'a, DB&gt; !Sync for DocumentRequest&lt;'a, DB&gt;","synthetic":true,"types":[]},{"text":"impl Sync for ViewEntry","synthetic":true,"types":[]},{"text":"impl Sync for EntryMapping","synthetic":true,"types":[]},{"text":"impl Sync for Task","synthetic":true,"types":[]}];
implementors["pliantdb_jobs"] = [{"text":"impl&lt;Key&gt; Sync for Manager&lt;Key&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Key: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Id","synthetic":true,"types":[]},{"text":"impl&lt;T, Key&gt; Sync for Handle&lt;T, Key&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Key: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pliantdb_local"] = [{"text":"impl Sync for Configuration","synthetic":true,"types":[]},{"text":"impl Sync for Tasks","synthetic":true,"types":[]},{"text":"impl Sync for Views","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl&lt;DB&gt; Sync for Storage&lt;DB&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;DB: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Cli","synthetic":true,"types":[]},{"text":"impl Sync for Command","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()