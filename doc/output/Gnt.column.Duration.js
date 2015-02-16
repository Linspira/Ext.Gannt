Ext.data.JsonP.Gnt_column_Duration({"tagname":"class","name":"Gnt.column.Duration","autodetected":{"aliases":true,"alternateClassNames":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Duration.js","href":"Duration2.html#Gnt-column-Duration"}],"extends":"Ext.grid.column.Column","aliases":{"widget":["durationcolumn"]},"alternateClassNames":[],"mixins":["Gnt.mixin.Localizable"],"requires":["Gnt.field.Duration"],"uses":[],"members":[{"name":"align","tagname":"cfg","owner":"Gnt.column.Duration","id":"cfg-align","meta":{}},{"name":"decimalPrecision","tagname":"cfg","owner":"Gnt.column.Duration","id":"cfg-decimalPrecision","meta":{}},{"name":"instantUpdate","tagname":"cfg","owner":"Gnt.column.Duration","id":"cfg-instantUpdate","meta":{}},{"name":"l10n","tagname":"cfg","owner":"Gnt.column.Duration","id":"cfg-l10n","meta":{}},{"name":"text","tagname":"cfg","owner":"Gnt.column.Duration","id":"cfg-text","meta":{"deprecated":{"text":"<p>Please use <a href=\"#!/api/Gnt.column.Duration-cfg-l10n\" rel=\"Gnt.column.Duration-cfg-l10n\" class=\"docClass\">l10n</a> instead.</p>\n"}}},{"name":"useAbbreviation","tagname":"cfg","owner":"Gnt.column.Duration","id":"cfg-useAbbreviation","meta":{}},{"name":"width","tagname":"cfg","owner":"Gnt.column.Duration","id":"cfg-width","meta":{}},{"name":"activeLocaleId","tagname":"property","owner":"Sch.mixin.Localizable","id":"property-activeLocaleId","meta":{"private":true}},{"name":"field","tagname":"property","owner":"Gnt.column.Duration","id":"property-field","meta":{"private":true}},{"name":"fieldProperty","tagname":"property","owner":"Gnt.column.Duration","id":"property-fieldProperty","meta":{"private":true}},{"name":"legacyMode","tagname":"property","owner":"Sch.mixin.Localizable","id":"property-legacyMode","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Gnt.column.Duration","id":"method-constructor","meta":{}},{"name":"L","tagname":"method","owner":"Sch.mixin.Localizable","id":"method-L","meta":{}},{"name":"afterRender","tagname":"method","owner":"Gnt.column.Duration","id":"method-afterRender","meta":{"private":true}},{"name":"applyLocale","tagname":"method","owner":"Sch.mixin.Localizable","id":"method-applyLocale","meta":{"private":true}},{"name":"isLocaleApplied","tagname":"method","owner":"Sch.mixin.Localizable","id":"method-isLocaleApplied","meta":{"private":true}},{"name":"localize","tagname":"method","owner":"Sch.mixin.Localizable","id":"method-localize","meta":{}},{"name":"renderer","tagname":"method","owner":"Gnt.column.Duration","id":"method-renderer","meta":{"private":true}}],"code_type":"ext_define","id":"class-Gnt.column.Duration","short_doc":"A Column representing a Duration field of a task. ...","component":false,"superclasses":["Ext.grid.column.Column"],"subclasses":["Gnt.column.Effort"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.grid.column.Column<div class='subclass '><strong>Gnt.column.Duration</strong></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/Gnt.mixin.Localizable' rel='Gnt.mixin.Localizable' class='docClass'>Gnt.mixin.Localizable</a></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Gnt.field.Duration' rel='Gnt.field.Duration' class='docClass'>Gnt.field.Duration</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Gnt.column.Effort' rel='Gnt.column.Effort' class='docClass'>Gnt.column.Effort</a></div><h4>Files</h4><div class='dependency'><a href='source/Duration2.html#Gnt-column-Duration' target='_blank'>Duration.js</a></div></pre><div class='doc-contents'><p><p><img src=\"images/gantt/images/duration-field.png\" alt=\"\" width=\"367\" height=\"250\"></p></p>\n\n<p>A Column representing a <code>Duration</code> field of a task. The column is editable, however to enable the editing you will need to add a\n<code><a href=\"#!/api/Sch.plugin.TreeCellEditing\" rel=\"Sch.plugin.TreeCellEditing\" class=\"docClass\">Sch.plugin.TreeCellEditing</a></code> plugin to your gantt panel. The overall setup will look like this:</p>\n\n<pre><code>var gantt = Ext.create('<a href=\"#!/api/Gnt.panel.Gantt\" rel=\"Gnt.panel.Gantt\" class=\"docClass\">Gnt.panel.Gantt</a>', {\n    height      : 600,\n    width       : 1000,\n\n    // Setup your grid columns\n    columns         : [\n        ...\n        {\n            xtype       : 'durationcolumn',\n            width       : 70\n        }\n        ...\n    ],\n\n    plugins             : [\n        Ext.create('<a href=\"#!/api/Sch.plugin.TreeCellEditing\" rel=\"Sch.plugin.TreeCellEditing\" class=\"docClass\">Sch.plugin.TreeCellEditing</a>', {\n            clicksToEdit: 1\n        })\n    ],\n    ...\n})\n</code></pre>\n\n<p>This column uses a field - <a href=\"#!/api/Gnt.field.Duration\" rel=\"Gnt.field.Duration\" class=\"docClass\">Gnt.field.Duration</a> which allows the\nuser to specify not only the duration value, but also the duration units.</p>\n\n<p>When rendering the name of the duration unit, the <a href=\"#!/api/Sch.util.Date-static-method-getReadableNameOfUnit\" rel=\"Sch.util.Date-static-method-getReadableNameOfUnit\" class=\"docClass\">Sch.util.Date.getReadableNameOfUnit</a>\nmethod will be used to retrieve the name of the unit.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-align' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.column.Duration'>Gnt.column.Duration</span><br/><a href='source/Duration2.html#Gnt-column-Duration-cfg-align' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Duration-cfg-align' class='name expandable'>align</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The alignment of the text in the column. ...</div><div class='long'><p>The alignment of the text in the column.</p>\n<p>Defaults to: <code>'left'</code></p></div></div></div><div id='cfg-decimalPrecision' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.column.Duration'>Gnt.column.Duration</span><br/><a href='source/Duration2.html#Gnt-column-Duration-cfg-decimalPrecision' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Duration-cfg-decimalPrecision' class='name expandable'>decimalPrecision</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>A number of digits to show after the dot when rendering the value of the field or when editing it. ...</div><div class='long'><p>A number of digits to show after the dot when rendering the value of the field or when editing it.\nWhen set to 0, the duration values containing decimals part (like \"6.5 days\") will be considered invalid.</p>\n<p>Defaults to: <code>2</code></p></div></div></div><div id='cfg-instantUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.column.Duration'>Gnt.column.Duration</span><br/><a href='source/Duration2.html#Gnt-column-Duration-cfg-instantUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Duration-cfg-instantUpdate' class='name expandable'>instantUpdate</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Setting this to false will cause editor to apply its value to task only after it's closed. ...</div><div class='long'><p>Setting this to <code>false</code> will cause editor to apply its value to task only after it's closed.\nAnd if this otion is <code>true</code> then each value change will be reflected to task immediately. This option is just translated\nto the <a href=\"#!/api/Gnt.field.mixin.TaskField-cfg-instantUpdate\" rel=\"Gnt.field.mixin.TaskField-cfg-instantUpdate\" class=\"docClass\">Gnt.field.mixin.TaskField.instantUpdate</a> config option.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-l10n' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.column.Duration'>Gnt.column.Duration</span><br/><a href='source/Duration2.html#Gnt-column-Duration-cfg-l10n' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Duration-cfg-l10n' class='name expandable'>l10n</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>A object, purposed for the class localization. ...</div><div class='long'><p>A object, purposed for the class localization. Contains the following keys/values:</p>\n\n<pre><code>    - text : 'Duration'\n</code></pre>\n<p>Overrides: <a href=\"#!/api/Sch.mixin.Localizable-cfg-l10n\" rel=\"Sch.mixin.Localizable-cfg-l10n\" class=\"docClass\">Sch.mixin.Localizable.l10n</a></p></div></div></div><div id='cfg-text' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.column.Duration'>Gnt.column.Duration</span><br/><a href='source/Duration2.html#Gnt-column-Duration-cfg-text' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Duration-cfg-text' class='name expandable'>text</a> : String<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'>The text to show in the column header. ...</div><div class='long'><p>The text to show in the column header.</p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This cfg has been <strong>deprected</strong> </p>\n        <p>Please use <a href=\"#!/api/Gnt.column.Duration-cfg-l10n\" rel=\"Gnt.column.Duration-cfg-l10n\" class=\"docClass\">l10n</a> instead.</p>\n\n        </div>\n</div></div></div><div id='cfg-useAbbreviation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.column.Duration'>Gnt.column.Duration</span><br/><a href='source/Duration2.html#Gnt-column-Duration-cfg-useAbbreviation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Duration-cfg-useAbbreviation' class='name expandable'>useAbbreviation</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>When set to true, the column will render the abbreviated duration unit name, not full. ...</div><div class='long'><p>When set to <code>true</code>, the column will render the abbreviated duration unit name, not full. Abbreviation will also be used\nwhen editing the value. Useful if the column width is limited.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.column.Duration'>Gnt.column.Duration</span><br/><a href='source/Duration2.html#Gnt-column-Duration-cfg-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Duration-cfg-width' class='name expandable'>width</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The width of the column. ...</div><div class='long'><p>The width of the column.</p>\n<p>Defaults to: <code>80</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-activeLocaleId' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-property-activeLocaleId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-property-activeLocaleId' class='name expandable'>activeLocaleId</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-field' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.column.Duration'>Gnt.column.Duration</span><br/><a href='source/Duration2.html#Gnt-column-Duration-property-field' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Duration-property-field' class='name expandable'>field</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-fieldProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.column.Duration'>Gnt.column.Duration</span><br/><a href='source/Duration2.html#Gnt-column-Duration-property-fieldProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Duration-property-fieldProperty' class='name expandable'>fieldProperty</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'durationField'</code></p></div></div></div><div id='property-legacyMode' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-property-legacyMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-property-legacyMode' class='name expandable'>legacyMode</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.column.Duration'>Gnt.column.Duration</span><br/><a href='source/Duration2.html#Gnt-column-Duration-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Gnt.column.Duration-method-constructor' class='name expandable'>Gnt.column.Duration</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Gnt.column.Duration\" rel=\"Gnt.column.Duration\" class=\"docClass\">Gnt.column.Duration</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Gnt.column.Duration\" rel=\"Gnt.column.Duration\" class=\"docClass\">Gnt.column.Duration</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-L' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-method-L' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-method-L' class='name expandable'>L</a>( <span class='pre'>id, [legacyHolderProp], [skipLocalizedCheck]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>This is shorthand reference to localize. ...</div><div class='long'><p>This is shorthand reference to <a href=\"#!/api/Sch.mixin.Localizable-method-localize\" rel=\"Sch.mixin.Localizable-method-localize\" class=\"docClass\">localize</a>. Retrieves translation of a phrase.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>Identifier of phrase.</p>\n</div></li><li><span class='pre'>legacyHolderProp</span> : String (optional)<div class='sub-desc'><p>Legacy class property name containing locales.</p>\n<p>Defaults to: <code>this.legacyHolderProp</code></p></div></li><li><span class='pre'>skipLocalizedCheck</span> : Boolean (optional)<div class='sub-desc'><p>Do not localize class if it's not localized yet.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Translation of specified phrase.</p>\n</div></li></ul></div></div></div><div id='method-afterRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.column.Duration'>Gnt.column.Duration</span><br/><a href='source/Duration2.html#Gnt-column-Duration-method-afterRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Duration-method-afterRender' class='name expandable'>afterRender</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-applyLocale' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-method-applyLocale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-method-applyLocale' class='name expandable'>applyLocale</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-isLocaleApplied' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-method-isLocaleApplied' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-method-isLocaleApplied' class='name expandable'>isLocaleApplied</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-localize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-method-localize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-method-localize' class='name expandable'>localize</a>( <span class='pre'>id, [legacyHolderProp], [skipLocalizedCheck]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves translation of a phrase. ...</div><div class='long'><p>Retrieves translation of a phrase. There is a shorthand <a href=\"#!/api/Sch.mixin.Localizable-method-L\" rel=\"Sch.mixin.Localizable-method-L\" class=\"docClass\">L</a> for this method.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>Identifier of phrase.</p>\n</div></li><li><span class='pre'>legacyHolderProp</span> : String (optional)<div class='sub-desc'><p>Legacy class property name containing locales.</p>\n<p>Defaults to: <code>this.legacyHolderProp</code></p></div></li><li><span class='pre'>skipLocalizedCheck</span> : Boolean (optional)<div class='sub-desc'><p>Do not localize class if it's not localized yet.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Translation of specified phrase.</p>\n</div></li></ul></div></div></div><div id='method-renderer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.column.Duration'>Gnt.column.Duration</span><br/><a href='source/Duration2.html#Gnt-column-Duration-method-renderer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.column.Duration-method-renderer' class='name expandable'>renderer</a>( <span class='pre'>value, meta, task</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>meta</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>task</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});