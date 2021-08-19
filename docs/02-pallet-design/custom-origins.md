---
sidebar_position: 9
---

# Create a simple custom origin 

_Rudimentary identity authentication for a FRAME pallets._
## Goal

Create a custom origin inside a pallet and enforce it in a signed dispatchable.

## Use cases

Implement a dispatchable that can only be called by the origin defined from another pallet.

## Overview

_A brief overview of why this is a useful guide and what concepts it uses. This is a good place to link to other devhub ressources, including other guides, aiming to give the reader the learning background required to understand how this guide can be useful to them._

## Steps
### 1. Add an Orgin type to your pallet's `Config` trait

This type will be used when you implement your pallet for your runtime:

```rust
pub trait Config: frame_system::Config {
    type Origin: From<Origin>;
    type SpecialAccountId: Get<Self::AccountId>;
}
```

### 2. Create a custom enum of type Origin

```rust
// Our origin for this pallet.
#[derive(PartialEq, Eq, Clone, sp_runtime::RuntimeDebug, codec::Encode, codec::Decode)]
pub enum Origin {

	SpecialOrigin,
}
```

### 3. Create a struct and implement `try_origin` on it

```rust
/// Helper that other pallets may use to check that a dispatch is from SpecialOrigin.
pub struct EnsureSpecialOrigin;
impl<
    O: Into<Result<Origin, O>> + From<Origin>> frame_support::traits::EnsureOrigin<O> for EnsureSpecialOrigin {
	type Success = ();
	fn try_origin(o: O) -> Result<Self::Success, O> {
		o.into().and_then(|o| match o {
			Origin::SpecialOrigin => Ok(()),
		})
	}
}
```

### 4. Ensure origin in dispatchable

```rust
pub fn special_function(
    origin, 
    call: Box<<T as Trait>::Call>
    ) -> DispatchResultWithPostInfo {
			let who = ensure_signed(origin)?;
			ensure!(who == T::SpecialAccountId::get(), DispatchError::BadOrigin);
			let res = call.dispatch(Origin::SpecialOrigin.into());
			Self::deposit_event(Event::Dumdid(res.map(|_| ()).map_err(|e| e.error)));
			Ok(())
		}
```

### 5. Use this origin in another pallet

#### i. Config trait

Your other pallet will need to specify an origin type in its configuration trait:

```rust
pub trait Config: frame_system::Config {
	type PalletOrigin: EnsureOrigin<Self::Origin>;
}
```

#### ii. Inside a dispatchable 

```rust
pub fn special_function_here(origin) -> DispatchResult {
			T::PalletOrigin::ensure_origin(origin)?;
			Self::deposit_event(Event::Success);
			Ok(())
		}
```

### 6. Define the origins inside `runtime/src/lib.rs`

Make sure you import your custom pallet if relevant:

```rust
use my_custom_pallet
```

Implement your pallet for your runtime, including custom types:

```rust
// Define your account Id, make sure to store your key pairs.
frame_support::ord_parameter_types! {
	// `subkey inspect //SpecialAccountId`
	pub const SpecialAccountId: AccountId = AccountId::from(hex_literal::hex!["todo"]);
}

impl my_custom_pallet::Config for Runtime {
	type Event = Event;
	type Call = Call;
	type SpecialAccountId = SpecialAccountId;
	type Origin = Origin;
}
```

## Examples

- Custom `RawOrigin` enum in FRAME'S [Collective pallet](https://substrate.dev/rustdocs/latest/src/pallet_collective/lib.rs.html#158)
- `EnsureMember` from FRAME's [Collective pallet](https://substrate.dev/rustdocs/latest/src/pallet_collective/lib.rs.html#878)

- Different origins in the [Membership pallet](https://github.com/paritytech/substrate/blob/master/frame/membership/src/lib.rs#L40-L53) 

## Resources

- [Subkey](https://substrate.dev/docs/en/knowledgebase/integrate/subkey)

