(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return g})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),d=function(e){return function(t){var n=p(t.components);return r.a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},53:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),i=(n(0),n(168)),o={sidebar_position:2,keywords:"basics, beginner, runtime"},s={unversionedId:"basics/mint-token",id:"basics/mint-token",isDocsHomePage:!1,title:"Primitive token mint",description:"_ Get started with the simple things as a basis to learn more. _",source:"@site/docs/01-basics/mint-token.md",sourceDirName:"01-basics",slug:"/basics/mint-token",permalink:"/substrate-how-to-guides/docs/basics/mint-token",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/how-to-substrate/docs/01-basics/mint-token.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:"basics, beginner, runtime"},sidebar:"tutorialSidebar",previous:{title:"Basic pallet integration",permalink:"/substrate-how-to-guides/docs/basics/basic-pallet-integration"},next:{title:"Configuring genesis for Balances",permalink:"/substrate-how-to-guides/docs/basics/genesis-config-balances"}},l=[{value:"Goal",id:"goal",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Setup your pallet&#39;s <code>Config</code> trait",id:"1-setup-your-pallets-config-trait",children:[]},{value:"2. Declare your storage item <code>StorageMap</code>",id:"2-declare-your-storage-item-storagemap",children:[]},{value:"3. Create your pallet\u2019s functions",id:"3-create-your-pallets-functions",children:[]},{value:"4. Include your pallet in your runtime",id:"4-include-your-pallet-in-your-runtime",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Related material",id:"related-material",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(r.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(a.default)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"}," Get started with the simple things as a basis to learn more. ")),Object(i.mdx)("blockquote",null,Object(i.mdx)("p",{parentName:"blockquote"},Object(i.mdx)("strong",{parentName:"p"},"Note: \ud83d\udce3 ")," this is a beginner recipe intended for novice Substrate developers looking to explore ways to create tokens in Substrate. This approach is not recommended best practice. Use this guide to learn how to improve upon your runtime logic's capabilities and code quality. See the ",Object(i.mdx)("a",{parentName:"p",href:"#examples"},"Examples")," section for a practical implementations of this guide.")),Object(i.mdx)("h2",{id:"goal"},"Goal"),Object(i.mdx)("p",null,"Create a simple token mint pallet."),Object(i.mdx)("h2",{id:"use-cases"},"Use cases"),Object(i.mdx)("p",null,"Give any account the ability to create a token supply in exchange for native token fee."),Object(i.mdx)("h2",{id:"overview"},"Overview"),Object(i.mdx)("p",null,"This guide will step you through an effective way to mint a token by leveraging the primitive capabilities that\n",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/frame_support/storage/trait.StorageMap.html"},"StorageMap"),' gives us. To achieve this, this "primitive" approach uses the ',Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/runtime/storage#hashing-algorithms"},"blake2_128_concat")," ",Object(i.mdx)("inlineCode",{parentName:"p"},"hasher")," to map balances to account IDs, similar to how the ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/runtime/frame#balances"},"Balances")," pallet makes use of it to store and keep track of account balances."),Object(i.mdx)("h2",{id:"steps"},"Steps"),Object(i.mdx)("h3",{id:"1-setup-your-pallets-config-trait"},"1. Setup your pallet's ",Object(i.mdx)("inlineCode",{parentName:"h3"},"Config")," trait"),Object(i.mdx)("p",null,"Using the Node Template as a starting point, specify the types your pallet depends on and the ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/runtime/events"},Object(i.mdx)("inlineCode",{parentName:"a"},"Events"))," it emits:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"// The configuration trait\npub trait Config: system::Config {\n    type Event: From<Event<Self>> + Into<<Self as frame_system::Config>::Event>;\n    type Balance: Member + Parameter + AtLeast32BitUnsigned + Default + Copy;\n}\n/* --snip-- */\npub enum Event<T: Config> {\n    MintedNewSupply(T::AccountId),\n    Transferred(T::AccountId, T::AccountId, T::Balance),\n}\n")),Object(i.mdx)("h3",{id:"2-declare-your-storage-item-storagemap"},"2. Declare your storage item ",Object(i.mdx)("inlineCode",{parentName:"h3"},"StorageMap")),Object(i.mdx)("p",null,"This pallet only keeps track of the balance to account ID mapping. Call it ",Object(i.mdx)("inlineCode",{parentName:"p"},"BalanceToAccount"),":"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"/* --snip-- */\n    #[pallet::storage]\n    #[pallet::getter(fn get_balance)]\n    pub(super) type BalanceToAccount<T: Config> = StorageMap<\n        _, \n        Blake2_128Concat, \n        T::AccountId, \n        T::Balance,\n        ValueQuery\n        >;\n/* --snip-- */\n")),Object(i.mdx)("h3",{id:"3-create-your-pallets-functions"},"3. Create your pallet\u2019s functions"),Object(i.mdx)("p",null,"We can now bring our attention to creating the intended capabilities of our pallet with the following functions:"),Object(i.mdx)("p",null,"(i) ",Object(i.mdx)("inlineCode",{parentName:"p"},"mint()"),": to issue a token supply from any origin."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"/* --snip-- */\n#[pallet::weight(10_000 + T::DbWeight::get().writes(1))]\npub(super) fn mint(\n    origin: OriginFor<T>,\n    #[pallet::compact] amount: T::Balance\n) -> DispatchResultWithPostInfo {\n            \n    let sender = ensure_signed(origin)?;\n        \n    // Update storage.\n    <BalanceToAccount<T>>::insert(&sender, amount);\n\n    // Emit an event.\n    Self::deposit_event(Event::MintedNewSupply(sender));\n            \n    // Return a successful DispatchResultWithPostInfo.\n    Ok(().into())   \n}\n/* --snip-- */\n")),Object(i.mdx)("p",null,"(ii) ",Object(i.mdx)("inlineCode",{parentName:"p"},"transfer()"),": to allow the minting account to transfer a given balance to another account."),Object(i.mdx)("h4",{id:"define-transfer-variables"},"Define transfer variables"),Object(i.mdx)("p",null,"Start with writing out the variables, using ",Object(i.mdx)("inlineCode",{parentName:"p"},"get_balance")," to reference to ",Object(i.mdx)("inlineCode",{parentName:"p"},"StorageMap")," of balances previously\ndeclared in storage:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"pub(super) fn transfer(\n            origin: OriginFor<T>,\n            to: T::AccountId,\n            #[pallet::compact] amount: T::Balance,\n        ) -> DispatchResultWithPostInfo {\n            let sender = ensure_signed(origin)?;\n            let sender_balance = Self::get_balance(&sender);\n            let receiver_balance = Self::get_balance(&to);\n/* --snip-- */\n")),Object(i.mdx)("h4",{id:"verify-and-add-error-handling"},"Verify and add error handling"),Object(i.mdx)("p",null,"When performing balance updates, use ",Object(i.mdx)("inlineCode",{parentName:"p"},"checked_sub")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"checked_add")," to handle potential errors with overflow:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},'/* --snip-- */\n        // Calculate new balances.\n        let updated_from_balance = sender_balance.checked_sub(value).ok_or(<Error<T>>::InsufficientFunds)?;\n        let updated_to_balance = receiver_balance.checked_add(value).expect("Entire supply fits in u64, qed");\n/* --snip-- */\n')),Object(i.mdx)("h4",{id:"write-to-storage"},"Write to storage"),Object(i.mdx)("p",null," Once the new balances are calculated, write their values to storage and deposit the event to the current block:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"            // Write new balances to storage.\n            <Balances<T>>::insert(&sender, updated_from_balance);\n            <Balances<T>>::insert(&to, updated_to_balance);\n\n            Self::deposit_event(RawEvent::Transfer(sender, to, value));\n            Ok(())\n        }\n/* --snip-- */\n")),Object(i.mdx)("p",null,"If ",Object(i.mdx)("inlineCode",{parentName:"p"},"checked_sub()")," returns ",Object(i.mdx)("inlineCode",{parentName:"p"},"None"),", the operation caused an overflow and throws an error. "),Object(i.mdx)("h3",{id:"4-include-your-pallet-in-your-runtime"},"4. Include your pallet in your runtime"),Object(i.mdx)("p",null,"Refer to ",Object(i.mdx)("a",{parentName:"p",href:"./basic-pallet-integration"},"this guide")," if you\u2019re not yet familiar with this procedure."),Object(i.mdx)("blockquote",null,Object(i.mdx)("p",{parentName:"blockquote"},Object(i.mdx)("strong",{parentName:"p"},"Further learning \ud83d\udca1 ")," "),Object(i.mdx)("ul",{parentName:"blockquote"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Safety.")," The ",Object(i.mdx)("inlineCode",{parentName:"li"},"mint")," function takes in an amount to mint which is ",Object(i.mdx)("em",{parentName:"li"},"not good practice")," because it implies that\nusers have unlimited access to writing to storage. Safer approaches include: using configuring ",Object(i.mdx)("inlineCode",{parentName:"li"},"GenesisConfig")," or\nfixing a predetermined maximum value in runtime. "),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Weights.")," All the weights were set to 10_000 in the above code snippets. Learn more about weight\nconfiguration in this ",Object(i.mdx)("a",{parentName:"li",href:"./basic-tx-weight-calculations"},"basic guide on weights"),"."),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("strong",{parentName:"li"},"Origins.")," One assumption this guide makes is that the origin will always be the sudo user.\nOrigins are a powerful capability in Substrate. Learn more on how to customize an origin in ",Object(i.mdx)("a",{parentName:"li",href:"./origins-beginner"},"this guide"),"."))),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://github.com/sacha-l/substrate-how-to-guides/blob/main/how-to-substrate/example-code/template-node/pallets/mint-token/src/lib.rs#L1-L130"},"mint-token pallet")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://github.com/sacha-l/substrate-how-to-guides/blob/main/how-to-substrate/example-code/template-node/pallets/reward-coin/src/lib.rs#L1-L249"},"reward-coin pallet")," ")),Object(i.mdx)("h2",{id:"related-material"},"Related material"),Object(i.mdx)("h4",{id:"how-to-guides"},"How-to guides"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"./configurable-constants"},"Configure a runtime constant"))),Object(i.mdx)("h4",{id:"rust-docs"},"Rust docs"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://substrate.dev/rustdocs/v3.0.0/frame_system/pallet/struct.Pallet.html#method.deposit_event"},"Deposit event method"))))}u.isMDXComponent=!0}}]);