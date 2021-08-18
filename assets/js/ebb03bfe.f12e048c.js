(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){return function(t){var n=p(t.components);return r.a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(n),u=a,m=l["".concat(o,".").concat(u)]||l[u]||h[u]||i;return n?r.a.createElement(m,d(d({ref:t},c),{},{components:n})):r.a.createElement(m,d({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(8),i=(n(0),n(187)),o={sidebar_position:3},c={unversionedId:"tools/auction-winners-sidecar",id:"tools/auction-winners-sidecar",isDocsHomePage:!1,title:"Track Parachain auction winners using Substrate API Sidecar",description:"Useful tools that do useful things.",source:"@site/docs/08-tools/auction-winners-sidecar.md",sourceDirName:"08-tools",slug:"/tools/auction-winners-sidecar",permalink:"/substrate-how-to-guides/docs/tools/auction-winners-sidecar",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/08-tools/auction-winners-sidecar.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create a `txwrapper` for a chain",permalink:"/substrate-how-to-guides/docs/tools/create-tx-wrapper-package"},next:{title:"Configure a chain to POW consensus",permalink:"/substrate-how-to-guides/docs/consensus/pow-consensus"}},d=[{value:"Goal",id:"goal",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Leverage the <code>/experimental/paras/auctions/current</code> endpoint",id:"1-leverage-the-experimentalparasauctionscurrent-endpoint",children:[]},{value:"2. Using Sidecar to find the auction winners",id:"2-using-sidecar-to-find-the-auction-winners",children:[]},{value:"3. Query the <code>/blocks/:blockId</code> endpoint",id:"3-query-the-blocksblockid-endpoint",children:[]},{value:"4. Compare your data",id:"4-compare-your-data",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Resources",id:"resources",children:[]}],s={toc:d};function l(e){var t=e.components,n=Object(r.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(a.default)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"Useful tools that do useful things.")),Object(i.mdx)("h2",{id:"goal"},"Goal"),Object(i.mdx)("p",null,"Find the winner of a completed parachain auction using ",Object(i.mdx)("inlineCode",{parentName:"p"},"sidecar"),". "),Object(i.mdx)("h2",{id:"use-cases"},"Use cases"),Object(i.mdx)("p",null,"Interact with a Substrate blockchain node using a REST service."),Object(i.mdx)("h2",{id:"overview"},"Overview"),Object(i.mdx)("p",null,"To find the winner of a completed auction we will need to know the block number the auction ended at. Since ",Object(i.mdx)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-api-sidecar"},"Sidecar")," is a stateless API and the auction info is stored at the final block of an auction, once the auction is over we need the block number to make historic queries to retrieve the event and data stored in it (keep reading for details)."),Object(i.mdx)("h2",{id:"steps"},"Steps"),Object(i.mdx)("h3",{id:"1-leverage-the-experimentalparasauctionscurrent-endpoint"},"1. Leverage the ",Object(i.mdx)("inlineCode",{parentName:"h3"},"/experimental/paras/auctions/current")," endpoint"),Object(i.mdx)("p",null,"We will track and store ",Object(i.mdx)("inlineCode",{parentName:"p"},"finishEnd"),", ",Object(i.mdx)("inlineCode",{parentName:"p"},"auctionIndex"),", and ",Object(i.mdx)("inlineCode",{parentName:"p"},"leasePeriods")," in a Database."),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"finishEnd"),": This is the last block of the auction. Storing it allows you to query the block at which the auction ended. From that block you can extract the lease winning related events. (To query the block: GET /blocks/{finishEnd}.)"),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"auctionIndex"),": The unique identifier for the auction."),Object(i.mdx)("p",null,Object(i.mdx)("inlineCode",{parentName:"p"},"leasePeriods"),": The available lease period indexes that may be bid on for the specific auctionIndex."),Object(i.mdx)("h3",{id:"2-using-sidecar-to-find-the-auction-winners"},"2. Using Sidecar to find the auction winners"),Object(i.mdx)("p",null,"By storing the ",Object(i.mdx)("inlineCode",{parentName:"p"},"finishEnd")," block and looking at the ",Object(i.mdx)("inlineCode",{parentName:"p"},"Leased")," events within it, we can see who the auction winners are and what lease periods they were rewarded."),Object(i.mdx)("p",null,"Format the data however is necessary, for example:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},'auctionIndex: {\n    leasePeriods: [\n        "11", "12", "13", "14"\n    ],\n    finishEnd: \'200\'\n}\n')),Object(i.mdx)("h3",{id:"3-query-the-blocksblockid-endpoint"},"3. Query the ",Object(i.mdx)("inlineCode",{parentName:"h3"},"/blocks/:blockId")," endpoint"),Object(i.mdx)("p",null,"This step queries all blocks at the block height specified in the ",Object(i.mdx)("inlineCode",{parentName:"p"},"finishEnd")," field and retrieves all events inside of ",Object(i.mdx)("inlineCode",{parentName:"p"},"on_initialize"),". An example response would be:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},'{\n    authorId: ....,\n    extrinsics:....\n    ...\n    on_initialize: {\n        events: [\n            {\n                "method": {\n                    "pallet": "slots",\n                    "method": "Leased"\n                },\n                "data": [\n                    \'1000\', // ParaId\n                    \'5HpG9w8EBLe5XCrbczpwq5TSXvedjrBGCwqxK1iQ7qUsSWFc\', // AccountId\n                    \'1\', // LeasePeriod (begining of the lease period)\n                    \'4\', // LeasePeriod (the count of the lease period)\n                    \'10000\', // Balance (extra balance reserved)\n                    \'1000000000\', // Balance (total balance) \n                ]\n            },\n            {\n                "method": {\n                    "pallet": "auctions",\n                    "method": "AuctionClosed"\n                },\n                "data": [\n                    ...\n                ]\n            }\n        ]\n    }\n}\n')),Object(i.mdx)("h3",{id:"4-compare-your-data"},"4. Compare your data"),Object(i.mdx)("p",null,"Now that you have all the ",Object(i.mdx)("inlineCode",{parentName:"p"},"paraIds")," that won slots for that auction, you can compare it with the data relevant to the ",Object(i.mdx)("inlineCode",{parentName:"p"},"auctionIndex"),".\nComparing the ",Object(i.mdx)("inlineCode",{parentName:"p"},"leasePeriods")," that are available during the active auction to the ",Object(i.mdx)("inlineCode",{parentName:"p"},"leasePeriods")," that have been won and denoted in the\n",Object(i.mdx)("inlineCode",{parentName:"p"},"Leased")," events (there may be multiple if there are multiple winners) will give you all the winners for that auction."),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"More guides ",Object(i.mdx)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-api-sidecar/tree/master/guides"},"here"),".")),Object(i.mdx)("h2",{id:"resources"},"Resources"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-api-sidecar"},"Sidecar documentation")),Object(i.mdx)("li",{parentName:"ul"},"Available ",Object(i.mdx)("a",{parentName:"li",href:"https://paritytech.github.io/substrate-api-sidecar/dist/"},"Substrate Sidecar API endpoints"))))}l.isMDXComponent=!0}}]);