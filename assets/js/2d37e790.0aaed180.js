(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{168:function(e,n,t){"use strict";t.r(n),t.d(n,"MDXContext",(function(){return u})),t.d(n,"MDXProvider",(function(){return m})),t.d(n,"mdx",(function(){return f})),t.d(n,"useMDXComponents",(function(){return p})),t.d(n,"withMDXComponents",(function(){return d}));var r=t(0),o=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),d=function(e){return function(n){var t=p(n.components);return o.a.createElement(e,a({},n,{components:t}))}},p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,m=u["".concat(a,".").concat(d)]||u[d]||h[d]||s;return t?o.a.createElement(m,c(c({ref:n},i),{},{components:t})):o.a.createElement(m,c({ref:n},i))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,a=new Array(s);a[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},46:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(8),s=(t(0),t(168)),a={sidebar_position:4,keywords:["node","client","consensus","proof-of-work"]},i={unversionedId:"consensus/pow-consensus",id:"consensus/pow-consensus",isDocsHomePage:!1,title:"Configure a chain to POW consensus",description:"When you want to experiment with different consensus engines out there and wanna learn how it works. Start with the classics.",source:"@site/docs/06-consensus/pow-consensus.md",sourceDirName:"06-consensus",slug:"/consensus/pow-consensus",permalink:"/substrate-how-to-guides/docs/consensus/pow-consensus",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/how-to-substrate/docs/06-consensus/pow-consensus.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,keywords:["node","client","consensus","proof-of-work"]},sidebar:"tutorialSidebar",previous:{title:"Ringbuffer queue",permalink:"/substrate-how-to-guides/docs/storage-migrations/ringbuffer"},next:{title:"How-to Template",permalink:"/substrate-how-to-guides/docs/contribute/how-to-template"}},c=[{value:"Goal",id:"goal",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Make a function that defines a full node using <code>sc_consensus_pow</code> and <code>sc_service</code>",id:"1-make-a-function-that-defines-a-full-node-using-sc_consensus_pow-and-sc_service",children:[]},{value:"2. Create import queue",id:"2-create-import-queue",children:[]},{value:"3. Define the <code>proposer</code> and <code>worker</code>",id:"3-define-the-proposer-and-worker",children:[]},{value:"4. Construct the light client&#39;s service.",id:"4-construct-the-light-clients-service",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Resources",id:"resources",children:[]}],l={toc:c};function u(e){var n=e.components,t=Object(o.default)(e,["components"]);return Object(s.mdx)("wrapper",Object(r.default)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,Object(s.mdx)("em",{parentName:"p"},"When you want to experiment with different consensus engines out there and wanna learn how it works. Start with the classics."),"\n",Object(s.mdx)("em",{parentName:"p"},"WIP")),Object(s.mdx)("p",null,Object(s.mdx)("a",{parentName:"p",href:"https://playground.substrate.dev/?deploy=node-template"},Object(s.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/Playground-Node_Template-brightgreen?logo=Parity%20Substrate",alt:"Try on playground"}))),Object(s.mdx)("h2",{id:"goal"},"Goal"),Object(s.mdx)("p",null,"To understand how link a POW consensus engine to a service client."),Object(s.mdx)("h2",{id:"use-cases"},"Use cases"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Launching a POW chain."),Object(s.mdx)("li",{parentName:"ul"},"Upgrading a chain from Authority based to POW based.")),Object(s.mdx)("h2",{id:"overview"},"Overview"),Object(s.mdx)("p",null,"The basic-pow node demonstrates how to wire up a custom consensus engine into the Substrate Service. It uses a minimal proof of work consensus engine to reach agreement over the blockchain. This guide will teach us many useful aspects of dealing with consensus and prepare us to understand more advanced consensus engines in the future."),Object(s.mdx)("h2",{id:"steps"},"Steps"),Object(s.mdx)("h3",{id:"1-make-a-function-that-defines-a-full-node-using-sc_consensus_pow-and-sc_service"},"1. Make a function that defines a full node using ",Object(s.mdx)("inlineCode",{parentName:"h3"},"sc_consensus_pow")," and ",Object(s.mdx)("inlineCode",{parentName:"h3"},"sc_service")),Object(s.mdx)("p",null,"In ",Object(s.mdx)("inlineCode",{parentName:"p"},"src/service.rs"),", make a function called ",Object(s.mdx)("inlineCode",{parentName:"p"},"new_full1")," that defines ",Object(s.mdx)("a",{parentName:"p",href:"https://crates.parity.io/sc_service/struct.PartialComponents.html"},Object(s.mdx)("inlineCode",{parentName:"a"},"PartialComponents"))," and\n",Object(s.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/sc_consensus_pow/struct.PowBlockImport.html"},Object(s.mdx)("inlineCode",{parentName:"a"},"PowBlockImport"))," :"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-rust"},"let pow_block_import = sc_consensus_pow::PowBlockImport::new(\n    client.clone(),\n    client.clone(),\n    sha3pow::MinimalSha3Algorithm,\n    0,                              // check inherents starting at block 0\n    select_chain.clone(),\n    inherent_data_providers.clone(),\n    can_author_with,\n);\n\nlet import_queue = sc_consensus_pow::import_queue(\n    Box::new(pow_block_import.clone()),\n    None,\n    sha3pow::MinimalSha3Algorithm,  // provide it with references to our client\n    inherent_data_providers.clone(),\n    &task_manager.spawn_handle(),\n    config.prometheus_registry(),\n)?;\n")),Object(s.mdx)("p",null,"See the ",Object(s.mdx)("a",{parentName:"p",href:"https://crates.parity.io/sc_consensus_pow/struct.PowBlockImport.html#method.new_full"},"Rust docs")," on to configure the ",Object(s.mdx)("inlineCode",{parentName:"p"},"pow_block_import")," function."),Object(s.mdx)("h3",{id:"2-create-import-queue"},"2. Create import queue"),Object(s.mdx)("p",null,"Define your node's ",Object(s.mdx)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/learn-substrate/extrinsics#inherents"},"inherents")," by using ",Object(s.mdx)("a",{parentName:"p",href:"https://crates.parity.io/sp_inherents/struct.InherentDataProviders.html"},Object(s.mdx)("inlineCode",{parentName:"a"},"InherentDataProviders"))," in a function that defines the providers of your POW system:"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-rust"},"pub fn build_inherent_data_providers() -> Result<InherentDataProviders, ServiceError> {\n    let providers = InherentDataProviders::new();\n\n    providers\n        .register_provider(sp_timestamp::InherentDataProvider)\n        .map_err(Into::into)\n        .map_err(sp_consensus::error::Error::InherentData)?;\n\n    Ok(providers)\n}\n")),Object(s.mdx)("h3",{id:"3-define-the-proposer-and-worker"},"3. Define the ",Object(s.mdx)("inlineCode",{parentName:"h3"},"proposer")," and ",Object(s.mdx)("inlineCode",{parentName:"h3"},"worker")),Object(s.mdx)("p",null,"In the ",Object(s.mdx)("inlineCode",{parentName:"p"},"new_full")," function, define ",Object(s.mdx)("inlineCode",{parentName:"p"},"proposer"),":"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-rust"},"let proposer = sc_basic_authorship::ProposerFactory::new(\n    task_manager.spawn_handle(),\n    client.clone(),\n    transaction_pool,\n    prometheus_registry.as_ref(),\n);\n\nlet (_worker, worker_task) = sc_consensus_pow::start_mining_worker(\n    Box::new(pow_block_import),\n    client,\n    select_chain,\n    MinimalSha3Algorithm,\n    proposer,\n    network.clone(),\n    None,\n    inherent_data_providers,\n    // time to wait for a new block before starting to mine a new one\n    Duration::from_secs(10),\n    // how long to take to actually build the block (i.e. executing extrinsics)\n    Duration::from_secs(10),\n    can_author_with,\n);\n")),Object(s.mdx)("p",null,"Let the task manager spawn it:"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-rust"},'task_manager\n    .spawn_essential_handle()\n    .spawn_blocking("pow", worker_task);\n')),Object(s.mdx)("h3",{id:"4-construct-the-light-clients-service"},"4. Construct the light client's service."),Object(s.mdx)("p",null,"The construction of the ",Object(s.mdx)("a",{parentName:"p",href:"https://www.parity.io/what-is-a-light-client/"},"light client")," service is quite similar to the construction of a ",Object(s.mdx)("inlineCode",{parentName:"p"},"new_full"),"."),Object(s.mdx)("h2",{id:"examples"},"Examples"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Basic POW node ")),Object(s.mdx)("h2",{id:"resources"},"Resources"),Object(s.mdx)("h4",{id:"rust-docs"},"Rust docs"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",{parentName:"li",href:"https://substrate.dev/rustdocs/v3.0.0/sc_consensus_pow/struct.PowBlockImport.html"},Object(s.mdx)("inlineCode",{parentName:"a"},"PowBlockimport"))),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",{parentName:"li",href:"https://crates.parity.io/sc_consensus_pow/trait.PowAlgorithm.html"},"POW Algorithm")," trait")),Object(s.mdx)("h4",{id:"knowledgebase"},"Knowledgebase"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Knowledgebase article on ",Object(s.mdx)("a",{parentName:"li",href:"https://substrate.dev/docs/en/knowledgebase/learn-substrate/extrinsics#inherents"},"inherents"))))}u.isMDXComponent=!0}}]);