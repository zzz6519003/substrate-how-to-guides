(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return d})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return f})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),u=function(e){return function(t){var n=p(t.components);return i.a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||h[u]||r;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(8),r=(n(0),n(188)),o={sidebar_position:5,keywords:"pallet design, intermediate, runtime",theme:null,code:"../static/code/kitties-tutorial/04-interacting-functions.rs"},s={unversionedId:"tutorials/Kitties/Part 1/interacting-functions",id:"tutorials/Kitties/Part 1/interacting-functions",isDocsHomePage:!1,title:"Interacting with your Kitties",description:"Add pallet capabilities that unleash the potential of your Substrate Kitty application.",source:"@site/docs/09-tutorials/01-Kitties/Part 1/interacting-functions.md",sourceDirName:"09-tutorials/01-Kitties/Part 1",slug:"/tutorials/Kitties/Part 1/interacting-functions",permalink:"/substrate-how-to-guides/docs/tutorials/Kitties/Part 1/interacting-functions",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/09-tutorials/01-Kitties/Part 1/interacting-functions.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,keywords:"pallet design, intermediate, runtime",theme:null,code:"../static/code/kitties-tutorial/04-interacting-functions.rs"},sidebar:"tutorialSidebar",previous:{title:"Dispatchables, Events and Errors",permalink:"/substrate-how-to-guides/docs/tutorials/Kitties/Part 1/dispatchables-and-events"},next:{title:"Kitty Front-end Outline",permalink:"/substrate-how-to-guides/docs/tutorials/Kitties/Part 2/kitties-frontend-1"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Learning outcomes",id:"learning-outcomes",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Set a price for each Kitty",id:"1-set-a-price-for-each-kitty",children:[]},{value:"2. Transfer a Kitty",id:"2-transfer-a-kitty",children:[]},{value:"3. Buy a Kitty",id:"3-buy-a-kitty",children:[]},{value:"4. Breed Kitties",id:"4-breed-kitties",children:[]},{value:"5. Genesis configuration",id:"5-genesis-configuration",children:[]},{value:"6. Update <code>runtime/src/lib.rs</code> and interact with your Kitties",id:"6-update-runtimesrclibrs-and-interact-with-your-kitties",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(i.default)(e,["components"]);return Object(r.mdx)("wrapper",Object(a.default)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("p",null,Object(r.mdx)("em",{parentName:"p"},"Add pallet capabilities that unleash the potential of your Substrate Kitty application.")),Object(r.mdx)("h2",{id:"overview"},"Overview"),Object(r.mdx)("p",null,"Up until this point in the tutorial, we've built a chain capable of only creating and tracking the ownership of Kitties. In this part of the tutorial, we want to make our runtime more\nlike a game by introducing other functions like buying and\nselling Kitties. In order to achieve this, we'll first need to enable users\nto update the price of their Kitty. Then we can add functionality to enable users to transfer, buy and breed Kitties."),Object(r.mdx)("h2",{id:"learning-outcomes"},"Learning outcomes"),Object(r.mdx)("p",null,"\u27a1\ufe0f Learn how to create a dispatchable that updates an object in storage."),Object(r.mdx)("p",null,"\u27a1\ufe0f Getting a value from a struct in storage."),Object(r.mdx)("p",null,"\u27a1\ufe0f How to use the ",Object(r.mdx)("inlineCode",{parentName:"p"},"transfer")," from FRAME's Currency trait."),Object(r.mdx)("p",null,"\u27a1\ufe0f How to write sanity check using ",Object(r.mdx)("inlineCode",{parentName:"p"},"ensure!()"),"."),Object(r.mdx)("h2",{id:"steps"},"Steps"),Object(r.mdx)("h3",{id:"1-set-a-price-for-each-kitty"},"1. Set a price for each Kitty"),Object(r.mdx)("p",null,"In ",Object(r.mdx)("a",{parentName:"p",href:"https://github.com/substrate-developer-hub/substrate-how-to-guides/blob/main/static/code/kitties-tutorial/04-interacting-functions.rs"},"the helper file for this part of the tutorial"),", you'll notice that the structure of ",Object(r.mdx)("inlineCode",{parentName:"p"},"set_price")," is already laid out."),Object(r.mdx)("p",null,"Your job is to replace ACTION lines #1, #2 and #3 lines with what you'll learn in sections A-D below. "),Object(r.mdx)("h4",{id:"a-checking-kitty-owner"},"A. Checking Kitty owner"),Object(r.mdx)("p",null,"As we create functions which modify objects in storage, we\nshould always check that only the appropriate users are successful when calling those dispatchable functions."),Object(r.mdx)("p",null,"The general pattern for an ownership check will look something like this:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},'let owner = Self::owner_of(object_id).ok_or("No owner for this object")?;\n\nensure!(owner == sender, "You are not the owner");\n')),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Your turn!")," Paste in this code snippet to replace ACTION #1:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"ensure!(Self::is_kitty_owner(&kitty_id, &sender)?, <Error<T>>::NotKittyOwner);\n")),Object(r.mdx)("h4",{id:"b-updating-the-price-of-our-kitty-object"},"B. Updating the price of our Kitty object"),Object(r.mdx)("p",null,"Every Kitty object has a price attribute that we've set to ","[",Object(r.mdx)("inlineCode",{parentName:"p"},"None"),"]"," as a default value inside the\n",Object(r.mdx)("inlineCode",{parentName:"p"},"mint")," function in ",Object(r.mdx)("a",{parentName:"p",href:"/docs/tutorials/Kitties/Part%201/dispatchables-and-events#3-write-the-mint-function"},"Part II"),":"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"let kitty = Kitty::<T> {\n                dna: dna.unwrap_or_else(Self::gen_dna),\n                price: None,                           //<-- \ud83d\udc40 here\n                gender: gender.unwrap_or_else(Self::gen_gender),\n                owner: owner.clone(),\n            };\n")),Object(r.mdx)("p",null,"To update the price of a Kitty, we'll need to:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Get the Kitty object in storage."),Object(r.mdx)("li",{parentName:"ul"},"Update the object with the new price."),Object(r.mdx)("li",{parentName:"ul"},"Push it back into storage.")),Object(r.mdx)("p",null,"Changing a value in an existing object in storage would be written in the following way:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"let mut object = Self::get_object(object_id);\nobject.value = new_value;\n\n<Object<T>>::insert(object_id, object);\n")),Object(r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(r.mdx)("h5",{parentName:"div"},Object(r.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.mdx)("div",{parentName:"div",className:"admonition-content"},Object(r.mdx)("p",{parentName:"div"},"Rust expects you to declare a variable as mutable (using the ",Object(r.mdx)("inlineCode",{parentName:"p"},"mut")," keyword) whenever its value is going to be updated."))),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Your turn!")," Paste in the following snippet to replace the ACTION #2 line: "),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"kitty.price = new_price.clone();\n<Kitties<T>>::insert(&kitty_id, kitty);\n")),Object(r.mdx)("h4",{id:"d-deposit-an-event"},"D. Deposit an event"),Object(r.mdx)("p",null,"Once all checks are passed and the new price is written to storage, we can deposit an event\n",Object(r.mdx)("a",{parentName:"p",href:"/docs/tutorials/Kitties/Part%201/dispatchables-and-events#4-implement-pallet-events"},"just like we did in Part III"),".\nReplace the line marked as ACTION #3 with:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"Self::deposit_event(Event::PriceSet(sender, kitty_id, new_price));\n")),Object(r.mdx)("p",null," Now whenever the ",Object(r.mdx)("inlineCode",{parentName:"p"},"set_price")," dispatchable is called successfully, it will emit a ",Object(r.mdx)("inlineCode",{parentName:"p"},"PriceSet")," event. \ud83c\udf89"),Object(r.mdx)("h3",{id:"2-transfer-a-kitty"},"2. Transfer a Kitty"),Object(r.mdx)("p",null,"You already have the tools and knowledge you'll need to create the transfer functionality from ",Object(r.mdx)("a",{parentName:"p",href:"#1-set-a-price-for-each-kitty"},"step 1"),". The main difference is that there are ",Object(r.mdx)("strong",{parentName:"p"},"two parts")," to achieving this:"),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"A ",Object(r.mdx)("strong",{parentName:"li"},"dispatchable function")," called ",Object(r.mdx)("inlineCode",{parentName:"li"},"transfer()"),": this is a publicly callable dispatchable exposed by your pallet."),Object(r.mdx)("li",{parentName:"ol"},"A ",Object(r.mdx)("strong",{parentName:"li"},"private function")," called ",Object(r.mdx)("inlineCode",{parentName:"li"},"transfer_kitty_to()"),": this will be a private helper function called by ",Object(r.mdx)("inlineCode",{parentName:"li"},"transfer()")," to handle all storage updates when transferring a Kitty.")),Object(r.mdx)("p",null,"Separating the logic this way makes the private ",Object(r.mdx)("inlineCode",{parentName:"p"},"transfer_kitty_to()")," function reusable\nby other dispatchable functions of our pallet, without needing to duplicate code. In our case, we're going to reuse it for\nthe ",Object(r.mdx)("inlineCode",{parentName:"p"},"buy_kitty")," dispatchable we're creating in the next section."),Object(r.mdx)("h4",{id:"transfer"},Object(r.mdx)("inlineCode",{parentName:"h4"},"transfer")),Object(r.mdx)("p",null,"Paste in the following snippet to replace ACTION #5 in the template code:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"#[pallet::weight(100)]\npub fn transfer(\n    origin: OriginFor<T>, \n    to: T::AccountId, \n    kitty_id: T::Hash\n) -> DispatchResult {\n    let from = ensure_signed(origin)?;\n\n    // Ensure the kitty exists and is called by the kitty owner\n    ensure!(Self::is_kitty_owner(&kitty_id, &from)?, <Error<T>>::NotKittyOwner);\n\n    // Verify the kitty is not transferring back to its owner.\n    ensure!(from != to, <Error<T>>::TransferToSelf);\n\n    // Verify the recipient has the capacity to receive one more kitty\n    let to_owned = <KittiesOwned<T>>::get(&to);\n    ensure!((to_owned.len() as u32) < T::MaxKittyOwned::get(), <Error<T>>::ExceedMaxKittyOwned);\n\n    Self::transfer_kitty_to(&kitty_id, &to)?;\n\n    Self::deposit_event(Event::Transferred(from, to, kitty_id));\n\n    Ok(())\n}\n")),Object(r.mdx)("p",null,"By now the above pattern should be familiar. We always check that the transaction is signed; then we verify that the Kitty\nbeing transfer is owned by the sender of this transaction; and last we call the ",Object(r.mdx)("inlineCode",{parentName:"p"},"transfer_kitty_to")," helper to update\nall storage items appropriately."),Object(r.mdx)("h4",{id:"transfer_kitty_to"},Object(r.mdx)("inlineCode",{parentName:"h4"},"transfer_kitty_to")),Object(r.mdx)("p",null,"Now, the ",Object(r.mdx)("inlineCode",{parentName:"p"},"transfer_kitty_to")," function will be a helper to perform all storage updates once a Kitty has been bought and sold.\nAll it needs to do is perform safety checks and update the following storage items:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"KittiesOwned"),": to update the owner of the Kitty."),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"Kitties"),": to reset the price in the Kitty object to None.")),Object(r.mdx)("p",null,"Copy the following to replace ACTION #6:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"#[transactional]\npub fn transfer_kitty_to(\n    kitty_id: &T::Hash,\n    to: &T::AccountId,\n) -> Result<(), Error<T>> {\n    let mut kitty = Self::kitties(&kitty_id).ok_or(<Error<T>>::KittyNotExist)?;\n\n    let prev_owner = kitty.owner.clone();\n\n    // Remove `kitty_id` from the KittyOwned vector of `prev_kitty_owner`\n    <KittiesOwned<T>>::try_mutate(&prev_owner, |owned| {\n        if let Some(ind) = owned.iter().position(|&id| id == *kitty_id) {\n            owned.swap_remove(ind);\n            return Ok(());\n        }\n        Err(())\n    }).map_err(|_| <Error<T>>::KittyNotExist)?;\n\n    // Update the kitty owner\n    kitty.owner = to.clone();\n    // Reset the ask price so the kitty is not for sale until `set_price()` is called\n    // by the current owner.\n    kitty.price = None;\n\n    <Kitties<T>>::insert(kitty_id, kitty);\n\n    <KittiesOwned<T>>::try_mutate(to, |vec| {\n        vec.try_push(*kitty_id)\n    }).map_err(|_| <Error<T>>::ExceedMaxKittyOwned)?;\n\n    Ok(())\n}\n")),Object(r.mdx)("p",null,"Notice the use of ",Object(r.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/latest/frame_support/attr.transactional.html"},Object(r.mdx)("inlineCode",{parentName:"a"},"[#transactional]"))," which we imported at the very beginning of this tutorial. It allows us to write dispatchable functions that will only write to storage at the same time as the helper functions it calls, making sure all storage writes happen together."),Object(r.mdx)("h3",{id:"3-buy-a-kitty"},"3. Buy a Kitty"),Object(r.mdx)("h4",{id:"a-check-a-kitty-is-for-sale"},"A. Check a Kitty is for Sale"),Object(r.mdx)("p",null,"We'll need to ensure 2 things before we can allow the user of this function to purchase a Kitty: first, check that the\nKitty is for sale; and second, check whether the Kitty's current price is within the user's budget and whether the user has\nenough free balance."),Object(r.mdx)("p",null,"Replace line ACTION #7:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"// Check the kitty is for sale and the kitty ask price <= bid_price\nif let Some(ask_price) = kitty.price {\n    ensure!(ask_price <= bid_price, <Error<T>>::KittyBidPriceTooLow);\n} else {\n    Err(<Error<T>>::KittyNotForSale)?;\n}\n\n// Check the buyer has enough free balance\nensure!(T::Currency::free_balance(&buyer) >= bid_price, <Error<T>>::NotEnoughBalance);\n")),Object(r.mdx)("p",null,"In a similar vain, we have to verify whether the user has the capacity to receive a Kitty ","\u2014"," remember we're using\na ",Object(r.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/latest/frame_support/storage/bounded_vec/struct.BoundedVec.html"},Object(r.mdx)("inlineCode",{parentName:"a"},"BoundedVec"))," that can\nonly hold a fixed number of Kitties, defined in our pallet's ",Object(r.mdx)("inlineCode",{parentName:"p"},"MaxKittyOwned")," constant."),Object(r.mdx)("p",null,"One last check before we can allow this user to call this dispatchable (paste this in following the last snippet):"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"// Verify the buyer has the capacity to receive one more kitty\nlet to_owned = <KittiesOwned<T>>::get(&buyer);\nensure!((to_owned.len() as u32) < T::MaxKittyOwned::get(), <Error<T>>::ExceedMaxKittyOwned);\n\nlet seller = kitty.owner.clone();\n")),Object(r.mdx)("h4",{id:"b-making-a-payment"},"B. Making a Payment"),Object(r.mdx)("p",null,"In ",Object(r.mdx)("a",{parentName:"p",href:"#2-transfer-a-kitty"},"Step 2"),", we added the functions necessary to transfer the ",Object(r.mdx)("em",{parentName:"p"},"ownership")," of our\nKitties. But we haven't yet touched on the currrency associated to our pallet.\nIn this step we'll learn how to use ",Object(r.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/latest/frame_support/traits/tokens/currency/index.html"},"FRAME's Currency trait")," to adjust account balances\nusing its very own ",Object(r.mdx)("a",{parentName:"p",href:"https://crates.parity.io/frame_support/traits/tokens/currency/trait.Currency.html#tymethod.transfer"},Object(r.mdx)("inlineCode",{parentName:"a"},"transfer")," method"),". It's useful to understand why it's important to use the ",Object(r.mdx)("inlineCode",{parentName:"p"},"transfer")," method in particular and how we'll be accessing it:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"The reason we'll be using it is to ensure our runtime has the same understanding of currency throughout the pallets\nit interacts with. The way that we ensure this is to use the ",Object(r.mdx)("inlineCode",{parentName:"p"},"Currency")," trait\nfrom ",Object(r.mdx)("inlineCode",{parentName:"p"},"frame_support"),".")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("p",{parentName:"li"},"Conveniently, it handles a\n",Object(r.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/latest/frame_support/traits/tokens/currency/trait.Currency.html#associatedtype.Balance"},Object(r.mdx)("inlineCode",{parentName:"a"},"Balance"))," type, making it compatible with ",Object(r.mdx)("inlineCode",{parentName:"p"},"BalanceOf")," type we created for ",Object(r.mdx)("inlineCode",{parentName:"p"},"kitty.price"),". Take a look at how the ",Object(r.mdx)("inlineCode",{parentName:"p"},"transfer"),"\nfunction we'll be using is structured (from the ",Object(r.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/latest/frame_support/traits/tokens/currency/trait.Currency.html#tymethod.transfer"},"Rust docs"),"):"))),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"fn transfer(\n    source: &AccountId,\n    dest: &AccountId,\n    value: Self::Balance,\n    existence_requirement: ExistenceRequirement\n) -> DispatchResult\n")),Object(r.mdx)("p",null,"Now we can make use of the ",Object(r.mdx)("inlineCode",{parentName:"p"},"Currency")," type in our pallet's ",Object(r.mdx)("inlineCode",{parentName:"p"},"Config")," trait and ",Object(r.mdx)("inlineCode",{parentName:"p"},"ExistenceRequirement")," ","\u2013"," that we\n",Object(r.mdx)("a",{parentName:"p",href:"/docs/tutorials/Kitties/Part%201/basic-setup#2-write-out-pallet_kitties-scaffold"},"initially started with in Part I"),"."),Object(r.mdx)("p",null,"Update the balances of both the caller of this function and the receiver, replacing ACTION #8:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"// Transfer the amount from buyer to seller\nT::Currency::transfer(&buyer, &seller, bid_price, ExistenceRequirement::KeepAlive)?;\n\n// Transfer the kitty from seller to buyer\nSelf::transfer_kitty_to(&kitty_id, &buyer)?;\n\n// Deposit relevant Event\nSelf::deposit_event(Event::Bought(buyer, seller, kitty_id, bid_price));\n")),Object(r.mdx)("h3",{id:"4-breed-kitties"},"4. Breed Kitties"),Object(r.mdx)("p",null,"The logic behind breeding two Kitties is to multiply each corresponding DNA segment from two Kitties,\nwhich will produce a new DNA sequence. Then, that DNA is used when minting a new Kitty. This helper function is already\nprovided for you in the template file for this section."),Object(r.mdx)("p",null,"Paste in the following to complete the ",Object(r.mdx)("inlineCode",{parentName:"p"},"breed_kitty")," function, replacing line ACTION #10:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"let new_dna = Self::breed_dna(&kid1, &kid2)?;\n")),Object(r.mdx)("p",null,"Now that we've used the user inputs of Kitty IDs and combined them to create a new unique Kitty ID, we can\nuse the ",Object(r.mdx)("inlineCode",{parentName:"p"},"mint()")," function to write that new Kitty to storage. Replace line ACTION #11:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"Self::mint(&sender, Some(new_dna), None)?;\n")),Object(r.mdx)("h3",{id:"5-genesis-configuration"},"5. Genesis configuration"),Object(r.mdx)("p",null,"The final step before our pallet is ready to be used is to set the genesis state of our storage items. We'll make use of\nFRAME's ",Object(r.mdx)("inlineCode",{parentName:"p"},"[pallet::genesis_config]")," to do this. Essentially, we're declaring what the Kitties object in storage contains\nin the genesis block. Copy the following code to replace ACTION #12: "),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},'// Our pallet\'s genesis configuration.\n#[pallet::genesis_config]\npub struct GenesisConfig<T: Config> {\n    pub kitties: Vec<(T::AccountId, [u8; 16], Gender)>,\n}\n\n// Required to implement default for GenesisConfig.\n#[cfg(feature = "std")]\nimpl<T: Config> Default for GenesisConfig<T> {\n    fn default() -> GenesisConfig<T> {\n        GenesisConfig { kitties: vec![] }\n    }\n}\n\n#[pallet::genesis_build]\nimpl<T: Config> GenesisBuild<T> for GenesisConfig<T> {\n    fn build(&self) {\n        // When building a kitty from genesis config, we require the dna and gender to be supplied.\n        for (acct, dna, gender) in &self.kitties {\n            let _ = <Pallet<T>>::mint(acct, Some(dna.clone()), Some(gender.clone()));\n        }\n    }\n}\n')),Object(r.mdx)("p",null,"To let our chain know about our pallet's genesis configuration, we need to modify the ",Object(r.mdx)("inlineCode",{parentName:"p"},"chain_spec.rs")," file in our project's ",Object(r.mdx)("inlineCode",{parentName:"p"},"node")," folder. Go to ",Object(r.mdx)("inlineCode",{parentName:"p"},"/node/src/chain_spec.rs")," and add the following inside the ",Object(r.mdx)("inlineCode",{parentName:"p"},"testnet_genesis")," function:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-rust"},"//-- snip\n        kitties: KittiesConfig {\n            kitties: vec![],\n        },\n//-- snip\n")),Object(r.mdx)("h3",{id:"6-update-runtimesrclibrs-and-interact-with-your-kitties"},"6. Update ",Object(r.mdx)("inlineCode",{parentName:"h3"},"runtime/src/lib.rs")," and interact with your Kitties"),Object(r.mdx)("p",null,"If you've completed all of the preceding parts and steps of this tutorial, you're\nall geared up to run your chain and start interacting with all the new capabilities of your Kitties pallet."),Object(r.mdx)("p",null,"Build and run your chain using the following commands:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-bash"},"cargo build --release\n./target/release/node-kitties --dev --tmp\n")),Object(r.mdx)("p",null,"Now check your work using the Polkadot-JS Apps UI just like ",Object(r.mdx)("a",{parentName:"p",href:"/docs/Tutorials/Kitties/Part%201/dispatchables-and-events#5-testing-with-polkadotjs-apps"},"we did in the previous part"),". Once your chain is running and connected to the PolkadotJS Apps UI, perform these manual checks:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Fund multiple users with tokens so they can all participate"),Object(r.mdx)("li",{parentName:"ul"},"Have each user create multiple Kitties"),Object(r.mdx)("li",{parentName:"ul"},"Try to transfer a Kitty from one user to another using the right and wrong owner"),Object(r.mdx)("li",{parentName:"ul"},"Try to set the price of a Kitty using the right and wrong owner"),Object(r.mdx)("li",{parentName:"ul"},"Buy a Kitty using an owner and another user"),Object(r.mdx)("li",{parentName:"ul"},"Use too little funds to purchase a Kitty"),Object(r.mdx)("li",{parentName:"ul"},"Overspend on the cost of the Kitty and ensure that the balance is reduced appropriately"),Object(r.mdx)("li",{parentName:"ul"},"Breed a Kitty and check that the new DNA is a mix of the old and new")),Object(r.mdx)("p",null,"After all of these actions, confirm that all users have the right number of Kitties, the total Kitty count is correct, and any other storage variables are correctly represented"),Object(r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.mdx)("div",{parentName:"div",className:"admonition-heading"},Object(r.mdx)("h5",{parentName:"div"},Object(r.mdx)("span",{parentName:"h5",className:"admonition-icon"},Object(r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Congratulations!")),Object(r.mdx)("div",{parentName:"div",className:"admonition-content"},Object(r.mdx)("p",{parentName:"div"},"You've successfully created the backend of a fully functional Substrate chain capable of creating and managing Substrate Kitties. It could also be abstracted to other NFT-like use cases. Most importantly, at this point in the tutorial you should have all the knowledge you need to start creating your own pallet logic and dispatchable functions."))),Object(r.mdx)("h2",{id:"next-steps"},"Next steps"),Object(r.mdx)("p",null,"Complete Part II of this tutorial to:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"Connect your chain to the front-end template"),Object(r.mdx)("li",{parentName:"ul"},"Customize the template using PolkadotJS API"),Object(r.mdx)("li",{parentName:"ul"},"Interact with kitty avatars using a custom front-end React app")))}d.isMDXComponent=!0}}]);