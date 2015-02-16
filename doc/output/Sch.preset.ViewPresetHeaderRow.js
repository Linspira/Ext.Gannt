Ext.data.JsonP.Sch_preset_ViewPresetHeaderRow({"tagname":"class","name":"Sch.preset.ViewPresetHeaderRow","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"ViewPresetHeaderRow.js","href":"ViewPresetHeaderRow.html#Sch-preset-ViewPresetHeaderRow"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"cellGenerator","tagname":"cfg","owner":"Sch.preset.ViewPresetHeaderRow","id":"cfg-cellGenerator","meta":{}},{"name":"dateFormat","tagname":"cfg","owner":"Sch.preset.ViewPresetHeaderRow","id":"cfg-dateFormat","meta":{}},{"name":"increment","tagname":"cfg","owner":"Sch.preset.ViewPresetHeaderRow","id":"cfg-increment","meta":{}},{"name":"renderer","tagname":"cfg","owner":"Sch.preset.ViewPresetHeaderRow","id":"cfg-renderer","meta":{}},{"name":"scope","tagname":"cfg","owner":"Sch.preset.ViewPresetHeaderRow","id":"cfg-scope","meta":{}},{"name":"unit","tagname":"cfg","owner":"Sch.preset.ViewPresetHeaderRow","id":"cfg-unit","meta":{}}],"code_type":"ext_define","id":"class-Sch.preset.ViewPresetHeaderRow","short_doc":"A part of the Sch.preset.ViewPreset declaration. ...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Sch.preset.ViewPresetHeaderRow</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ViewPresetHeaderRow.html#Sch-preset-ViewPresetHeaderRow' target='_blank'>ViewPresetHeaderRow.js</a></div></pre><div class='doc-contents'><p>A part of the <a href=\"#!/api/Sch.preset.ViewPreset\" rel=\"Sch.preset.ViewPreset\" class=\"docClass\">Sch.preset.ViewPreset</a> declaration. Not used directly, but the properties below are rather provided\ninline as seen in sources of <a href=\"#!/api/Sch.preset.Manager\" rel=\"Sch.preset.Manager\" class=\"docClass\">Sch.preset.Manager</a>. This class is just provided for documentation purposes.</p>\n\n<p>A sample header configuration will looks like:</p>\n\n<pre><code>    headerConfig    : {\n         bottom     : {\n            unit        : \"WEEK\",\n            increment   : 1,\n            renderer    : function(start, end, headerConfig, index) {\n                return Ext.Date.format(start, 'd');\n            }\n        },\n        middle : {\n            unit        : \"MONTH\",\n            renderer : function(start, end, headerConfig, index) {\n                var month = start.getMonth();\n                // Simple alternating month in bold\n                if (start.getMonth()) % 2) {\n                    return '&lt;strong&gt;' + month + '&lt;/strong'&gt;';\n                }\n                return month\n            },\n            align       : 'left'\n        }\n    }\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-cellGenerator' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.preset.ViewPresetHeaderRow'>Sch.preset.ViewPresetHeaderRow</span><br/><a href='source/ViewPresetHeaderRow.html#Sch-preset-ViewPresetHeaderRow-cfg-cellGenerator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.preset.ViewPresetHeaderRow-cfg-cellGenerator' class='name expandable'>cellGenerator</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>A function that should return an array of objects containing 'start', 'end' and 'header' properties. ...</div><div class='long'><p>A function that should return an array of objects containing 'start', 'end' and 'header' properties.\nUse this if you want full control over how the header rows are generated. This is not applicable for the lowest row in your configuration.</p>\n</div></div></div><div id='cfg-dateFormat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.preset.ViewPresetHeaderRow'>Sch.preset.ViewPresetHeaderRow</span><br/><a href='source/ViewPresetHeaderRow.html#Sch-preset-ViewPresetHeaderRow-cfg-dateFormat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.preset.ViewPresetHeaderRow-cfg-dateFormat' class='name expandable'>dateFormat</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Defines how the cell date will be formatted</p>\n</div><div class='long'><p>Defines how the cell date will be formatted</p>\n</div></div></div><div id='cfg-increment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.preset.ViewPresetHeaderRow'>Sch.preset.ViewPresetHeaderRow</span><br/><a href='source/ViewPresetHeaderRow.html#Sch-preset-ViewPresetHeaderRow-cfg-increment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.preset.ViewPresetHeaderRow-cfg-increment' class='name expandable'>increment</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The number of units each header cell will represent (e.g. ...</div><div class='long'><p>The number of units each header cell will represent (e.g. 30 together with unit: \"MINUTE\" for 30 minute cells)</p>\n</div></div></div><div id='cfg-renderer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.preset.ViewPresetHeaderRow'>Sch.preset.ViewPresetHeaderRow</span><br/><a href='source/ViewPresetHeaderRow.html#Sch-preset-ViewPresetHeaderRow-cfg-renderer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.preset.ViewPresetHeaderRow-cfg-renderer' class='name expandable'>renderer</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>A custom renderer function used to render the cell contents. ...</div><div class='long'><p>A custom renderer function used to render the cell contents. It should return the text to put in the header cell.\nThe render function is called with the following parameters:</p>\n\n<ul>\n<li><code>startDate</code> : Date - The start date of the cell.</li>\n<li><code>endDate</code> : Date - The end date of the cell</li>\n<li><code>headerConfig</code> : Object - An object containing the header config object. You can set 'align' (for text-align) and headerCls (a CSS class added to the cell) properties on it.</li>\n<li><code>i</code> : Int - The index of the cell in the row.</li>\n</ul>\n\n\n<p>Example :</p>\n\n<pre><code>function (startDate, endDate, headerConfig, i) {\n    headerConfig.align = \"left\";\n    headerConfig.headerCls = \"myClass\"; // will be added as a CSS class of the header cell DOM element\n\n    return Ext.Date.format(startDate, 'Y-m-d');\n}\n</code></pre>\n</div></div></div><div id='cfg-scope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.preset.ViewPresetHeaderRow'>Sch.preset.ViewPresetHeaderRow</span><br/><a href='source/ViewPresetHeaderRow.html#Sch-preset-ViewPresetHeaderRow-cfg-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.preset.ViewPresetHeaderRow-cfg-scope' class='name expandable'>scope</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The scope to use for the renderer function</p>\n</div><div class='long'><p>The scope to use for the renderer function</p>\n</div></div></div><div id='cfg-unit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.preset.ViewPresetHeaderRow'>Sch.preset.ViewPresetHeaderRow</span><br/><a href='source/ViewPresetHeaderRow.html#Sch-preset-ViewPresetHeaderRow-cfg-unit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.preset.ViewPresetHeaderRow-cfg-unit' class='name expandable'>unit</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The unit of time represented by each cell in this header row. ...</div><div class='long'><p>The unit of time represented by each cell in this header row. See also increment property.\nValid values are \"MILLI\", \"SECOND\", \"MINUTE\", \"HOUR\", \"DAY\", \"WEEK\", \"MONTH\", \"QUARTER\", \"YEAR\".</p>\n</div></div></div></div></div></div></div>","meta":{}});