---
sidebar_position: 9
---

# How to create and use a custom origin 

_The guide's intentions should be clear by just reading the title._

## Goal

Define and use a custom origin.

## Use cases

_What practical use cases can this guide be applied to? This can be general, e.g. "implementing a second currency for users to pay fees in" or specific, for e.g. "a runtime migration from a `Vec<u32>` to SomeStruct ". It is likely that the more advanced the guide, the more specific its use cases will be. If more than one, bullet list. Otherwise, one phrase._

## Overview

_A brief overview of why this is a useful guide and what concepts it uses. This is a good place to link to other devhub ressources, including other guides, aiming to give the reader the learning background required to understand how this guide can be useful to them._

## Steps

### 1. Add an Orgin type to your pallet's `Config` trait

```rust
pub trait Config: frame_system::Config {
    type Origin: From<Origin>;
}
```

### 2. Create a custom enum of type Origin

```rust
#[derive(PartialEq, Eq, Clone, sp_runtime::RuntimeDebug, codec::Encode, codec::Decode)]
pub enum Origin {
	Dumbo,
}
```

### 3. Create a struct and implement `try_origin` on it

```rust
/// Helper that other pallets may use to check that a dispatch is from Dumbo.
pub struct EnsureDumbo;
impl<
    O: Into<Result<Origin, O>> + From<Origin>> frame_support::traits::EnsureOrigin<O> for EnsureDumbo {
	type Success = ();
	fn try_origin(o: O) -> Result<Self::Success, O> {
		o.into().and_then(|o| match o {
			Origin::Dumbo => Ok(()),
		})
	}
}
```

### 4. Ensure orgin in dispatchable

```rust
pub fn proxy_dumbo(origin, call: Box<<T as Trait>::Call>) -> dispatch::DispatchResult {
			let who = ensure_signed(origin)?;
			frame_support::ensure!(who == T::DumboAccountId::get(), sp_runtime::DispatchError::BadOrigin);
			let res = call.dispatch(Origin::Dumbo.into());
			Self::deposit_event(Event::Dumdid(res.map(|_| ()).map_err(|e| e.error)));
			Ok(())
		}
```

### 5. Use this origin in another pallet

#### i. Config trait

```rust
pub trait Config: frame_system::Config {
	type DumboOrigin: frame_support::traits::EnsureOrigin<Self::Origin>;
}
```

#### ii. Inside a dispatchable 
```rust
pub fn dumbo_wants_peanuts(origin) -> dispatch::DispatchResult {
			T::DumboOrigin::ensure_origin(origin)?;
			Self::deposit_event(Event::DumboWantsPeanuts);
			Ok(())
		}
```

### 6. Define the origins inside `runtime/src/lib.rs`
--

_What are the steps that will be taken to achieve the goal? Each step should be action driven, with little description, minimal fluff,
linking to other docs if needed. Code snippets can help illustrate the steps but should not take over the focus&mdash;i.e "how do I do this", not "what do I do"._

## Examples

_Code-based examples that make use of this guide. This shows at least one reference of what this guide covers with a working example.This could be a reference to a Playground codebase instance, existing Substrate code or custom code that lives in the how-to guide repo._

## Resources

_A bulleted list of links to similar guides; other devhub ressources; and related material. See options below._
