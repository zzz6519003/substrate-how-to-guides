(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return d})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),m=function(e){return function(t){var n=p(t.components);return r.a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||i;return n?r.a.createElement(u,s(s({ref:t},c),{},{components:n})):r.a.createElement(u,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},351:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/kitties-tutorial-eaf5dd82d63c08a7315559ede1ccfc3c.png"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),i=(n(0),n(188)),o={sidebar_position:1,keywords:"pallet design, intermediate, runtime"},c={unversionedId:"tutorials/Kitties/overview",id:"tutorials/Kitties/overview",isDocsHomePage:!1,title:"\ud83d\ude3a Substrate Kitties",description:"_This is a 2 part tutorial series that steps you through building a pallet for managing Substrate Kitties from scratch. Each part",source:"@site/docs/09-tutorials/01-Kitties/overview.md",sourceDirName:"09-tutorials/01-Kitties",slug:"/tutorials/Kitties/overview",permalink:"/substrate-how-to-guides/docs/tutorials/Kitties/overview",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/09-tutorials/01-Kitties/overview.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,keywords:"pallet design, intermediate, runtime"},sidebar:"tutorialSidebar",previous:{title:"Start a testnet on Rococo",permalink:"/substrate-how-to-guides/docs/parachains/e-other/start-testnet"},next:{title:"Basic set-up",permalink:"/substrate-how-to-guides/docs/tutorials/Kitties/Part 1/basic-setup"}},s=[{value:"Introduction",id:"introduction",children:[{value:"What we&#39;re building",id:"what-were-building",children:[]},{value:"What we won&#39;t cover",id:"what-we-wont-cover",children:[]}]},{value:"Learning outcomes",id:"learning-outcomes",children:[]}],l={toc:s};function d(e){var t=e.components,o=Object(r.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(a.default)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"This is a 2 part tutorial series that steps you through building a pallet for managing Substrate Kitties from scratch. Each part\ncould take between 1.5 and 3 hours to complete depending on your level of experience with Substrate.")),Object(i.mdx)("p",null,Object(i.mdx)("img",{alt:"image",src:n(351).default})),Object(i.mdx)("h2",{id:"introduction"},"Introduction"),Object(i.mdx)("p",null,"Welcome to the Substrate Kitties tutorial. This 2 part tutorial designed to teach you everything you need to know to build a blockchain designed to handle the creation and ownership management of Substrate Kitties. Part 1 will cover how to build the Kitties pallet, including\nthe functionality to interact with the Kitties we create, such as transfering, buying and setting prices. Part II will cover developing\nthe Front-end UI to interact with the blockchain we build in Part 1."),Object(i.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"You may find it useful to come back to this page\nas you progress through each part ","\u2014"," just to keep track of the bigger picture."))),Object(i.mdx)("h3",{id:"what-were-building"},"What we're building"),Object(i.mdx)("p",null,"In Part 1 of this tutorial, we'll intentionally keep things simple so that you can decide on how you'd like to improve your Substrate Kitties chain later on. For the purposes of what we're building, Kitties really can only do the following things:"),Object(i.mdx)("p",null,"\ud83d\ude3a Be created either by some original source or by being bred using existing Kitties."),Object(i.mdx)("p",null,"\ud83d\ude3c Be sold at a price set by their owner."),Object(i.mdx)("p",null,"\ud83d\ude3e Be transferred from one owner to another."),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"In Part 1, we'll go over:")),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("a",{parentName:"p",href:"/docs/Tutorials/Kitties/Part%201/basic-setup"},Object(i.mdx)("strong",{parentName:"a"},"Basic setup")),". We'll need to spin up a Substrate node and create a custom pallet")),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("a",{parentName:"p",href:"/docs/Tutorials/Kitties/Part%201/basic-setup"},Object(i.mdx)("strong",{parentName:"a"},"Runtime storage")),". We'll need a total of 3 storage items in our pallet to keep track of the amount of Kitties; their owners and a Kitty object containing a single Kitty's information.")),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("a",{parentName:"p",href:"/docs/Tutorials/Kitties/Part%201/dispatchables-and-events"},Object(i.mdx)("strong",{parentName:"a"},"Dispatchable functions")),".  We'll need a total of 5 dispatchable functions: ",Object(i.mdx)("inlineCode",{parentName:"p"},"create"),", ",Object(i.mdx)("inlineCode",{parentName:"p"},"set_price"),", ",Object(i.mdx)("inlineCode",{parentName:"p"},"transfer"),", ",Object(i.mdx)("inlineCode",{parentName:"p"},"buy_kitty")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"breed_kitty"))),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("a",{parentName:"p",href:"/docs/Tutorials/Kitties/Part%201/create-kitties"},Object(i.mdx)("strong",{parentName:"a"},"Private functions")),". We'll write 2 helper functions to handle randomness: ",Object(i.mdx)("inlineCode",{parentName:"p"},"increment_nonce")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"random_hash"))),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("a",{parentName:"p",href:"/docs/Tutorials/Kitties/Part%201/interacting-functions"},Object(i.mdx)("strong",{parentName:"a"},"Helper functions")),". We'll write 2 helper functions for our dispatchable functions: ",Object(i.mdx)("inlineCode",{parentName:"p"},"mint")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"transfer_from"),"."))),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"In Part 2, we will:")),Object(i.mdx)("ol",null,Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("a",{parentName:"p",href:"/docs/Tutorials/Kitties/Part%202/kitties-frontend"},Object(i.mdx)("strong",{parentName:"a"},"Create a UI for interacting with our pallet's storage items")),". We'll connect to a React front-end template and create the UI for each dispatchable call.")),Object(i.mdx)("li",{parentName:"ol"},Object(i.mdx)("p",{parentName:"li"},Object(i.mdx)("a",{parentName:"p",href:"/docs/Tutorials/Kitties/Part%202/kitties-frontend"},Object(i.mdx)("strong",{parentName:"a"},"Enhance our UX with Polkadot JS API")),". "))),Object(i.mdx)("h3",{id:"what-we-wont-cover"},"What we won't cover"),Object(i.mdx)("p",null,"The following fall outside the scope of this tutorial:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Writing tests for our pallet.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Declaring a configuration for the genesis of our chain."),Object(i.mdx)("p",{parentName:"li"},"You can refer to the ",Object(i.mdx)("a",{parentName:"p",href:"/docs/intro"},"how-to guides")," on how to do this once you've completed this tutorial series."))),Object(i.mdx)("hr",null),Object(i.mdx)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(i.mdx)("h5",{parentName:"div"},Object(i.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.mdx)("div",{parentName:"div",className:"admonition-content"},Object(i.mdx)("p",{parentName:"div"},"Follow each step at your own pace ","\u2014"," the goal is for you to learn and the best way to do that is to try it yourself!\nUse the side panel to write your code as you follow along (coming soon). Before moving on from one section to the next, make sure your pallet\nbuilds without any error."),Object(i.mdx)("p",{parentName:"div"},"You'll be writing most of the code yourself! Use the template files ",Object(i.mdx)("a",{parentName:"p",href:"https://github.com/substrate-developer-hub/substrate-how-to-guides/tree/main/static/code/kitties-tutorial"},"here"),"\nto help you complete each part."))),Object(i.mdx)("h2",{id:"learning-outcomes"},"Learning outcomes"),Object(i.mdx)("p",null,"\u27a1\ufe0f Write and integrate a custom FRAME pallet to your runtime."),Object(i.mdx)("p",null,"\u27a1\ufe0f Use structs in storage and how to create and update storage items."),Object(i.mdx)("p",null,"\u27a1\ufe0f Write pallet extrinsics and helper functions."),Object(i.mdx)("p",null,"\u27a1\ufe0f Use the PolkadotJS API to connect a Substrate node to a custom a front-end."))}d.isMDXComponent=!0}}]);