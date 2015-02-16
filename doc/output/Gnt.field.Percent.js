Ext.data.JsonP.Gnt_field_Percent({"tagname":"class","name":"Gnt.field.Percent","autodetected":{"aliases":true,"alternateClassNames":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Percent.js","href":"Percent.html#Gnt-field-Percent"}],"extends":"Ext.form.field.Number","aliases":{"widget":["percentfield"]},"alternateClassNames":["Gnt.widget.PercentField"],"mixins":["Gnt.mixin.Localizable"],"requires":[],"uses":[],"members":[{"name":"l10n","tagname":"cfg","owner":"Sch.mixin.Localizable","id":"cfg-l10n","meta":{}},{"name":"activeLocaleId","tagname":"property","owner":"Sch.mixin.Localizable","id":"property-activeLocaleId","meta":{"private":true}},{"name":"allowExponential","tagname":"property","owner":"Gnt.field.Percent","id":"property-allowExponential","meta":{"private":true}},{"name":"baseChars","tagname":"property","owner":"Gnt.field.Percent","id":"property-baseChars","meta":{"private":true}},{"name":"disableKeyFilter","tagname":"property","owner":"Gnt.field.Percent","id":"property-disableKeyFilter","meta":{"private":true}},{"name":"invalidText","tagname":"property","owner":"Gnt.field.Percent","id":"property-invalidText","meta":{"private":true}},{"name":"legacyMode","tagname":"property","owner":"Sch.mixin.Localizable","id":"property-legacyMode","meta":{"private":true}},{"name":"maxValue","tagname":"property","owner":"Gnt.field.Percent","id":"property-maxValue","meta":{"private":true}},{"name":"minValue","tagname":"property","owner":"Gnt.field.Percent","id":"property-minValue","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Gnt.field.Percent","id":"method-constructor","meta":{}},{"name":"L","tagname":"method","owner":"Sch.mixin.Localizable","id":"method-L","meta":{}},{"name":"applyLocale","tagname":"method","owner":"Sch.mixin.Localizable","id":"method-applyLocale","meta":{"private":true}},{"name":"getErrors","tagname":"method","owner":"Gnt.field.Percent","id":"method-getErrors","meta":{"private":true}},{"name":"isLocaleApplied","tagname":"method","owner":"Sch.mixin.Localizable","id":"method-isLocaleApplied","meta":{"private":true}},{"name":"localize","tagname":"method","owner":"Sch.mixin.Localizable","id":"method-localize","meta":{}},{"name":"valueToRaw","tagname":"method","owner":"Gnt.field.Percent","id":"method-valueToRaw","meta":{"private":true}}],"code_type":"ext_define","id":"class-Gnt.field.Percent","short_doc":"A specialized field to enter percent values. ...","component":false,"superclasses":["Ext.form.field.Number"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Gnt.widget.PercentField</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.form.field.Number<div class='subclass '><strong>Gnt.field.Percent</strong></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/Gnt.mixin.Localizable' rel='Gnt.mixin.Localizable' class='docClass'>Gnt.mixin.Localizable</a></div><h4>Files</h4><div class='dependency'><a href='source/Percent.html#Gnt-field-Percent' target='_blank'>Percent.js</a></div></pre><div class='doc-contents'><p>A specialized field to enter percent values.\nThis class inherits from the standard Ext JS \"number\" field, so any usual <code>Ext.form.field.Number</code> configs can be used.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-l10n' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-cfg-l10n' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-cfg-l10n' class='name expandable'>l10n</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Container of locales for the class.</p>\n</div><div class='long'><p>Container of locales for the class.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-activeLocaleId' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-property-activeLocaleId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-property-activeLocaleId' class='name expandable'>activeLocaleId</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-allowExponential' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.field.Percent'>Gnt.field.Percent</span><br/><a href='source/Percent.html#Gnt-field-Percent-property-allowExponential' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.field.Percent-property-allowExponential' class='name expandable'>allowExponential</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-baseChars' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.field.Percent'>Gnt.field.Percent</span><br/><a href='source/Percent.html#Gnt-field-Percent-property-baseChars' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.field.Percent-property-baseChars' class='name expandable'>baseChars</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'0123456789%'</code></p></div></div></div><div id='property-disableKeyFilter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.field.Percent'>Gnt.field.Percent</span><br/><a href='source/Percent.html#Gnt-field-Percent-property-disableKeyFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.field.Percent-property-disableKeyFilter' class='name expandable'>disableKeyFilter</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-invalidText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.field.Percent'>Gnt.field.Percent</span><br/><a href='source/Percent.html#Gnt-field-Percent-property-invalidText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.field.Percent-property-invalidText' class='name expandable'>invalidText</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'Invalid percent value'</code></p></div></div></div><div id='property-legacyMode' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-property-legacyMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-property-legacyMode' class='name expandable'>legacyMode</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-maxValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.field.Percent'>Gnt.field.Percent</span><br/><a href='source/Percent.html#Gnt-field-Percent-property-maxValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.field.Percent-property-maxValue' class='name expandable'>maxValue</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>100</code></p></div></div></div><div id='property-minValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.field.Percent'>Gnt.field.Percent</span><br/><a href='source/Percent.html#Gnt-field-Percent-property-minValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.field.Percent-property-minValue' class='name expandable'>minValue</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.field.Percent'>Gnt.field.Percent</span><br/><a href='source/Percent.html#Gnt-field-Percent-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Gnt.field.Percent-method-constructor' class='name expandable'>Gnt.field.Percent</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Gnt.field.Percent\" rel=\"Gnt.field.Percent\" class=\"docClass\">Gnt.field.Percent</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Gnt.field.Percent\" rel=\"Gnt.field.Percent\" class=\"docClass\">Gnt.field.Percent</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-L' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-method-L' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-method-L' class='name expandable'>L</a>( <span class='pre'>id, [legacyHolderProp], [skipLocalizedCheck]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>This is shorthand reference to localize. ...</div><div class='long'><p>This is shorthand reference to <a href=\"#!/api/Sch.mixin.Localizable-method-localize\" rel=\"Sch.mixin.Localizable-method-localize\" class=\"docClass\">localize</a>. Retrieves translation of a phrase.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>Identifier of phrase.</p>\n</div></li><li><span class='pre'>legacyHolderProp</span> : String (optional)<div class='sub-desc'><p>Legacy class property name containing locales.</p>\n<p>Defaults to: <code>this.legacyHolderProp</code></p></div></li><li><span class='pre'>skipLocalizedCheck</span> : Boolean (optional)<div class='sub-desc'><p>Do not localize class if it's not localized yet.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Translation of specified phrase.</p>\n</div></li></ul></div></div></div><div id='method-applyLocale' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-method-applyLocale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-method-applyLocale' class='name expandable'>applyLocale</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getErrors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.field.Percent'>Gnt.field.Percent</span><br/><a href='source/Percent.html#Gnt-field-Percent-method-getErrors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.field.Percent-method-getErrors' class='name expandable'>getErrors</a>( <span class='pre'>value</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-isLocaleApplied' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-method-isLocaleApplied' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-method-isLocaleApplied' class='name expandable'>isLocaleApplied</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-localize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Sch.mixin.Localizable' rel='Sch.mixin.Localizable' class='defined-in docClass'>Sch.mixin.Localizable</a><br/><a href='source/Localizable2.html#Sch-mixin-Localizable-method-localize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Localizable-method-localize' class='name expandable'>localize</a>( <span class='pre'>id, [legacyHolderProp], [skipLocalizedCheck]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves translation of a phrase. ...</div><div class='long'><p>Retrieves translation of a phrase. There is a shorthand <a href=\"#!/api/Sch.mixin.Localizable-method-L\" rel=\"Sch.mixin.Localizable-method-L\" class=\"docClass\">L</a> for this method.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>Identifier of phrase.</p>\n</div></li><li><span class='pre'>legacyHolderProp</span> : String (optional)<div class='sub-desc'><p>Legacy class property name containing locales.</p>\n<p>Defaults to: <code>this.legacyHolderProp</code></p></div></li><li><span class='pre'>skipLocalizedCheck</span> : Boolean (optional)<div class='sub-desc'><p>Do not localize class if it's not localized yet.</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Translation of specified phrase.</p>\n</div></li></ul></div></div></div><div id='method-valueToRaw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.field.Percent'>Gnt.field.Percent</span><br/><a href='source/Percent.html#Gnt-field-Percent-method-valueToRaw' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.field.Percent-method-valueToRaw' class='name expandable'>valueToRaw</a>( <span class='pre'>value</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});