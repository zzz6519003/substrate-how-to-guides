# Basic instantiable pallets

- [Goal](#goal)
- [Use cases](#use-cases)
- [Overview](#overview)
- [Steps](#steps)
  * [1. Implement the `Instance` type](#1-implement-the--instance--type)
  * [2. Configure your runtime](#2-configure-your-runtime)
- [Examples](#examples)
- [Related material](#related-material)

## Goal

- Understand why it can be desirable to have multiple instances of the same pallet in a runtime
- Learn how to configure different constant variable types for two instances of the same pallet

## Use cases

1. Token chain hosts two independent cryptocurrencies
2. Governance has two (or more) houses which act similarly internally
3. A social network chain that maintains different treasuries.

## Overview

The premise of instantiable pallets is to provide separate storage items for a runtime that contains more than one reference to the same pallet. Using **instantiable pallets (Knowledge base)** is useful in cases where you may need to reuse the logic provided by a single pallet. This recipe guides you through how to create two instances of the same pallet and how to configure their capabilities. The pallet this guide is using is a simple token minting pallet.

## Steps

### 1. Implement the `Instance` type
Instantiable pallets must call the `decl_storage!` macro so that the `Instance` type is created.

    Add a Generic Type for `Instance` in the Config trait, Event type, and Store trait. Learn more about how Generic Types work in Rust [here](https://doc.rust-lang.org/book/ch10-01-syntax.html). The code snippet below shows the modifications required for our pallet's Config and Store traits:

    ```rust
    pub trait Config<I: Instance>: frame_system::Config {
    	type Event: From<Event<Self>> + Into<<Self as frame_system::Config>::Event>;
    }
    /// Include the I: Instance type parameter in storage declaration
    decl_storage! {
    	trait Store for Module<T: Config<I>, I: Instance> as MintToken {
    /* --snip-- */
    ```

### 2. Configure your runtime

Include two instances of `mint_token` in `runtime/lib.rs`:

```rust
/* --snip-- */
// Instance1 of mint_token
impl mint_token::Config<mint_token::Instance1> for Runtime {
	type Event = Event;
}

// Instance2 of mint_token
impl mint_token::Config<mint_token::Instance2> for Runtime {
	type Event = Event;
}

/* --snip-- */
MintToken1: mint_token::<Instance1>::{Module, Call, Storage, Event<T>},
MintToken2: mint_token::<Instance2>::{Module, Call, Storage, Event<T>},
/* --snip-- */
```

## Examples

- A social network chain for membership groups that maintains 2 separate Treasuries: one to collect slashing and fees and another that collects membership fees to fund proposals for member activities (See __).
- An on-chain governance system with two specialized chambers (See __)

## Related material

- Instantiable pallets (Knowledge base)
- Implement bicameral system of governance (Recipe)