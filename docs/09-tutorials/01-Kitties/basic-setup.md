---
sidebar_position: 2
keywords: pallet design, intermediate, runtime
---

# Part I: Basic set-up

:::note
This tutorial assumes that you have already installed the prerequisites for building with Substrate on your machine.
If you haven't already, head over to our [installation guide][installation].
:::

## Overview

Before we can start making Kitties, we first need to do a little groundwork. This part covers the basic patterns involved with using the Substrate Node Template to set up a custom pallet and include a simple storage item.

## Learning outcomes

:arrow_right: Renaming a Substrate Node Template for a custom project.

:arrow_right: Basic patterns for building and running a Substrate node.

:arrow_right: Create a storage item to keep track of a single `u64` value.

## Steps

### 1. Get started with the node template

The [Substrate Node Template][substrate-node-template] provides us with an "out-of-the-box" blockchain node. Our biggest advantage
in using it are that both networking and consensus layers are already built and all we need to focus on is building out
our runtime logic. Before we get there, we need to set-up our project.

We'll use a CLI tool to easily rename our node template.

In the root directory of your local workspace, run the following command:

```bash
kickstart https://github.com/sacha-l/kickstart-substrate
```

Rename accordingly:

`kitties` - as the name of our node
`mykitties` - as the name of your pallet

This will create a directory called `substrate-node-template` with a copy of the [Substrate Node Template][substrate-node-template] containing the name changes that correspond our template node, runtime and pallet.

Open the `substrate-node-template` directory in your favorite code editor and rename it to `kitties-tutorial` (or whatever you like). 

Notice the directories that the `kickstart` command modified:

- **`node/`** - This contains all the logic that allows your node to interact with your runtime and RPC clients.
- **`pallets/`** - Here's where all your custom pallets live.
- **`runtime/`** - This is where all pallets (both custom "internal" and "external" ones) are aggregated and implemented for the chain's runtime.

Let's build our kitties node. It's normal if this command takes a little while depending on your machine &mdash; it's building 
a whole bunch of crates from the Substrate crates and libraries:

```bash
cargo +nightly build --release
```

Now that you've built your node, launch it in development mode to make sure it works:

```bash
./target/release/kitties-node --tmp --dev
```

You should see blocks being created in your terminal.

### 2. Write out `pallet_kitties`

We'll be spending most of this tutorial in the `pallets` directory of our template node.
Let's take a glance at the folder structure in our workspace:

```bash
kitties-tutorial           <--  The name of our project directory
|
+-- node
|
+-- pallets
|   |
|   +-- kitties           
|       |
|       +-- Cargo.toml     
|       |
|       +-- src
|           |
|           +-- lib.rs     <-- 2. Remove contents
|           |
|           +-- mock.rs    <-- 3. Remove file
|           |
|           +-- tests.rs   <-- 4. Remove file
|
+-- Cargo.toml              
```

> You can go ahead and remove `mock.rs` and `tests.rs`. **We won't be learning about
> using these in this tutorial. Have a look at [this how-to guide](/docs/testing/test-transfer) if
> you're curious to learn how testing works.**

[Pallets][pallets-kb] in Substrate are used to define runtime logic. In our case, we'll be creating a single pallet that manages all of the
logic of our Substrate Kitties application.

Let's lay out the basic structure of our pallet by outlining the parts inside the `pallets/kitties/src/lib.rs`. 

:::note
Our pallet's directory `pallets/kitties/` is not the same as our pallet's name. The name of our pallet as Cargo understands it is `pallet-kitties`.
:::

Every FRAME pallet has:

- A set of `frame_support` and `frame_system` dependencies.
- Required [attribute macros][macros-kb] (i.e. configuration traits, storage items and function calls).

:::note
We'll be updating additional dependencies as we progress through the next parts of this tutorial.
:::

Here's the most bare-bones version of the Kitties pallet we will be building in this tutorial. It contains the starting point for 
adding code for the next sections of this tutorial, with comments marked with "TODO" to indicate code we will be writing later, and 
"ACTION" to indicate code that will be written in the current part of the tutorial.

Paste it in `/pallets/kitties/src/lib.rs`: 

```rust
#![cfg_attr(not(feature = "std"), no_std)]

pub use pallet::*;

#[frame_support::pallet]
pub mod pallet {
    use frame_support::{sp_runtime::traits::{Hash, Zero},
                        dispatch::{DispatchResultWithPostInfo, DispatchResult}, 
                        traits::{Currency, ExistenceRequirement, Randomness},
                        pallet_prelude::*};
    use frame_system::pallet_prelude::*;
    use sp_core::H256;

    // TODO Part II: Struct for holding Kitty information.

    // TODO Part II: Enum and implementation to handle Gender type in Kitty struct.

    #[pallet::pallet]
    #[pallet::generate_store(trait Store)]
    pub struct Pallet<T>(_);

    /// Configure the pallet by specifying the parameters and types it depends on.
    #[pallet::config]
    pub trait Config: pallet_balances::Config + frame_system::Config {
        /// Because this pallet emits events, it depends on the runtime's definition of an event.
        type Event: From<Event<Self>> + IsType<<Self as frame_system::Config>::Event>;

        // TODO Part II: The type of Random we want to specify for runtime.
    }

    // Errors.
    #[pallet::error]
    pub enum Error<T> {
        // TODO Part III
    }

    #[pallet::event]
    #[pallet::metadata(T::AccountId = "AccountId")]
    #[pallet::generate_deposit(pub(super) fn deposit_event)]
    pub enum Event<T: Config> {
        // TODO Part III
    }

    // ACTION: Storage item to keep track of all Kitties.

    // TODO Part II: Remaining storage items.

    // TODO Part III: Our pallet's genesis configuration.

    #[pallet::call]
    impl<T: Config> Pallet<T> {
        
        // TODO Part III: create_kitty
        
        // TODO Part III: set_price
        
        // TODO Part III: transfer

        // TODO Part III: buy_kitty
        
        // TODO Part III: breed_kitty
    }

    // TODO Parts II: helper function for Kitty struct

    impl<T: Config> Pallet<T> {
        // TODO Part III: helper functions for dispatchable functions
        
        // TODO: increment_nonce, random_hash, mint, transfer_from
        
    }
}
```

:::tip Your turn!
Copy over the bare-bones of the Kitties pallet into `kitties/src/lib.rs`.

**Hint:** Each part of this tutorial has a file with code containing comments to guide you to complete each part.
Download the [template code here][template-code] locally and use it to help you progress through each step!
:::

Run the following command to build and launch our chain. This can take a little while depending on your machine:

```bash
cargo +nightly build --release
```

Get an error about dependencies? That's normal! Our pallet structure is using FRAME's `pallet-balances` and `sp-io` 
but these aren't part of the node template we used so we must specify them ourselves. In `pallets/kitties/Cargo.toml`, 
add the following:

```TOML
[dependencies.sp-core]
default-features = false
git = 'https://github.com/paritytech/substrate.git'
tag = 'monthly-2021-07'
version = '3.0.0'

[dependencies.pallet-balances]
default-features = false
git = 'https://github.com/paritytech/substrate.git'
tag = 'monthly-2021-07'
version = '3.0.0'
```

Now run `cargo +nightly build --release` again to make sure it builds without errors.

:::note
You'll notice the Rust compiler giving you warnings about unused imports. That's fine! Just ignore them &mdash; we're going to
be using those imports in the later parts of the tutorial.
:::

In the next step we will include the first storage item our Kitty application will require.

### 3. Include a storage item to track all Kitties

Let's start by adding the most simple logic we can to our runtime: a function which stores a variable in runtime.

To do this we'll use [`StorageValue`][storagevalue-rustdocs] from Substrate's [storage API][storage-api-rustdocs] which is a trait that depends
on the storage macro.

All that means for our purposes is that for any storage item we want to declare, we must include the `#[pallet::storage]`  macro beforehand. Using `StorageValue` as an example, this would look like this:

```rust
#[pallet::storage]
#[pallet::getter(fn get_storage_value)]
pub(super) type SomeStorageValue <T: Config> = StorageValue <
    _,
    u64,
    ValueQuery,
>;
```

:::tip Your turn!
In `kitties/src/lib.rs`, copy the code snippet from step 2 and replace the ACTION line with: 

```
    #[pallet::storage]
    #[pallet::getter(fn all_kitties_count)]
    pub(super) type AllKittiesCount<T: Config> = StorageValue<_, u64, ValueQuery>;
```
:::

### 4. Check that your pallet builds

From the previous step, your pallet should contain a storage item called `AllKittiesCount` which keeps track of a
single `u64` value. As part of the basic setup, we're doing great!

:::info
As mentioned in the [overview of this tutorial series](overview),
you'll be implementing a total of 9 storage items which you'll discover as you
write out your pallet's logic in the next parts.
:::

Before we move on, let's make sure everything compiles. We don't need to rebuild our entire node each time we update our pallet.
Instead, we can use a command that only builds our pallet. From inside your pallet directory, run the following:

```bash
cargo build -p pallet-kitties
```

Does your pallet compile without error? Well done if it does! If not, go back and check that all the macros are in place and that you've included the
FRAME dependencies.

:::note Congratulations!
You've completed the first part of this series. At this stage, you've learnt the various patterns for:

- Customizing the Substrate node template and including a custom pallet.
- Building a Substrate chain and checking that a target pallet compiles.
- Declaring and using a `u64` storage item.
:::

## Next steps

- Writing a struct in a `StorageMap` to store details about our Kitties
- Using the Randomness trait to create unique Kitties
- Creating our pallet's remaining storage items

[installation]: https://substrate.dev/docs/en/knowledgebase/getting-started/
[substrate-node-template]: https://github.com/substrate-developer-hub/substrate-node-template
[pallets-kb]: https://substrate.dev/docs/en/knowledgebase/runtime/pallets
[macros-kb]: https://substrate.dev/docs/en/knowledgebase/runtime/macros#frame-v2-macros-and-attributes
[storagevalue-rustdocs]: https://substrate.dev/rustdocs/v3.0.0/frame_support/storage/trait.StorageValue.html
[storage-api-rustdocs]: https://substrate.dev/rustdocs/v3.0.0/frame_support/storage/index.html
[template-code]: https://github.com/substrate-developer-hub/substrate-how-to-guides/tree/main/static/code/kitties-tutorial
