Ext.data.JsonP.Gnt_column_Successor({"tagname":"class","name":"Gnt.column.Successor","autodetected":{"aliases":true,"alternateClassNames":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Successor.js","href":"Successor.html#Gnt-column-Successor"}],"extends":"Gnt.column.Dependency","aliases":{"widget":["successorcolumn"]},"alternateClassNames":[],"mixins":["Gnt.mixin.Localizable"],"requires":[],"uses":[],"members":[{"name":"l10n","tagname":"cfg","owner":"Gnt.column.Successor","id":"cfg-l10n","meta":{}},{"name":"text","tagname":"cfg","owner":"Gnt.column.Successor","id":"cfg-text","meta":{"deprecated":{"text":"<p>Please use <a href=\"#!/api/Gnt.column.Successor-cfg-l10n\" rel=\"Gnt.column.Successor-cfg-l10n\" class=\"docClass\">l10n</a> instead.</p>\n"}}},{"name":"useSequenceNumber","tagname":"cfg","owner":"Gnt.column.Dependency","id":"cfg-useSequenceNumber","meta":{}},{"name":"activeLocaleId","tagname":"property","owner":"Sch.mixin.Localizable","id":"property-activeLocaleId","meta":{"private":true}},{"name":"field","tagname":"property","owner":"Gnt.column.Dependency","id":"property-field","meta":{"private":true}},{"name":"legacyMode","tagname":"property","owner":"Sch.mixin.Localizable","id":"property-legacyMode","meta":{"private":true}},{"name":"separator","tagname":"property","owner":"Gnt.column.Dependency","id":"property-separator","meta":{"private":true}},{"name":"type","tagname":"property","owner":"Gnt.column.Dependency","id":"property-type","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Gnt.column.Successor","id":"method-constructor","meta":{}},{"name":"L","tagname":"method","owner":"Sch.mixin.Localizable","id":"method-L","meta":{}},{"name":"afterRender","tagname":"method","owner":"Gnt.column.Dependency","id":"method-afterRender","meta":{"private":true}},{"name":"applyLocale","tagname":"method","owner":"Sch.mixin.Localizable","id":"method-applyLocale","meta":{"private":true}},{"name":"getContainingPanel","tagname":"method","owner":"Gnt.column.Dependency","id":"method-getContainingPanel","meta":{"private":true}},{"name":"isLocaleApplied","tagname":"method","owner":"Sch.mixin.Localizable","id":"method-isLocaleApplied","meta":{"private":true}},{"name":"localize","tagname":"method","owner":"Sch.mixin.Localizable","id":"method-localize","meta":{}},{"name":"renderer","tagname":"method","owner":"Gnt.column.Dependency","id":"method-renderer","meta":{"private":true}},{"name":"setDirtyClass","tagname":"method","owner":"Gnt.column.Dependency","id":"method-setDirtyClass","meta":{"private":true}}],"code_type":"ext_define","id":"class-Gnt.column.Successor","short_doc":"A Column showing the successors of a task. ...","component":false,"superclasses":["Ext.grid.column.Column","Gnt.column.Dependency"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.grid.column.Column<div class='subclass '><a href='#!/api/Gnt.column.Dependency' rel='Gnt.column.Dependency' class='docClass'>Gnt.column.Dependency</a><div class='subclass '><strong>Gnt.column.Successor</strong></div></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/Gnt.mixin.Localizable' rel='Gnt.mixin.Localizable' class='docClass'>Gnt.mixin.Localizable</a></div><h4>Files</h4><div class='dependency'><a href='source/Successor.html#Gnt-column-Successor' target='_blank'>Successor.js</a></div></pre><div class='doc-contents'><p>A Column showing the successors of a task. The column is editable, however to enable the editing you will need to add a\n<code><a href=\"#!/api/Sch.plugin.TreeCellEditing\" rel=\"Sch.plugin.TreeCellEditing\" class=\"docClass\">Sch.plugin.TreeCellEditing</a></code> plugin to your gantt panel. The overall setup will look like this:</p>\n\n<pre><code>var gantt = Ext.create('<a href=\"#!/api/Gnt.panel.Gantt\" rel=\"Gnt.panel.Gantt\" class=\"docClass\">Gnt.panel.Gantt</a>', {\n    height      : 600,\n    width       : 1000,\n\n    // Setup your grid columns\n    columns         : [\n        ...\n        {\n            xtype       : 'successorcolumn',\n            width       : 70\n        }\n        ...\n    ],\n\n    plugins             : [\n        Ext.create('<a href=\"#!/api/Sch.plugin.TreeCellEditing\" rel=\"Sch.plugin.TreeCellEditing\" class=\"docClass\">Sch.plugin.TreeCellEditing</a>', {\n            clicksToEdit: 1\n        })\n    ],\n    ...\n})\n</code></pre>\n\n<p>This column uses a specialized field - <a href=\"#!/api/Gnt.field.Dependency\" rel=\"Gnt.field.Dependency\" class=\"docClass\">Gnt.field.Dependency</a> which allows the\nuser to specify multiple successors including lag. Please refer to <a href=\"#!/api/Gnt.field.Dependency\" rel=\"Gnt.field.Dependency\" class=\"docClass\">Gnt.field.Dependency</a>\ndocumentation for the expected format when editing data in this column.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-l10n' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.column.Successor'>Gnt.column.Successor</span><br/><a href='source/Successor.html#Gnt-column-Successor-cfg-l10n' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Successor-cfg-l10n' class='name expandable'>l10n</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>A object, purposed for the class localization. ...</div><div class='long'><p>A object, purposed for the class localization. Contains the following keys/values:</p>\n\n<pre><code>        - text : 'Successors'\n</code></pre>\n<p>Overrides: <a href=\"#!/api/Sch.mixin.Localizable-cfg-l10n\" rel=\"Sch.mixin.Localizable-cfg-l10n\" class=\"docClass\">Sch.mixin.Localizable.l10n</a></p></div></div></div><div id='cfg-text' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.column.Successor'>Gnt.column.Successor</span><br/><a href='source/Successor.html#Gnt-column-Successor-cfg-text' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Successor-cfg-text' class='name expandable'>text</a> : String<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'>The text to show in the column header, defaults to Successors. ...</div><div class='long'><p>The text to show in the column header, defaults to <code>Successors</code>.</p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This cfg has been <strong>deprected</strong> </p>\n        <p>Please use <a href=\"#!/api/Gnt.column.Successor-cfg-l10n\" rel=\"Gnt.column.Successor-cfg-l10n\" class=\"docClass\">l10n</a> instead.</p>\n\n        </div>\n</div></div></div><div id='cfg-useSequenceNumber' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Gnt.column.Dependency' rel='Gnt.column.Dependency' class='defined-in docClass'>Gnt.column.Dependency</a><br/><a href='source/Dependency2.html#Gnt-column-Dependency-cfg-useSequenceNumber' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Dependency-cfg-useSequenceNumber' class='name expandable'>useSequenceNumber</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Set to true to use auto-generated sequential identifiers\nto reference other tasks (see Gnt.model.Task.getSequenceNumb...</div><div class='long'><p>Set to <code>true</code> to use auto-generated sequential identifiers\nto reference other tasks (see <a href=\"#!/api/Gnt.model.Task-method-getSequenceNumber\" rel=\"Gnt.model.Task-method-getSequenceNumber\" class=\"docClass\">Gnt.model.Task.getSequenceNumber</a> for definition).\nIf value is <code>false</code>then the \"real\" id (that is stored in the database) will be used.</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-activeLocaleId' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-property-activeLocaleId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-property-activeLocaleId' class='name expandable'>activeLocaleId</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-field' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Gnt.column.Dependency' rel='Gnt.column.Dependency' class='defined-in docClass'>Gnt.column.Dependency</a><br/><a href='source/Dependency2.html#Gnt-column-Dependency-property-field' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Dependency-property-field' class='name expandable'>field</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Or 'successors'</p>\n</div><div class='long'><p>Or 'successors'</p>\n</div></div></div><div id='property-legacyMode' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-property-legacyMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-property-legacyMode' class='name expandable'>legacyMode</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-separator' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Gnt.column.Dependency' rel='Gnt.column.Dependency' class='defined-in docClass'>Gnt.column.Dependency</a><br/><a href='source/Dependency2.html#Gnt-column-Dependency-property-separator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Dependency-property-separator' class='name expandable'>separator</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>';'</code></p></div></div></div><div id='property-type' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Gnt.column.Dependency' rel='Gnt.column.Dependency' class='defined-in docClass'>Gnt.column.Dependency</a><br/><a href='source/Dependency2.html#Gnt-column-Dependency-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Dependency-property-type' class='name expandable'>type</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'predecessors'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.column.Successor'>Gnt.column.Successor</span><br/><a href='source/Successor.html#Gnt-column-Successor-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Gnt.column.Successor-method-constructor' class='name expandable'>Gnt.column.Successor</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Gnt.column.Successor\" rel=\"Gnt.column.Successor\" class=\"docClass\">Gnt.column.Successor</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Gnt.column.Successor\" rel=\"Gnt.column.Successor\" class=\"docClass\">Gnt.column.Successor</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Gnt.column.Dependency-method-constructor\" rel=\"Gnt.column.Dependency-method-constructor\" class=\"docClass\">Gnt.column.Dependency.constructor</a></p></div></div></div><div id='method-L' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-method-L' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-method-L' class='name expandable'>L</a>( <span class='pre'>id, [legacyHolderProp], [skipLocalizedCheck]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>This is shorthand reference to localize. ...</div><div class='long'><p>This is shorthand reference to <a href=\"#!/api/Sch.mixin.Localizable-method-localize\" rel=\"Sch.mixin.Localizable-method-localize\" class=\"docClass\">localize</a>. Retrieves translation of a phrase.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>Identifier of phrase.</p>\n</div></li><li><span class='pre'>legacyHolderProp</span> : String (optional)<div class='sub-desc'><p>Legacy class property name containing locales.</p>\n<p>Defaults to: <code>this.legacyHolderProp</code></p></div></li><li><span class='pre'>skipLocalizedCheck</span> : Boolean (optional)<div class='sub-desc'><p>Do not localize class if it's not localized yet.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Translation of specified phrase.</p>\n</div></li></ul></div></div></div><div id='method-afterRender' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Gnt.column.Dependency' rel='Gnt.column.Dependency' class='defined-in docClass'>Gnt.column.Dependency</a><br/><a href='source/Dependency2.html#Gnt-column-Dependency-method-afterRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Dependency-method-afterRender' class='name expandable'>afterRender</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-applyLocale' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-method-applyLocale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-method-applyLocale' class='name expandable'>applyLocale</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getContainingPanel' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Gnt.column.Dependency' rel='Gnt.column.Dependency' class='defined-in docClass'>Gnt.column.Dependency</a><br/><a href='source/Dependency2.html#Gnt-column-Dependency-method-getContainingPanel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Dependency-method-getContainingPanel' class='name expandable'>getContainingPanel</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-isLocaleApplied' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-method-isLocaleApplied' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-method-isLocaleApplied' class='name expandable'>isLocaleApplied</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-localize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-method-localize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-method-localize' class='name expandable'>localize</a>( <span class='pre'>id, [legacyHolderProp], [skipLocalizedCheck]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves translation of a phrase. ...</div><div class='long'><p>Retrieves translation of a phrase. There is a shorthand <a href=\"#!/api/Sch.mixin.Localizable-method-L\" rel=\"Sch.mixin.Localizable-method-L\" class=\"docClass\">L</a> for this method.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>Identifier of phrase.</p>\n</div></li><li><span class='pre'>legacyHolderProp</span> : String (optional)<div class='sub-desc'><p>Legacy class property name containing locales.</p>\n<p>Defaults to: <code>this.legacyHolderProp</code></p></div></li><li><span class='pre'>skipLocalizedCheck</span> : Boolean (optional)<div class='sub-desc'><p>Do not localize class if it's not localized yet.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Translation of specified phrase.</p>\n</div></li></ul></div></div></div><div id='method-renderer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Gnt.column.Dependency' rel='Gnt.column.Dependency' class='defined-in docClass'>Gnt.column.Dependency</a><br/><a href='source/Dependency2.html#Gnt-column-Dependency-method-renderer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Dependency-method-renderer' class='name expandable'>renderer</a>( <span class='pre'>value, meta, task</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>meta</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>task</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setDirtyClass' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Gnt.column.Dependency' rel='Gnt.column.Dependency' class='defined-in docClass'>Gnt.column.Dependency</a><br/><a href='source/Dependency2.html#Gnt-column-Dependency-method-setDirtyClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Dependency-method-setDirtyClass' class='name expandable'>setDirtyClass</a>( <span class='pre'>meta, task</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>meta</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>task</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});