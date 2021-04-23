---
sidebar_position: 2
theme: 
code: 
---

# Primitive token mint

_ A simple thing you can do that'll get you asking all sorts of questions and hungry to learn more ... _

## Goal

Create a simple token mint pallet.

## Use cases

Give any account the ability to create a token supply in exchange for native token fee.

## Overview

This guide will step you through an effective way to mint a token by leveraging the primitive capabilities that [StorageMap](https://substrate.dev/rustdocs/v3.0.0/frame_support/storage/trait.StorageMap.html) gives us. To achieve this, this "primitive" approach uses the [blake2_128_concat](https://substrate.dev/docs/en/knowledgebase/runtime/storage#hashing-algorithms) `hasher` to map balances to account IDs, similar to how the [Balances pallet](https://substrate.dev/docs/en/knowledgebase/runtime/frame#balances) makes use of it to store and keep track of account balances.

> **Note:** this is a beginner recipe intended for novice Substrate developers looking to explore ways to create tokens in Substrate. This approach is not recommended best practice. Use this guide to learn how to improve upon your runtime logic's capabilities and code quality. See the **[Examples](#examples)** section for a practical implementations of this guide.

**Storage items:**

- `Balances: map hasher(blake2_128_concat) T::AccountId => u64;`

**Functions:**

- `init()`
- `transfer()`


## Steps

### 1. Setup your `Config` trait

Using the Node Template as a starting point, specify the types your pallet depends on and the [`Events`](https://substrate.dev/docs/en/knowledgebase/runtime/events) it emits:

```rust
// The configuration trait
pub trait Config: system::Config {
	type Event: From<Event<Self>> + Into<<Self as frame_system::Config>::Event>;
	type Balance: Member + Parameter + AtLeast32BitUnsigned + Default + Copy;
}
//--snip
pub enum Event<T: Config> {
	MintedNewSupply(T::AccountId),
	Transferred(T::AccountId, T::AccountId, T::Balance),
}
```

### 2. Declare your storage item `StorageMap`

This pallet only keeps track of the balance to account ID mapping, call it `BalanceToAccount`:

```rust
/* --snip-- */
	#[pallet::storage]
	#[pallet::getter(fn get_balance)]
	pub(super) type BalanceToAccount<T: Config> = StorageMap<
		_, 
		Blake2_128Concat, 
		T::AccountId, 
		T::Balance,
		ValueQuery
		>;
/* --snip-- */
```
### 3. Create your pallet’s functions

We can now bring our attention to creating the intended capabilities of our pallet. Create the following functions:

(i) `mint()`: Issue an amount of tokens from any origin.

```rust
/* --snip-- */
#[pallet::weight(10_000 + T::DbWeight::get().writes(1))]
		pub(super) fn mint(
			origin: OriginFor<T>,
			#[pallet::compact] amount: T::Balance
		) -> DispatchResultWithPostInfo {
		
			let sender = ensure_signed(origin)?;
		
			// Update storage.
			<BalanceToAccount<T>>::insert(&sender, amount);

			// Emit an event.
			Self::deposit_event(Event::MintedNewSupply(sender));
			
			// Return a successful DispatchResultWithPostInfo.
			Ok(().into())
		}
/* --snip-- */
```

(ii) `transfer()`: Allow minting account to transfer a given balance to another account.

```rust
pub(super) fn transfer(
			origin: OriginFor<T>,
			to: T::AccountId,
			#[pallet::compact] amount: T::Balance,
		) -> DispatchResultWithPostInfo {
			let sender = ensure_signed(origin)?;
			let sender_balance = Self::get_balance(&sender);
			let receiver_balance = Self::get_balance(&to);
/* --snip-- */
```

To calculate the new balances, use [`checked_sub`](https://substrate.dev/rustdocs/v3.0.0/primitive_types/struct.U128.html#method) (TODO: error handling) and once the new balances are calculated, write their values to storage and [deposit event](https://substrate.dev/rustdocs/v3.0.0/frame_system/pallet/struct.Pallet.html#method.deposit_event) to the current block.


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

If `checked_sub()` returns `None`, the operation caused an overflow and throws an error. 
The `mint` function takes in an amount to mint which is *not good practice*. There are several ways to specify the amount this pallet can mint including:
- Using the `config` extension to set a value in `GenesisConfig` from `chain_spec.rs`. See this [**Knowledgebase**](https://substrate.dev/docs/en/knowledgebase/runtime/storage#config) article as well as **this guide** to learn more about this.

- Defining it inside the runtime. Have a look at the guide on how to do that in this beginner guide on **Instantiable Pallets.**

Learn about how these each have their trade-offs in terms of storage costs **[(Knowledgebase)](https://substrate.dev/docs/en/knowledgebase/runtime/storage#storage-value)**.

**A couple things to note:**

- **Weights.** All the weights were set to 10_000 in the above code snippets. Learn more about weight configuration in this [beginner guide on weights](./basic-tx-weight-calculations).

- **Origins.** One assumption this recipe makes is that the origin will always be the sudo user. Origins are are powerful in Substrate. Here’s [a recipe on using origins](./origins-beginner).

- **Overall capabilities.** In order to make use of this recipe, other functions would have to be added to handle things like errors, keeping track of storage and charging transaction fees. For example, `init()`just resets the balance every time it is called which is not very useful. In addition, the token supply is purely a `Vec<u64>` and provides no extensible capabilities. In other recipes, we'll see how to make use of FRAME's `pallet_assets` as well as other ways to mint new tokens and how to make use of them.

### 4. Include your pallet in your runtime

Refer to [this guide](./basic-pallet-integration) if you’re not yet familiar with this procedure.

## Examples
- [mint-token pallet](/../examples/template-node/pallets/mint-token/src/lib.rs)
- [reward-coin pallet](/../examples/template-node/pallets/reward-coin/src/lib.rs) 
## Related material

- Basic error checking 
- Basic weight configuration
- Using instantiable pallets
