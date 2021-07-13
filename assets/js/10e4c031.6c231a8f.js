(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return b})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){return function(t){var n=p(t.components);return a.a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||h[d]||i;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(175)),o={sidebar_position:7,keywords:"basics, runtime"},s={unversionedId:"basics/helper-functions",id:"basics/helper-functions",isDocsHomePage:!1,title:"Using helper functions",description:"Building up key components for adding functionality to your pallets.",source:"@site/docs/01-basics/helper-functions.md",sourceDirName:"01-basics",slug:"/basics/helper-functions",permalink:"/substrate-how-to-guides/docs/basics/helper-functions",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/01-basics/helper-functions.md",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,keywords:"basics, runtime"},sidebar:"tutorialSidebar",previous:{title:"Basic instantiable pallets",permalink:"/substrate-how-to-guides/docs/basics/basic-instantiable-pallets"},next:{title:"Publish a pallet to its own crate",permalink:"/substrate-how-to-guides/docs/basics/publish-pallet"}},l=[{value:"Goal",id:"goal",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Create your helper function",id:"1-create-your-helper-function",children:[]},{value:"2. Use it in your dispatchables",id:"2-use-it-in-your-dispatchables",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Resources",id:"resources",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(a.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(r.default)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"Building up key components for adding functionality to your pallets.")),Object(i.mdx)("h2",{id:"goal"},"Goal"),Object(i.mdx)("p",null,"Use helper functions inside a pallet to improve code readability and reusability."),Object(i.mdx)("h2",{id:"use-cases"},"Use cases"),Object(i.mdx)("p",null,'Re-use helper functions to perform common "verify" checks across multiple pallets.'),Object(i.mdx)("h2",{id:"overview"},"Overview"),Object(i.mdx)("p",null,"Sometimes a disptachable function inside a pallet reuse logic that's common to other dispatchables.\nIn this case, it's useful to refactor this logic into its own separate function, private to the pallet.\nOther times, dispatchable functions get increasingly difficult to read as the amount of code increases\nto perform various checks within the dispatchable. In both instances, using helper functions that cannot\nbe accessed from outside the pallet are a useful tool to optimize for code readability and reusability."),Object(i.mdx)("p",null,"In this guide, we'll step through how to create an adder helper that checks for arithmetic overflow\nand  can be reused in any dispatchable."),Object(i.mdx)("h2",{id:"steps"},"Steps"),Object(i.mdx)("h3",{id:"1-create-your-helper-function"},"1. Create your helper function"),Object(i.mdx)("p",null,"The helper we'll refer to is called ",Object(i.mdx)("inlineCode",{parentName:"p"},"fn _adder"),": it checks that there is no overflow when adding two integers of type ",Object(i.mdx)("inlineCode",{parentName:"p"},"u32"),"."),Object(i.mdx)("p",null,"It takes two ",Object(i.mdx)("inlineCode",{parentName:"p"},"u32")," integers, uses ",Object(i.mdx)("inlineCode",{parentName:"p"},"checked_add")," and ",Object(i.mdx)("inlineCode",{parentName:"p"},"ok_or")," to check that there is no overflow. If there is, it returns an error; otherwise\nit returns the result. "),Object(i.mdx)("p",null,"Here's what it looks like as a helper function. This would go at the bottom of your pallet:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},'impl<T: Config> Pallet<T> {\n    fn _adder(num1: u32, num2: u32) -> Result<u32, &\'static str> {\n        num1.checked_add(num2).ok_or("Overflow when adding")\n    }\n} \n')),Object(i.mdx)("h3",{id:"2-use-it-in-your-dispatchables"},"2. Use it in your dispatchables"),Object(i.mdx)("p",null,"Identify the places where you've needed to verify for overflow when performing an addition.\nUse the helper function instead of rewriting the same code. Below is a simple example of\na dispatchable that allows a signed extrinsic to add a value to the existing storage value:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},'    // Extrinsics callable from outside the runtime.\n     #[pallet::call]\n    impl<T: Config> Pallet<T> {\n    #[pallet::weight(1_000)]\n\n    fn add_value(\n        origin: OriginFor<T>,\n        val_to_add: u32\n        ) -> DispatchResultWithPostInfo {\n            let _ = ensure_signed(origin)?;\n\n            ensure!(val_to_add <= T::MaxAddend::get(), "value must be <= maximum add amount constant");\n\n            // previous value got\n            let c_val = SingleValue::<T>::get();\n\n            // checks for overflow when new value added\n            let result = _adder(c_val, val_to_add); \n\n            <SingleValue<T>>::put(result);\n            Self::deposit_event(Event::Added(c_val, val_to_add, result));\n            Ok(().into())\n        }\n    }\n')),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/blob/master/frame/example-offchain-worker/src/lib.rs"},"example-offchain-worker"),": the ",Object(i.mdx)("inlineCode",{parentName:"li"},"add_price")," helper function used in this pallet's dispatchable.")),Object(i.mdx)("h2",{id:"resources"},"Resources"),Object(i.mdx)("h4",{id:"rust-docs"},"Rust docs"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://docs.rs/num/0.2.0/num/trait.CheckedAdd.html#required-methods"},"checked_add")," "),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/option/enum.Option.html#method.ok_or"},"ok_or"))))}u.isMDXComponent=!0}}]);