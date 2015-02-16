Ext.data.JsonP.crud_manager({"guide":"<h1 id='crud_manager-section-introducing-the-crud-manager'>Introducing the CRUD manager</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/crud_manager-section-introduction'>Introduction</a></li>\n<li><a href='#!/guide/crud_manager-section-architecture'>Architecture</a></li>\n<li><a href='#!/guide/crud_manager-section-server-communication'>Server communication</a></li>\n<li><a href='#!/guide/crud_manager-section-loading-data'>Loading data</a></li>\n<li><a href='#!/guide/crud_manager-section-saving-data'>Saving data</a></li>\n<li><a href='#!/guide/crud_manager-section-error-handling'>Error handling</a></li>\n</ol>\n</div>\n\n<h2 id='crud_manager-section-introduction'>Introduction</h2>\n\n<p>The main idea behind the <em>CRUD manager</em> (or \"CM\") development is to bring <em>simplicity</em> when dealing with loading/saving of multiple related datasets.\nWe wanted to create a central class which combining all the project stores into a single object. The core features of the Crud Manager provides:</p>\n\n<ul>\n<li>Load capability fo data belonging to any number of stores (in a single ajax request)</li>\n<li>Save capability pulling all changes in multiple stores (in a single ajax request)</li>\n<li>Clear and concise configuration setup (avoiding configuration on multiple individual ajax proxies)</li>\n<li>Low number of dependencies on Ext JS, its API will stay stable through future <em>ExtJS</em> upgrades</li>\n</ul>\n\n\n<p>All above targets were achieved by implementing the various <em>CRUD manager</em> classes.</p>\n\n<h2 id='crud_manager-section-architecture'>Architecture</h2>\n\n<p>Under the hood, the <em>CRUD manager</em> contains and manages a collection of stores.\nThe core of any <em>CRUD manager</em> implementation is the <a href=\"#!/api/Sch.crud.AbstractManager\" rel=\"Sch.crud.AbstractManager\" class=\"docClass\">Sch.crud.AbstractManager</a> class.\nTo turn that abstract class into a final implementation it should be mixed in with two more classes:</p>\n\n<ul>\n<li>encoding system mixin</li>\n<li>transport system mixin</li>\n</ul>\n\n\n<p>For example, the main <a href=\"#!/api/Sch.data.CrudManager\" rel=\"Sch.data.CrudManager\" class=\"docClass\">Sch.data.CrudManager</a> class uses <em>JSON</em> encoding (provided by <a href=\"#!/api/Sch.crud.encoder.Json\" rel=\"Sch.crud.encoder.Json\" class=\"docClass\">Sch.crud.encoder.Json</a> )\nand <em>AJAX</em> as transport (provided by <a href=\"#!/api/Sch.crud.transport.Ajax\" rel=\"Sch.crud.transport.Ajax\" class=\"docClass\">Sch.crud.transport.Ajax</a>).</p>\n\n<pre><code>var crudManager = Ext.create('<a href=\"#!/api/Sch.data.CrudManager\" rel=\"Sch.data.CrudManager\" class=\"docClass\">Sch.data.CrudManager</a>', {\n    autoLoad    : true,\n    stores      : [\n        store1, store2, store3\n    ],\n    transport   : {\n        load    : {\n            url     : 'php/read.php'\n        },\n        sync    : {\n            url     : 'php/save.php'\n        }\n    }\n});\n</code></pre>\n\n<p>The above <a href=\"#!/api/Sch.data.CrudManager\" rel=\"Sch.data.CrudManager\" class=\"docClass\">Sch.data.CrudManager</a> instance will load data for all its registered stores data in a single <em>AJAX</em> request.\nAnd any changes made to data in those stores will be sent to the server in one bulk request as well (more details <a href=\"#!/api/Sch.data.CrudManager-method-sync\" rel=\"Sch.data.CrudManager-method-sync\" class=\"docClass\">here</a>).</p>\n\n<h3 id='crud_manager-section-implementing-a-custom-crud-manager'>Implementing a custom CRUD manager</h3>\n\n<p>Let's say that we wanted to implement own <em>CRUD manager</em>. For example to have another encoding (like <em>XML</em> or some other format) or another transport mechanism.\nThen we have to implement our own mixins supporting such corresponding systems. There are some requirements for the content of these mixins.</p>\n\n<p>The encoding API mixin must have two methods:</p>\n\n<ul>\n<li><code>encode</code> - encodes packages before they are sent to a server (from <code>Object</code> to a <code>String</code>)</li>\n<li><code>decode</code> - decodes server responses (from <code>String</code> to an <code>Object</code>)</li>\n</ul>\n\n\n<p>And the transport API mixin must implement following methods:</p>\n\n<ul>\n<li><code>sendRequest</code> - send request to a server</li>\n<li><code>cancelRequest</code> - cancels request</li>\n</ul>\n\n\n<p>So we extend abstract <a href=\"#!/api/Sch.crud.AbstractManager\" rel=\"Sch.crud.AbstractManager\" class=\"docClass\">Sch.crud.AbstractManager</a> class and mix-in a custom encoder:</p>\n\n<pre><code>Ext.define('MyEncoder', {\n    encode : function (request) {\n        ...\n    },\n    decode : function (response) {\n        ...\n    }\n});\n\nExt.define('MyCrudManager', {\n    extend          : '<a href=\"#!/api/Sch.crud.AbstractManager\" rel=\"Sch.crud.AbstractManager\" class=\"docClass\">Sch.crud.AbstractManager</a>',\n    // Use AJAX for requests transporting and our own encoding MyEncoder class\n    mixins          : ['MyEncoder', '<a href=\"#!/api/Sch.crud.transport.Ajax\" rel=\"Sch.crud.transport.Ajax\" class=\"docClass\">Sch.crud.transport.Ajax</a>']\n});\n</code></pre>\n\n<h3 id='crud_manager-section-data-revisions'>Data revisions</h3>\n\n<p>The server interaction protocol supports a <em>server revision stamp</em> (a number incremented after every data update on the server).\nBased on this value, the server may reject a save-request containing possibly outdated data. This can be useful in case of highly concurrent\nsystem implementations, offering you additional control on data integrity and consistency.</p>\n\n<p>Yet this capability is optional and can be easily turned on or off depending on your requirements.</p>\n\n<h2 id='crud_manager-section-server-communication'>Server communication</h2>\n\n<p>All server communications can be divided into two types:</p>\n\n<ul>\n<li>Loading data</li>\n<li>Saving data (an incremental update sent from client to server)</li>\n</ul>\n\n\n<p>See the following sections for detailed description.</p>\n\n<h2 id='crud_manager-section-loading-data'>Loading data</h2>\n\n<p>Data can either be loaded by calling the <a href=\"#!/api/Sch.crud.AbstractManager-method-load\" rel=\"Sch.crud.AbstractManager-method-load\" class=\"docClass\">load</a> method or declaratively by setting the <a href=\"#!/api/Sch.crud.AbstractManager-cfg-autoLoad\" rel=\"Sch.crud.AbstractManager-cfg-autoLoad\" class=\"docClass\">autoLoad</a> config to <code>true</code>.\nA load request is of course performed asynchronously. To be notified of when the load operation is completed, simply specify a callback, or listen to the <a href=\"#!/api/Sch.crud.AbstractManager-event-load\" rel=\"Sch.crud.AbstractManager-event-load\" class=\"docClass\">load event</a>.</p>\n\n<p>When the data has been fetched, it's loaded to each of the stores in the same order as the stores are registered in the  <em>CRUD manager</em>.\nPlease take a look at the <a href=\"#!/api/Sch.crud.AbstractManager-method-addStore\" rel=\"Sch.crud.AbstractManager-method-addStore\" class=\"docClass\">addStore</a> method for more details on how to register stores in a particular order.</p>\n\n<h3 id='crud_manager-section-load-request-structure'>Load request structure</h3>\n\n<p>Let's take a closer look at the <em>load request</em> data structure. The load request object has the following properties:</p>\n\n<pre><code>{\n    requestId   : 123890,\n    type        : \"load\",\n    stores      : [\n        {\n            storeId     : \"store1\",\n            page        : 1,\n            pageSize    : 2,\n            someParam   : \"abc\"\n        },\n        \"store2\",\n        \"store3\"\n    ]\n}\n</code></pre>\n\n<p>Definitions:</p>\n\n<ul>\n<li><code>requestId</code> - unique request identifier shipped with any request</li>\n<li><code>type</code> - request type ('load' - for load requests)</li>\n</ul>\n\n\n<p>The <code>stores</code> section holds the list of stores to be loaded. As the bare minimum, each store can be described by its identifier (as is done for <code>store2</code> and <code>store3</code> in the sample above)\nbut normally they are represented by an object holding a store identifier as well as several parameters.\nThese parameters can be provided in the <a href=\"#!/api/Sch.crud.AbstractManager-method-load\" rel=\"Sch.crud.AbstractManager-method-load\" class=\"docClass\">load</a> method.</p>\n\n<pre><code>crudManager.load({\n    // specify request params for store1\n    store1 : {\n        page        : 2,\n        someParam   : 'abc'\n    }\n});\n</code></pre>\n\n<h4 id='crud_manager-section-pagination-support'>Pagination support</h4>\n\n<p>Pagination is supported through the  <code>page</code> and <code>pageSize</code> parameters when a store is loaded.\nThey are taken from each corresponding store and ignored in cases they do not make sense (e.g. for <code>Ext.data.TreeStore</code>).</p>\n\n<p><strong>Note:</strong> There is a special <a href=\"#!/api/Sch.widget.PagingToolbar\" rel=\"Sch.widget.PagingToolbar\" class=\"docClass\">Sch.widget.PagingToolbar</a> widget implementing a paging toolbar.\nIt should be used instead of the standard <code>Ext.toolbar.Paging</code> when dealing with a CRUD manager.</p>\n\n<h3 id='crud_manager-section-load-response-structure'>Load response structure</h3>\n\n<p>The response for a load operation will look like this:</p>\n\n<pre><code>{\n    requestId   : 123890,\n    revision    : 123,\n    success     : true,\n\n    store1      : {\n        rows : [\n            { Id : 9000, SomeField : 'xxxx', ... },\n            { Id : 123, SomeField : 'yyyy', ... }\n        ],\n        metaData : {\n            someProp : 789,\n            anotherProp : \"foo\"\n        },\n        total : 5\n    },\n\n    store2      : {\n        rows : [\n            { Id : 1, Field1 : 'aaa', ... },\n            { Id : 2, Field1 : 'bbb', ... }\n        ],\n        total : 2\n    },\n\n    store3      : {\n        rows : [\n            { Id : 1, Field2 : 'aaa', ... },\n            { Id : 2, Field2 : 'bbb', ... }\n        ],\n        total : 2\n    }\n}\n</code></pre>\n\n<p>Definitions:</p>\n\n<ul>\n<li><code>requestId</code> - the request identifier</li>\n<li><code>revision</code> - the <em>server revision stamp</em> from client</li>\n<li><code>success</code> - <code>true</code> to indicate a successful response, <code>false</code> if some server error occurred</li>\n</ul>\n\n\n<p>The store data is placed under each corresponding store identifier. A store data section has:</p>\n\n<ul>\n<li><code>rows</code> - An array of records</li>\n<li><code>total</code> - The total number of records</li>\n<li><code>metaData</code> - An optional object containing meta data for the store. This object will be assigned to the store's <code>metaData</code> property after loading.</li>\n</ul>\n\n\n<h2 id='crud_manager-section-saving-data'>Saving data</h2>\n\n<p>A save operation is triggered by calling <a href=\"#!/api/Sch.crud.AbstractManager-method-sync\" rel=\"Sch.crud.AbstractManager-method-sync\" class=\"docClass\">sync</a> call or it can be invoked automatically after any data change\nif the <a href=\"#!/api/Sch.crud.AbstractManager-cfg-autoSync\" rel=\"Sch.crud.AbstractManager-cfg-autoSync\" class=\"docClass\">autoSync</a> config is set to <code>true</code>. A sync request is naturally performed asynchronously. To be\n  notified upon completion, either pass a callback or listen to the <a href=\"#!/api/Sch.crud.AbstractManager-event-sync\" rel=\"Sch.crud.AbstractManager-event-sync\" class=\"docClass\">sync event</a>.</p>\n\n<p>After a save request is completed, the CRUD manager applies the server-side response to each individual store.</p>\n\n<p><strong>Note: It's highly recommended to prevent a user from changing data in the stores while a sync operation is ongoing.\nThe <em>CRUD manager</em> tries to queue additional sync requests if a user triggers sync before a prior request is done.\nData changes done in parallel with ongoing save requests may still lead to unwanted state of your data, so the recommendation is to.\n use GUI masking technique (like <code>loadMask</code> for grids) to prevent such scenarios.</strong></p>\n\n<h3 id='crud_manager-section-sync-request-structure'>Sync request structure</h3>\n\n<p>Here is an example of a <em>sync request</em> object:</p>\n\n<pre><code>{\n    requestId   : 123890,\n    type        : 'sync',\n    revision    : 123,\n\n    store1      : {\n        added : [\n            { $PhantomId : 'q1w2e3r4t5', SomeField : 'smth', ... },\n            ...\n        ],\n        updated : [\n            { Id : 123, SomeField : 'new value' },\n            ...\n        ],\n        removed : [\n            { Id : 345 },\n            ...\n        ]\n    },\n\n    store2      : {\n        added : [...],\n        updated :  [...],\n        removed :  [...]\n    }\n}\n</code></pre>\n\n<p>Definitions:</p>\n\n<ul>\n<li><code>requestId</code> - A unique request identifier shipped with all requests</li>\n<li><code>type</code> - The request type ('sync' - for sync requests)</li>\n<li><code>revision</code> - A <em>server revision stamp</em> from the client</li>\n</ul>\n\n\n<p>For each store, the request has three sections <code>added</code>, <code>updated</code> and <code>removed</code> under which the updated records are placed.\nThe presence of each section is optional depending on the presence of such type of records.</p>\n\n<p>Each added record is sent including the phantom identifier (<a href=\"#!/api/Sch.crud.AbstractManager-cfg-phantomIdField\" rel=\"Sch.crud.AbstractManager-cfg-phantomIdField\" class=\"docClass\">by default</a> the <code>$PhantomId</code>,  field name is used).\nEach updated record includes an identifier as well as any updated field values only. And finally for removed records, only the ids are transfered.</p>\n\n<h3 id='crud_manager-section-sync-response-structure'>Sync response structure</h3>\n\n<p>An example of a <em>sync response</em> object:</p>\n\n<pre><code>{\n    requestId   : 123890,\n    success     : true,\n    revision    : 124,\n    store1      : {\n        rows : [\n            // processed phantom record initially sent from client\n            { $PhantomId : 'q1w2e3r4t5', Id : 9000 },\n            // processed updated record initially sent from client\n            { Id : 123, SomeField2 : '2013-08-01' },\n            // record added/updated by server logic (not sent from client)\n            { Id : 124, SomeField : 'server generated', SomeField2 : '2013-08-01' }\n            ...\n        ],\n        removed : [\n            // processed removed record initially sent from client\n            { Id : 345 },\n            // record removed by server logic (not sent from client)\n            { Id : 145 },\n            ...\n        ]\n    },\n\n    store2      : {\n        rows : [...],\n        removed : [...]\n    }\n}\n</code></pre>\n\n<p>Definitions:</p>\n\n<ul>\n<li><code>requestId</code> - The request identifier</li>\n<li><code>success</code> - <code>true</code> to indicate a successful response, <code>false</code> if some server error occurred</li>\n<li><code>revision</code> - The new <em>server revision stamp</em> from server</li>\n</ul>\n\n\n<p>For each store we have two sections: <code>rows</code> and <code>removed</code>, where:</p>\n\n<ul>\n<li><code>rows</code> holds all records added or updated <em>by the server</em>.\nAs the bare minimum, for phantom records sent by the client, the server returns a combination of phantom Id and the new \"real\" Id (the Id assigned by the database).\nIf the server decides to update some other record as a side effect (either a phantom or a persisted one) or create a new one\nit should return an object holding a combination of the real Id and those field values.\nThe field values will be applied to the corresponding store record on the client (new records will be created automatically).</li>\n<li><code>removed</code> holds Ids of records removed <em>by the server</em> whether initially sent from client or removed due to some server logic.</li>\n</ul>\n\n\n<h2 id='crud_manager-section-error-handling'>Error handling</h2>\n\n<p>In case of a server-side error, the response object will look like this:</p>\n\n<pre><code>{\n    requestId : 123890,\n    success   : false,\n    message   : 'Error description goes here',\n    code      : 13\n}\n</code></pre>\n\n<p>Definitions:</p>\n\n<ul>\n<li><code>requestId</code> - The request identifier</li>\n<li><code>success</code> - <code>false</code> indicating that a server error occurred</li>\n<li><code>message</code> - The error message</li>\n<li><code>code</code> - An optional error code</li>\n</ul>\n\n\n<p>The <a href=\"#!/api/Sch.crud.AbstractManager-method-load\" rel=\"Sch.crud.AbstractManager-method-load\" class=\"docClass\">load</a> and <a href=\"#!/api/Sch.crud.AbstractManager-method-sync\" rel=\"Sch.crud.AbstractManager-method-sync\" class=\"docClass\">sync</a> methods both have an <code>errback</code> argument where\nthe caller can specify a function to be called if an error occurs.</p>\n\n<pre><code>var crudManager = new <a href=\"#!/api/Sch.data.CrudManager\" rel=\"Sch.data.CrudManager\" class=\"docClass\">Sch.data.CrudManager</a>({\n    resourceStore   : resourceStore,\n    eventStore      : eventStore,\n    transport       : {\n        load : {\n            url : 'php/read.php'\n        },\n        sync : {\n            url : 'php/save.php'\n        }\n    }\n});\n\ncrudManager.load(null, function (response, rawResponse) {\n    // let's show message box with error text\n    Ext.Msg.show({\n        title    : 'Error',\n        msg      : response &amp;&amp; response.message || 'Unknown error occurred',\n        icon     : Ext.Msg.ERROR,\n        buttons  : Ext.Msg.OK\n    });\n});\n</code></pre>\n\n<p>Another option allowing a centralized handling of errors is to listen for the <a href=\"#!/api/Sch.crud.AbstractManager-event-loadfail\" rel=\"Sch.crud.AbstractManager-event-loadfail\" class=\"docClass\">loadfail</a> and <a href=\"#!/api/Sch.crud.AbstractManager-event-syncfail\" rel=\"Sch.crud.AbstractManager-event-syncfail\" class=\"docClass\">syncfail</a> events:</p>\n\n<pre><code>// A central method to handle CRUD errors\nvar processError = function (crud, response) {\n    // error code\n    var code = response &amp;&amp; response.code;\n\n    // here we can define some specific reaction on a particular error\n    if (code == 13) {\n        // for example re-load crudManager\n        crudManager.load();\n\n    // and for all other case we just display an error message\n    } else {\n        Ext.Msg.show({\n            title    : 'Error',\n            msg      : response &amp;&amp; response.message || 'Unknown error occurred',\n            icon     : Ext.Msg.ERROR,\n            buttons  : Ext.Msg.OK\n        });\n    }\n};\n\nvar crudManager     = new <a href=\"#!/api/Sch.data.CrudManager\" rel=\"Sch.data.CrudManager\" class=\"docClass\">Sch.data.CrudManager</a>({\n    autoLoad        : true,\n    resourceStore   : resourceStore,\n    eventStore      : eventStore,\n    transport       : {\n        load : {\n            url : 'php/read.php'\n        },\n        sync : {\n            url : 'php/save.php'\n        }\n    },\n    listeners       : {\n        // listen to load request errors\n        loadfail : processError,\n        // listen to sync request errors\n        syncfail : processError\n    }\n});\n</code></pre>\n","title":"CRUD manager general information"});