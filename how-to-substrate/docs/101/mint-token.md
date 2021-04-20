---
sidebar_position: 2
---

# Primitive token mint
_ A simple thing you can do that'll get you asking all sorts of questions and hungry to learn more ... _ 

## Goal

Create a simple token mint pallet from any origin.

## Use cases

Give any user the ability to create a token supply in exchange for native token fee.

## Overview

**Storage items:** 

- `TotalSupply: u64;`
- `Balances: map hasher(blake2_128_concat) T::AccountId => u64;`

**Functions:**

- `init()`
- `transfer()`

This guide will step you through an effective way to mint a token by leveraging the primitive capabilities that [StorageMap](https://substrate.dev/rustdocs/v3.0.0/frame_support/storage/trait.StorageMap.html) **(Rust docs)** gives us. To achieve this, this technique uses an `AccountId` to `u64` mapping provided by the [blake2_128_concat](https://substrate.dev/docs/en/knowledgebase/runtime/storage#hashing-algorithms)  `hasher`, similar to how the [Balances Pallet](https://substrate.dev/docs/en/knowledgebase/runtime/frame#balances) **(Rust docs)** makes use of it to store and keep track of account balances.

> **Note:** this is a beginner recipe intended for novice Substrate developers looking to explore ways to create tokens in Substrate. Although effective in some use cases, this technique is **not** **recommended best practice**. Use this recipe to learn how to improve upon your runtime logic's capabilities and code quality. See the **Examples** section for ways in which this technique could be useful.

## Steps

### 1. Setup your Config trait

Specify that this pallet will only emit [`Events`](https://substrate.dev/docs/en/knowledgebase/runtime/events):

```rust
// The configuration trait
pub trait Config: system::Config {
	type Event: From<Event<Self>> + Into<<Self as frame_system::Config>::Event>;
}
```

### 2. Declare your pallets Traits

- `Balances` will be a storage item which maps `AccountIds` `u64` to account balances.
- `TotalSupply` will initialize the hard-coded supply and will be the storage item that keeps track of it.

Define these storage items in `decl_storage!` which we will later use in the functions we create in `decl_module!`. 

```rust
// Declaring storage items
/* --snip-- */
type Supply = u64;
TotalSupply: Supply = 21000000; 
Balances: map hasher(blake2_128_concat) T::AccountId => u64;
/* --snip-- */
```

> **Note:** There's more than one way we could improve the declaration of `TotalSupply`. Instead of hard-coding it we could have the user specify the amount they wish to mint by writing a function that would write to storage each time it is called. Other ways to declare the value of `TotalSupply` in this context include:

Using the `config` extension to set a value in `GenesisConfig` from `chain_spec.rs`. See this [**Knowledgebase**](https://substrate.dev/docs/en/knowledgebase/runtime/storage#config) article as well as **this recipe (Recipe)** to learn about how this works.

Defining it inside the runtime. Have a look at the guide on how to do that in this beginner recipe on **Instantiable Pallets (Recipe).** 

Learn about how these each have their trade-offs in terms of storage costs **[(Knowledgebase)](https://substrate.dev/docs/en/knowledgebase/runtime/storage#storage-value)**.

### 3. Create your pallet’s functions

We can now bring our attention to creating the intended capabilities of our pallet. We need (1) a way to initialize the supply to the account calling an extrinsic from this pallet and (2) a way for that account to transfer to other accounts.

Create these functions in `decl_module!`.

(i) `init()`: to allow the origin to initialize a token supply to their account. 

```rust
/* --snip-- */
/// Initializes the token and
/// transfers the total_supply amout to the caller
#[weight = 10_000]
fn init(origin) -> DispatchResult {
	// check the account initializing the token mint is signed
	let sender = ensure_signed(origin)?;
	// send the total supply created to the origin account
	<Balances<T>>::insert(sender, TotalSupply::get());
	Ok(())
}
/* --snip-- */
```

(ii) `transfer()`: to allow the origin to make a transfer to another account

Use the following methods to set values for `sender`, `sender_balance` and `receiver_balance`:

- [`ensure_signed`](https://substrate.dev/rustdocs/v3.0.0/frame_system/fn.ensure_signed.html) to validate the origin signing this transaction.
- [`get()`](https://substrate.dev/rustdocs/v3.0.0/frame_support/storage/trait.StorageValue.html#tymethod.get) to load the value from storage.

```rust
/* --snip-- */
/// Transfer tokens from one account to another
		#[weight = 10_000]
		fn transfer(_origin, to: T::AccountId, value: u64) -> DispatchResult {
			let sender = ensure_signed(_origin)?;
			let sender_balance = Balances::<T>::get(&sender);
			let receiver_balance = Balances::<T>::get(&to);
/* --snip-- */
```

Now calculate the new balances for both the sender and receiver before making a call to storage:

1. Calculate the new balance using [`checked_sub`](https://substrate.dev/rustdocs/v3.0.0/primitive_types/struct.U128.html#method.checked_sub) and `ok_or()` to make sure this operation won't result in overflow.
2. Update the new balance using `checked_add` and `expect()` to check that the receiving address can hold the new balance.
3. Write the new balance values to storage.
4. [Deposit event](https://substrate.dev/rustdocs/v3.0.0/frame_system/pallet/struct.Pallet.html#method.deposit_event) to the current block.

```rust
/* --snip-- */			
			// Calculate new balances
			let updated_from_balance = sender_balance.checked_sub(value).ok_or(<Error<T>>::InsufficientFunds)?;
			let updated_to_balance = receiver_balance.checked_add(value).expect("Entire supply fits in u64, qed");

			// Write new balances to storage
			<Balances<T>>::insert(&sender, updated_from_balance);
			<Balances<T>>::insert(&to, updated_to_balance);
			
			Self::deposit_event(RawEvent::Transfer(sender, to, value));
			Ok(())
		}
/* --snip-- */
```

If `checked_sub()` returns `None`, the operation caused an overflow and throws an error. For a more elaborate guide on error handling, check out this **recipe on Error checking (Recipe)**.

**A couple things to note:** 

- **Weights.** All the weights were set to 10_000 in the above code snippets. Learn more about weight configuration in this [beginner guide on weights](./basic-tx-weight-calculations). 

- **Origins.** One assumption this recipe makes is that the origin will always be the sudo user. Origins are are powerful in Substrate. Here’s [a recipe on using origins](./origins-beginner).

- **Overall capabilities.** In order to make use of this recipe, other functions would have to be added to handle things like errors, keeping track of storage and charging transaction fees. For example, `init()`just resets the balance every time it is called which is not very useful. In addition, the token supply is purely a `Vec<u64>` and provides no extensible capabilities. In other recipes, we'll see how to make use of FRAME's `pallet_assets` as well as other ways to mint new tokens and how to make use of them.

### 4. Include your pallet in your runtime

Refer to [this guide](./basic-pallet-integration) if you’re not yet familiar with this procedure.

## Examples

For the purposes of the following examples, we'll refer to the pallet created in this guide as the `token_mint` pallet.

1. **Use this recipe to give a fixed amount of tokens every time a user enters a valid coupon code.** 
    - Create the `token_mint` pallet that contains the two functions from this guide, `init()` and `transfer()`
    - In a custom pallet, let's call it `coupon_pallet`, create some logic which handles the verification of a special code
    - This can be achieved by having its storage keep track of a `Vec<32>` of coupon codes that only a special type of origin can update as they become used
    - All `coupon_pallet` does is provide a function, let's call it `fn verify_coupon()`, which gives the function caller the ability to insert their coupon with a deposit. The function checks for it in the `coupon_pallet` storage: if it exists, it calls the `token_mint::init()` function we saw in this guide, issuing the specified total supply and reimburses the deposit. If not, it keeps the deposit and the transaction is cancelled.
    - To make the `AccountIds` handle the cumulation of points, we can remove the `checked_add` from the transfer function
    - Querying `.balances` from the `token_mint`pallet's extrinsic will provide the user with their new tokens
2. **Give any user the ability to create a token supply for a fee to be used as a means of payment in a game arena.**
    - Create the `token_mint` pallet, including the `init()` and `transfer()` functions
    - Create another pallet, called `arena_token_mint` with a function that:
        - allows a user to request an amount of "arena tokens"
        - calculates a fee according to the amount requested
        - charges the user
        - makes an `init()`call to `token_mint`
    - Add error checking
    - Assign the `arena_token_mint` pallet to the currency for your game arena set of pallets

## Related material

- Basic cooking with the Assets pallet **(Recipe)**
- Error checking **(Recipe)**
- Basic weight configuration **(Recipe)**
- Using instantiable pallets **(Recipe)**
- The Currency Trait **(Recipe)**