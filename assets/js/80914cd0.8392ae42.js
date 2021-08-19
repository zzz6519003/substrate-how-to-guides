(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return d})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return h})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),u=function(e){return function(t){var n=p(t.components);return a.a.createElement(e,i({},t,{components:n}))}},p=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),o=(n(0),n(186)),i={sidebar_position:8,keywords:"pallet design, beginner, runtime"},s={unversionedId:"pallet-design/storage-map",id:"pallet-design/storage-map",isDocsHomePage:!1,title:"Create and use a storage Map",description:"Learn how to write into a storage map.",source:"@site/docs/02-pallet-design/storage-map.md",sourceDirName:"02-pallet-design",slug:"/pallet-design/storage-map",permalink:"/substrate-how-to-guides/docs/pallet-design/storage-map",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/02-pallet-design/storage-map.md",version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,keywords:"pallet design, beginner, runtime"},sidebar:"tutorialSidebar",previous:{title:"Generating on-chain randomness",permalink:"/substrate-how-to-guides/docs/pallet-design/randomness"},next:{title:"Conditional weighting struct",permalink:"/substrate-how-to-guides/docs/weights/conditional-weight-struct"}},l=[{value:"Goal",id:"goal",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Define a StorageMap instance",id:"1-define-a-storagemap-instance",children:[]},{value:"2. Write to the <code>WhenLastSomethingDone</code> storage item",id:"2-write-to-the-whenlastsomethingdone-storage-item",children:[]},{value:"3. Write to the <code>CallsCounterBySender</code> storage item",id:"3-write-to-the-callscounterbysender-storage-item",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Resources",id:"resources",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(a.default)(e,["components"]);return Object(o.mdx)("wrapper",Object(r.default)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,Object(o.mdx)("em",{parentName:"p"},"Learn how to write into a storage map.")),Object(o.mdx)("h2",{id:"goal"},"Goal"),Object(o.mdx)("p",null,"Learn how to use a ",Object(o.mdx)("a",{parentName:"p",href:"https://crates.parity.io/frame_support/storage/trait.StorageMap.html"},Object(o.mdx)("inlineCode",{parentName:"a"},"StorageMap"))," using FRAME V2's syntax."),Object(o.mdx)("h2",{id:"use-cases"},"Use cases"),Object(o.mdx)("p",null,"Declaring a Storage Map and using it in a pallet."),Object(o.mdx)("h2",{id:"overview"},"Overview"),Object(o.mdx)("p",null,"We will create 2 maps :"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"WhenLastSomethingDone")," : to store the lastest block number when a function is called"),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"CallsCounterBySender")," : to store a counter by sender address for a function called")),Object(o.mdx)("h2",{id:"steps"},"Steps"),Object(o.mdx)("h3",{id:"1-define-a-storagemap-instance"},"1. Define a StorageMap instance"),Object(o.mdx)("p",null,"Use FRAME's ",Object(o.mdx)("inlineCode",{parentName:"p"},"StorageMap")," to declare the struct as a new single item in storage:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-rust"},"#[pallet::storage]\n#[pallet::getter(fn when_last_something_done)]\npub type WhenLastSomethingDone<T: Config> = StorageMap<_, Twox64Concat, T::AccountId, T::BlockNumber, ValueQuery>;\n\n#[pallet::storage]\n#[pallet::getter(fn call_counter_by_sender)]\npub type CallsCounterBySender<T: Config> = StorageMap<_, Twox64Concat, T::AccountId, u32, ValueQuery>;\n\n")),Object(o.mdx)("h3",{id:"2-write-to-the-whenlastsomethingdone-storage-item"},"2. Write to the ",Object(o.mdx)("inlineCode",{parentName:"h3"},"WhenLastSomethingDone")," storage item"),Object(o.mdx)("p",null,"Example of using ",Object(o.mdx)("inlineCode",{parentName:"p"},"WhenLastSomethingDone")," inside a function using ",Object(o.mdx)("inlineCode",{parentName:"p"},"insert")," :"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-rust"},"let who = ensure_signed(origin)?;\nlet now = frame_system::Pallet::<T>::block_number();\n<WhenLastSomethingDone<T>>::insert(&who, now);\n")),Object(o.mdx)("h3",{id:"3-write-to-the-callscounterbysender-storage-item"},"3. Write to the ",Object(o.mdx)("inlineCode",{parentName:"h3"},"CallsCounterBySender")," storage item"),Object(o.mdx)("p",null,"Example of the ",Object(o.mdx)("inlineCode",{parentName:"p"},"CallsCounterBySender")," StorageMap being used inside a function:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-rust"},"let who = ensure_signed(origin)?;\nif ! <CallsCounterBySender<T>>::contains_key(&who) {\n<CallsCounterBySender<T>>::insert(&who, 0);\n}\nlet counter = <CallsCounterBySender<T>>::get(&who).saturating_add(1);\n<CallsCounterBySender<T>>::insert(&who, counter);\n\n")),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Inside FRAME's ",Object(o.mdx)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/blob/37d4bce3f478cab6903401a9089449a27eb24a38/frame/balances/src/lib.rs#L485-L497"},Object(o.mdx)("inlineCode",{parentName:"a"},"pallet-balances"))),Object(o.mdx)("li",{parentName:"ul"},"StorageMaps in the ",Object(o.mdx)("a",{parentName:"li",href:"https://github.com/luguslabs/archipel/blob/upgrade-substrate-3.0.0/chain/pallets/archipel/src/lib.rs#L39-L75"},Object(o.mdx)("inlineCode",{parentName:"a"},"archipel project")))),Object(o.mdx)("h2",{id:"resources"},"Resources"),Object(o.mdx)("h4",{id:"rust-docs"},"Rust docs"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"https://crates.parity.io/frame_support/storage/trait.StorageMap.html"},"StorageMap"))))}d.isMDXComponent=!0}}]);