Ext.data.JsonP.Sch_mixin_Lockable({"tagname":"class","name":"Sch.mixin.Lockable","autodetected":{"aliases":true,"alternateClassNames":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Lockable.js","href":"Lockable.html#Sch-mixin-Lockable"}],"extends":"Ext.grid.locking.Lockable","private":true,"aliases":{},"alternateClassNames":[],"mixins":[],"requires":[],"uses":[],"members":[{"name":"horizontalScrollForced","tagname":"property","owner":"Sch.mixin.Lockable","id":"property-horizontalScrollForced","meta":{"private":true}},{"name":"syncRowHeight","tagname":"property","owner":"Sch.mixin.Lockable","id":"property-syncRowHeight","meta":{"private":true}},{"name":"useSpacer","tagname":"property","owner":"Sch.mixin.Lockable","id":"property-useSpacer","meta":{"private":true}},{"name":"afterLockedViewLayout","tagname":"method","owner":"Sch.mixin.Lockable","id":"method-afterLockedViewLayout","meta":{"private":true}},{"name":"delayReordererPlugin","tagname":"method","owner":"Sch.mixin.Lockable","id":"method-delayReordererPlugin","meta":{"private":true}},{"name":"fixHeaderResizer","tagname":"method","owner":"Sch.mixin.Lockable","id":"method-fixHeaderResizer","meta":{"private":true}},{"name":"injectLockable","tagname":"method","owner":"Sch.mixin.Lockable","id":"method-injectLockable","meta":{"private":true}},{"name":"onLockedViewScroll","tagname":"method","owner":"Sch.mixin.Lockable","id":"method-onLockedViewScroll","meta":{"private":true}},{"name":"onNormalViewScroll","tagname":"method","owner":"Sch.mixin.Lockable","id":"method-onNormalViewScroll","meta":{"private":true}},{"name":"patchBufferedRenderingPlugin","tagname":"method","owner":"Sch.mixin.Lockable","id":"method-patchBufferedRenderingPlugin","meta":{"private":true}},{"name":"patchSubGrid","tagname":"method","owner":"Sch.mixin.Lockable","id":"method-patchSubGrid","meta":{"private":true}},{"name":"patchSyncHorizontalScroll","tagname":"method","owner":"Sch.mixin.Lockable","id":"method-patchSyncHorizontalScroll","meta":{"private":true}},{"name":"patchViews","tagname":"method","owner":"Sch.mixin.Lockable","id":"method-patchViews","meta":{"private":true}},{"name":"setupLockableTree","tagname":"method","owner":"Sch.mixin.Lockable","id":"method-setupLockableTree","meta":{"private":true}},{"name":"showMenuBy","tagname":"method","owner":"Sch.mixin.Lockable","id":"method-showMenuBy","meta":{"private":true}},{"name":"updateSpacer","tagname":"method","owner":"Sch.mixin.Lockable","id":"method-updateSpacer","meta":{"private":true}}],"code_type":"ext_define","id":"class-Sch.mixin.Lockable","component":false,"superclasses":["Ext.grid.locking.Lockable"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.grid.locking.Lockable<div class='subclass '><strong>Sch.mixin.Lockable</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Lockable.html#Sch-mixin-Lockable' target='_blank'>Lockable.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>.\nThis is a private class for internal use.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-horizontalScrollForced' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.Lockable'>Sch.mixin.Lockable</span><br/><a href='source/Lockable.html#Sch-mixin-Lockable-property-horizontalScrollForced' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Lockable-property-horizontalScrollForced' class='name expandable'>horizontalScrollForced</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-syncRowHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.Lockable'>Sch.mixin.Lockable</span><br/><a href='source/Lockable.html#Sch-mixin-Lockable-property-syncRowHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Lockable-property-syncRowHeight' class='name expandable'>syncRowHeight</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-useSpacer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.Lockable'>Sch.mixin.Lockable</span><br/><a href='source/Lockable.html#Sch-mixin-Lockable-property-useSpacer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Lockable-property-useSpacer' class='name expandable'>useSpacer</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-afterLockedViewLayout' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.Lockable'>Sch.mixin.Lockable</span><br/><a href='source/Lockable.html#Sch-mixin-Lockable-method-afterLockedViewLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Lockable-method-afterLockedViewLayout' class='name expandable'>afterLockedViewLayout</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-delayReordererPlugin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.Lockable'>Sch.mixin.Lockable</span><br/><a href='source/Lockable.html#Sch-mixin-Lockable-method-delayReordererPlugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Lockable-method-delayReordererPlugin' class='name expandable'>delayReordererPlugin</a>( <span class='pre'>grid</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>the columns re-orderer plugin is being initialized synchronously, after rendering the header container\nbut before lay...</div><div class='long'><p>the columns re-orderer plugin is being initialized synchronously, after rendering the header container\nbut before layouts\nits initializing involves creation of drag/drop zones which performs \"verifyEl\" call on the headerCt element\nwhich, in turn, tries to access \"el.offsetParent\" - that slows down rendering for no reason.\nthe initilization of the column reoderer can be delayed.\nfor 700 tasks / 300 dependencies project this optimization brings rendering time down from 3s to 2.5s in Chrome\n(for other browsers speed up is less significant)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>grid</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-fixHeaderResizer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.Lockable'>Sch.mixin.Lockable</span><br/><a href='source/Lockable.html#Sch-mixin-Lockable-method-fixHeaderResizer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Lockable-method-fixHeaderResizer' class='name expandable'>fixHeaderResizer</a>( <span class='pre'>grid</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>reproducible in Firefox and IE\na fix for weird problem in header resizer, which can be reproduced with the following ...</div><div class='long'><p>reproducible in Firefox and IE\na fix for weird problem in header resizer, which can be reproduced with the following steps in the vertical example, scheduler\nt.chain([{\"click\":[547,154]},{\"rightclick\":[975,482]},{\"doubleclick\":[215,126]},{\"rightclick\":[405,141]},{\"action\":\"drag\",\"target\":[291,575],\"to\":[987,289]},{\"action\":\"drag\",\"target\":[781,205],\"to\":[512,599]},{\"rightclick\":[731,387]},{\"rightclick\":[299,236]},{\"rightclick\":[1014,164]},{\"click\":[59,180]}])\nit is reproducible with real mouse too, just a bit harder, as cursor need to barely touch the Mike column\nproblem is that after mode change \"dragHd\" property of the resizer remains the same and keeps reference to the column\nfrom previous mode (\"mousedown\" is triggered before \"mousemove\"? or something like that)\nthat column is already destroyed and not part of the component tree, so resizer throws exception</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>grid</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-injectLockable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.Lockable'>Sch.mixin.Lockable</span><br/><a href='source/Lockable.html#Sch-mixin-Lockable-method-injectLockable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Lockable-method-injectLockable' class='name expandable'>injectLockable</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>overridden\n@OVERRIDE ...</div><div class='long'><p>overridden\n@OVERRIDE</p>\n</div></div></div><div id='method-onLockedViewScroll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.Lockable'>Sch.mixin.Lockable</span><br/><a href='source/Lockable.html#Sch-mixin-Lockable-method-onLockedViewScroll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Lockable-method-onLockedViewScroll' class='name expandable'>onLockedViewScroll</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>TODO remove after dropping support for 4.2.0? ...</div><div class='long'><p>TODO remove after dropping support for 4.2.0?</p>\n</div></div></div><div id='method-onNormalViewScroll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.Lockable'>Sch.mixin.Lockable</span><br/><a href='source/Lockable.html#Sch-mixin-Lockable-method-onNormalViewScroll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Lockable-method-onNormalViewScroll' class='name expandable'>onNormalViewScroll</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>TODO remove after dropping support for 4.2.0? ...</div><div class='long'><p>TODO remove after dropping support for 4.2.0?</p>\n</div></div></div><div id='method-patchBufferedRenderingPlugin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.Lockable'>Sch.mixin.Lockable</span><br/><a href='source/Lockable.html#Sch-mixin-Lockable-method-patchBufferedRenderingPlugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Lockable-method-patchBufferedRenderingPlugin' class='name expandable'>patchBufferedRenderingPlugin</a>( <span class='pre'>plugin</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>plugin</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-patchSubGrid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.Lockable'>Sch.mixin.Lockable</span><br/><a href='source/Lockable.html#Sch-mixin-Lockable-method-patchSubGrid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Lockable-method-patchSubGrid' class='name expandable'>patchSubGrid</a>( <span class='pre'>grid, isLocked</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>this method should been called \"patchSubGridWhenBufferedRendererIsEnabled\", it assumes bufferedRenderer presents ...</div><div class='long'><p>this method should been called \"patchSubGridWhenBufferedRendererIsEnabled\", it assumes <code>bufferedRenderer</code> presents</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>grid</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>isLocked</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-patchSyncHorizontalScroll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.Lockable'>Sch.mixin.Lockable</span><br/><a href='source/Lockable.html#Sch-mixin-Lockable-method-patchSyncHorizontalScroll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Lockable-method-patchSyncHorizontalScroll' class='name expandable'>patchSyncHorizontalScroll</a>( <span class='pre'>grid</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>grid</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-patchViews' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.Lockable'>Sch.mixin.Lockable</span><br/><a href='source/Lockable.html#Sch-mixin-Lockable-method-patchViews' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Lockable-method-patchViews' class='name expandable'>patchViews</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Various ugly overrides to avoid locked grid causing crazy scrolling in IE. ...</div><div class='long'><p>Various ugly overrides to avoid locked grid causing crazy scrolling in IE.\nREMOVE FOR EXT 5, UNTIL THEN - ENJOY</p>\n</div></div></div><div id='method-setupLockableTree' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.Lockable'>Sch.mixin.Lockable</span><br/><a href='source/Lockable.html#Sch-mixin-Lockable-method-setupLockableTree' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Lockable-method-setupLockableTree' class='name expandable'>setupLockableTree</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-showMenuBy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.Lockable'>Sch.mixin.Lockable</span><br/><a href='source/Lockable.html#Sch-mixin-Lockable-method-showMenuBy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Lockable-method-showMenuBy' class='name expandable'>showMenuBy</a>( <span class='pre'>t, header</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>HACK, no sane way of getting rid of these it seems (as of 4.2.1). ...</div><div class='long'><p>HACK, no sane way of getting rid of these it seems (as of 4.2.1).\nhttp://www.sencha.com/forum/showthread.php?269612-Config-to-get-rid-of-Lock-Unlock-column-options&amp;p=987653#post987653</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>t</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>header</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-updateSpacer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Sch.mixin.Lockable'>Sch.mixin.Lockable</span><br/><a href='source/Lockable.html#Sch-mixin-Lockable-method-updateSpacer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Sch.mixin.Lockable-method-updateSpacer' class='name expandable'>updateSpacer</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{"private":true}});