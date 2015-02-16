Ext.data.JsonP.Sch_column_Summary({"tagname":"class","name":"Sch.column.Summary","autodetected":{"aliases":true,"alternateClassNames":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Summary.js","href":"Summary.html#Sch-column-Summary"}],"extends":"Ext.grid.column.Column","aliases":{"widget":["summarycolumn"],"plugin":["scheduler_summarycolumn"]},"alternateClassNames":["Sch.plugin.SummaryColumn"],"mixins":["Ext.AbstractPlugin"],"requires":[],"uses":[],"members":[{"name":"nbrDecimals","tagname":"cfg","owner":"Sch.column.Summary","id":"cfg-nbrDecimals","meta":{}},{"name":"showPercent","tagname":"cfg","owner":"Sch.column.Summary","id":"cfg-showPercent","meta":{}},{"name":"dataIndex","tagname":"property","owner":"Sch.column.Summary","id":"property-dataIndex","meta":{"private":true}},{"name":"eventStore","tagname":"property","owner":"Sch.column.Summary","id":"property-eventStore","meta":{"private":true}},{"name":"fixed","tagname":"property","owner":"Sch.column.Summary","id":"property-fixed","meta":{"private":true}},{"name":"lockableScope","tagname":"property","owner":"Sch.column.Summary","id":"property-lockableScope","meta":{"private":true}},{"name":"menuDisabled","tagname":"property","owner":"Sch.column.Summary","id":"property-menuDisabled","meta":{"private":true}},{"name":"sortable","tagname":"property","owner":"Sch.column.Summary","id":"property-sortable","meta":{"private":true}},{"name":"timeAxis","tagname":"property","owner":"Sch.column.Summary","id":"property-timeAxis","meta":{"private":true}},{"name":"width","tagname":"property","owner":"Sch.column.Summary","id":"property-width","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Sch.column.Summary","id":"method-constructor","meta":{}},{"name":"beforeRender","tagname":"method","owner":"Sch.column.Summary","id":"method-beforeRender","meta":{"private":true}},{"name":"calculate","tagname":"method","owner":"Sch.column.Summary","id":"method-calculate","meta":{"private":true}},{"name":"init","tagname":"method","owner":"Sch.column.Summary","id":"method-init","meta":{"private":true}},{"name":"renderer","tagname":"method","owner":"Sch.column.Summary","id":"method-renderer","meta":{"private":true}}],"code_type":"ext_define","id":"class-Sch.column.Summary","short_doc":"A Column showing the currently allocated time for the resources in the grid. ...","component":false,"superclasses":["Ext.grid.column.Column"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Sch.plugin.SummaryColumn</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.grid.column.Column<div class='subclass '><strong>Sch.column.Summary</strong></div></div><h4>Mixins</h4><div class='dependency'>Ext.AbstractPlugin</div><h4>Files</h4><div class='dependency'><a href='source/Summary.html#Sch-column-Summary' target='_blank'>Summary.js</a></div></pre><div class='doc-contents'><p>A Column showing the currently allocated time for the resources in the grid. It will simply summarize the durations <strong>of the events that are in the current view</strong>.\nThe information can be displayed as either a time unit or a percentage of the available time.</p>\n\n<p>To add this column to the scheduler:</p>\n\n<pre><code>    var summaryCol = Ext.create(\"<a href=\"#!/api/Sch.column.Summary\" rel=\"Sch.column.Summary\" class=\"docClass\">Sch.column.Summary</a>\", {\n        header      : 'Time allocated',\n        width       : 80,\n        showPercent : false \n    });\n\n    var scheduler = Ext.create('<a href=\"#!/api/Sch.panel.SchedulerGrid\" rel=\"Sch.panel.SchedulerGrid\" class=\"docClass\">Sch.panel.SchedulerGrid</a>', {\n        resourceStore   : resourceStore,\n        eventStore      : eventStore,\n\n        columns         : [\n            ...\n            summaryCol,\n            ...\n        ]\n    });\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-nbrDecimals' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.column.Summary'>Sch.column.Summary</span><br/><a href='source/Summary.html#Sch-column-Summary-cfg-nbrDecimals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.column.Summary-cfg-nbrDecimals' class='name expandable'>nbrDecimals</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The number of decimals to show, only applicable when showPercent is set to false ...</div><div class='long'><p>The number of decimals to show, only applicable when <code>showPercent</code> is set to false</p>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='cfg-showPercent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.column.Summary'>Sch.column.Summary</span><br/><a href='source/Summary.html#Sch-column-Summary-cfg-showPercent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.column.Summary-cfg-showPercent' class='name expandable'>showPercent</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>True to show percentage values, false to show summarized time. ...</div><div class='long'><p>True to show percentage values, false to show summarized time. Default value is <code>false</code>.</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-dataIndex' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.column.Summary'>Sch.column.Summary</span><br/><a href='source/Summary.html#Sch-column-Summary-property-dataIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.column.Summary-property-dataIndex' class='name expandable'>dataIndex</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'_sch_not_used'</code></p></div></div></div><div id='property-eventStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.column.Summary'>Sch.column.Summary</span><br/><a href='source/Summary.html#Sch-column-Summary-property-eventStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.column.Summary-property-eventStore' class='name expandable'>eventStore</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-fixed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.column.Summary'>Sch.column.Summary</span><br/><a href='source/Summary.html#Sch-column-Summary-property-fixed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.column.Summary-property-fixed' class='name expandable'>fixed</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-lockableScope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.column.Summary'>Sch.column.Summary</span><br/><a href='source/Summary.html#Sch-column-Summary-property-lockableScope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.column.Summary-property-lockableScope' class='name expandable'>lockableScope</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>-------- EOF TODO ...</div><div class='long'><p>-------- EOF TODO</p>\n<p>Defaults to: <code>'top'</code></p></div></div></div><div id='property-menuDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.column.Summary'>Sch.column.Summary</span><br/><a href='source/Summary.html#Sch-column-Summary-property-menuDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.column.Summary-property-menuDisabled' class='name expandable'>menuDisabled</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-sortable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.column.Summary'>Sch.column.Summary</span><br/><a href='source/Summary.html#Sch-column-Summary-property-sortable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.column.Summary-property-sortable' class='name expandable'>sortable</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-timeAxis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.column.Summary'>Sch.column.Summary</span><br/><a href='source/Summary.html#Sch-column-Summary-property-timeAxis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.column.Summary-property-timeAxis' class='name expandable'>timeAxis</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.column.Summary'>Sch.column.Summary</span><br/><a href='source/Summary.html#Sch-column-Summary-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.column.Summary-property-width' class='name expandable'>width</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>80</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.column.Summary'>Sch.column.Summary</span><br/><a href='source/Summary.html#Sch-column-Summary-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Sch.column.Summary-method-constructor' class='name expandable'>Sch.column.Summary</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Sch.column.Summary\" rel=\"Sch.column.Summary\" class=\"docClass\">Sch.column.Summary</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Sch.column.Summary\" rel=\"Sch.column.Summary\" class=\"docClass\">Sch.column.Summary</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-beforeRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.column.Summary'>Sch.column.Summary</span><br/><a href='source/Summary.html#Sch-column-Summary-method-beforeRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.column.Summary-method-beforeRender' class='name expandable'>beforeRender</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-calculate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.column.Summary'>Sch.column.Summary</span><br/><a href='source/Summary.html#Sch-column-Summary-method-calculate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.column.Summary-method-calculate' class='name expandable'>calculate</a>( <span class='pre'>eventRecords, viewStart, viewEnd</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventRecords</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>viewStart</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>viewEnd</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.column.Summary'>Sch.column.Summary</span><br/><a href='source/Summary.html#Sch-column-Summary-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.column.Summary-method-init' class='name expandable'>init</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-renderer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.column.Summary'>Sch.column.Summary</span><br/><a href='source/Summary.html#Sch-column-Summary-method-renderer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.column.Summary-method-renderer' class='name expandable'>renderer</a>( <span class='pre'>v, p, record</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>p</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});