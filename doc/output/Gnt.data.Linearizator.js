Ext.data.JsonP.Gnt_data_Linearizator({"tagname":"class","name":"Gnt.data.Linearizator","alternateClassNames":[],"members":[{"name":"linearWalkBySpecification","tagname":"method","owner":"Gnt.data.Linearizator","id":"method-linearWalkBySpecification","meta":{}}],"aliases":{},"files":[{"filename":"","href":""}],"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-linearWalkBySpecification' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Gnt.data.Linearizator'>Gnt.data.Linearizator</span><br/><a href='source/Linearizator.html#Gnt-data-Linearizator-method-linearWalkBySpecification' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Gnt.data.Linearizator-method-linearWalkBySpecification' class='name expandable'>linearWalkBySpecification</a>( <span class='pre'>sourceTasksList, processorFn, walkingSpec</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Linearly walks source task list and it's members dependent tasks in dependency resolution order. ...</div><div class='long'><p>Linearly walks source task list and it's members dependent tasks in dependency resolution order.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sourceTasksList</span> : Gnt.model.Task|[Gnt.model.Task]<div class='sub-desc'><p>Walking source points</p>\n</div></li><li><span class='pre'>processorFn</span> : Function<div class='sub-desc'><p>Function to call at each walking step</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>task</span> : <a href=\"#!/api/Gnt.model.Task\" rel=\"Gnt.model.Task\" class=\"docClass\">Gnt.model.Task</a><div class='sub-desc'><p>A task which dependencies a considered to be resolved at the step</p>\n</div></li><li><span class='pre'>color</span> : String<div class='sub-desc'><p>Task dependencies resolution state, might be either <strong>'green'</strong> or <strong>'yellow'</strong>. Leaf tasks might be visited\n with <strong>'green'</strong> color only, but parent tasks will be visited twice, first with <strong>'yellow'</strong> color and then,\n after visiting all node's <strong>'green'</strong> children, the node will be visited again but with <strong>'green'</strong> color.\n Parent node <strong>'yellow'</strong> dependencies resolution state means that all it's horizontal dependencies, i.e.\n dependencies from node's predecessors, has been visited (and probably processed somehow during the visit),\n <strong>'green'</strong> (for any node) means that all node's dependencies, both horizontal and vertical has been visitied\n (and processed).</p>\n</div></li></ul></div></li><li><span class='pre'>walkingSpec</span> : Object<div class='sub-desc'><p>Walking specification, contains information describing how to walk and process task dependencies</p>\n<ul><li><span class='pre'>self</span> : Boolean<div class='sub-desc'><p>Whether to include tasks from source tasks list into a walking sequence</p>\n</div></li><li><span class='pre'>ancestors</span> : Boolean<div class='sub-desc'><p>Whether to include tasks' ancestors into a walking sequence</p>\n</div></li><li><span class='pre'>descendants</span> : Boolean<div class='sub-desc'><p>Whether to include tasks' descendants into a walking sequence</p>\n</div></li><li><span class='pre'>successors</span> : Boolean<div class='sub-desc'><p>Whether to include tasks's successors into a walking sequece</p>\n</div></li><li><span class='pre'>cycles</span> : String<div class='sub-desc'><p>Cycles resolution strategy. See <a href=\"#!/api/Gnt.data.linearizator.CycleResolvers\" rel=\"Gnt.data.linearizator.CycleResolvers\" class=\"docClass\">Gnt.data.linearizator.CycleResolvers</a> public method for possible values.</p>\n</div></li></ul></div></li></ul></div></div></div></div></div></div></div>","meta":{}});