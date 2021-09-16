(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{188:function(e,t,r){"use strict";r.r(t),r.d(t,"MDXContext",(function(){return l})),r.d(t,"MDXProvider",(function(){return p})),r.d(t,"mdx",(function(){return g})),r.d(t,"useMDXComponents",(function(){return m})),r.d(t,"withMDXComponents",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),d=function(e){return function(t){var r=m(t.components);return n.a.createElement(e,o({},t,{components:r}))}},m=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=m(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=m(r),d=a,p=l["".concat(o,".").concat(d)]||l[d]||h[d]||i;return r?n.a.createElement(p,s(s({ref:t},c),{},{components:r})):n.a.createElement(p,s({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},58:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var a=r(3),n=r(8),i=(r(0),r(188)),o={sidebar_position:1,keywords:"parachains"},c={unversionedId:"parachains/b-runtime-upgrades/runtime-upgrades",id:"parachains/b-runtime-upgrades/runtime-upgrades",isDocsHomePage:!1,title:"Preparing for On-Chain Upgrades",description:"Consider the different approaches to upgrade your chain.",source:"@site/docs/07-parachains/b-runtime-upgrades/runtime-upgrades.md",sourceDirName:"07-parachains/b-runtime-upgrades",slug:"/parachains/b-runtime-upgrades/runtime-upgrades",permalink:"/substrate-how-to-guides/docs/parachains/b-runtime-upgrades/runtime-upgrades",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/07-parachains/b-runtime-upgrades/runtime-upgrades.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,keywords:"parachains"},sidebar:"tutorialSidebar",previous:{title:"Start a collator node and add more collators",permalink:"/substrate-how-to-guides/docs/parachains/a-collators/start-collator-node"},next:{title:"Set-up your runtime and client",permalink:"/substrate-how-to-guides/docs/parachains/b-runtime-upgrades/setup-runtime-and-client"}},s=[{value:"Goal",id:"goal",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Inform the relay chain",id:"1-inform-the-relay-chain",children:[]},{value:"2. Choose your upgrade approach",id:"2-choose-your-upgrade-approach",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Resources",id:"resources",children:[]}],u={toc:s};function l(e){var t=e.components,r=Object(n.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(a.default)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"Consider the different approaches to upgrade your chain.")),Object(i.mdx)("h2",{id:"goal"},"Goal"),Object(i.mdx)("p",null,"Ensure parachains are prepared for an on-chain upgrade."),Object(i.mdx)("h2",{id:"use-cases"},"Use cases"),Object(i.mdx)("p",null,"Launching a parachain."),Object(i.mdx)("h2",{id:"overview"},"Overview"),Object(i.mdx)("p",null,"This guide outlines two steps to consider before moving on to implementing\na runtime upgrade for a parachain launch."),Object(i.mdx)("h2",{id:"steps"},"Steps"),Object(i.mdx)("h3",{id:"1-inform-the-relay-chain"},"1. Inform the relay chain"),Object(i.mdx)("p",null,"When launching a parachain, the relay chain needs to be informed about the\nruntime upgrade of your chain before it happens. ",Object(i.mdx)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus#cumulus-cloud"},"Cumulus")," provides\nfunctionality to help you notify the relay chain about the upcoming upgrade by:"),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("strong",{parentName:"li"},"Using\n",Object(i.mdx)("a",{parentName:"strong",href:"https://github.com/paritytech/cumulus/blob/d935b81e7010fcf5c5639e238c78d865c1d6ed67/pallets/parachain-system/src/lib.rs#L359"},Object(i.mdx)("inlineCode",{parentName:"a"},"authorize_upgrade"))),"\nto provide the hash of your upgrade and authorize it."),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("strong",{parentName:"li"},"Using\n",Object(i.mdx)("a",{parentName:"strong",href:"https://github.com/paritytech/cumulus/blob/d935b81e7010fcf5c5639e238c78d865c1d6ed67/pallets/parachain-system/src/lib.rs#L369"},Object(i.mdx)("inlineCode",{parentName:"a"},"enact_authorized_upgrade"))),"\nto provide the actual code for the upgrade.")),Object(i.mdx)("p",null,"With both these functions called, the relay chain will be notified that the new\nupgrade has been scheduled."),Object(i.mdx)("h3",{id:"2-choose-your-upgrade-approach"},"2. Choose your upgrade approach"),Object(i.mdx)("p",null,"If your existing Substrate chain has a very large state, which you are migrating\nbetween different storage formats, it might not be possible to run all of the\nruntime migrations within one block. ",Object(i.mdx)("strong",{parentName:"p"},"There are a handful of strategies you can\nuse to remedy this problem:")),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"If the amount of storage items to be migrated can feasibly be processed\nwithin two or three blocks you can run the migrations using the\n",Object(i.mdx)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/scheduler"},"Scheduler pallet"),"\nto ensure they get executed regardless of the block producer. Refer to ",Object(i.mdx)("a",{parentName:"p",href:"./upgrade-scheduler"},"this guide")," on how to do that.")),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"Use versioned storage and only execute migrations when storage values that\nhaven't yet been upgraded are accessed. This can cause variance in\ntransaction fees between users and could potentially result in more complex\nruntime code. However, if properly metered (weights are properly benchmarked)\nthis approach will ensure minimal downtime for migration.")),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},"If you must split your migrations among multiple blocks you can do it either\non-chain or off-chain:"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"An on-chain multi-block migration will require custom pallet logic to be\nwritten which can either queue changes over time or use the Scheduler\npallet to migrate chunks of storage at a time.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Instead of adding migration code to your runtime you can generate the\nmigration manually off-chain by using multiple ",Object(i.mdx)("inlineCode",{parentName:"p"},"system.setStorage")," calls to\nadd and remove storage items via an origin with root\npermission (for example democracy). If you are limited in the number of\ntransactions you can make, you can batch multiple transactions to occur\nover time via the scheduler. Follow these steps:"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Ensure you have the scheduler pallet available on your chain."),Object(i.mdx)("li",{parentName:"ul"},"Use the root origin to schedule any changes to state using ",Object(i.mdx)("inlineCode",{parentName:"li"},"scheduler.scheduleNamed")," in the Apps UI Extrinsics tab."),Object(i.mdx)("li",{parentName:"ul"},"Schedule changes for the blocks immediately after a ",Object(i.mdx)("inlineCode",{parentName:"li"},"system.setcode")," call is scheduled. "),Object(i.mdx)("li",{parentName:"ul"},"Use ",Object(i.mdx)("inlineCode",{parentName:"li"},"system.set_storage")," and ",Object(i.mdx)("inlineCode",{parentName:"li"},"system.kill_storage")," calls."),Object(i.mdx)("li",{parentName:"ul"},"Make sure that the scheduling fits within the PoV block size."),Object(i.mdx)("li",{parentName:"ul"},"Schedule the extrinsics in advance over multiple blocks.")))))),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://github.com/apopiak/substrate-migrations"},"Substrate Migrations")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/blob/6be513d663836c5c5b8a436f5712402a1c5365a3/frame/staking/src/lib.rs#L757"},"Staking Pallet Migration Logic"))),Object(i.mdx)("h2",{id:"resources"},"Resources"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://www.crowdcast.io/e/substrate-seminar/41"},"try-runtime Workshop")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://drive.google.com/file/d/19HPFUmSQIxVkxaVSg1SWveSdvjHUw1b8/view?usp=sharing"},"Substrate Builders Program Storage Migration Discussion"))),Object(i.mdx)("h4",{id:"other"},"Other"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/blob/master/docs/overview.md"},"Cumulus Overview"))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("a",{parentName:"p",href:"https://hackmd.io/BQt-gvEdT66Kbw0j5ySlWw?view"},"Substrate Runtime Migration Guide")))))}l.isMDXComponent=!0}}]);