---
sidebar_position: 1
---

# Basic pallet integration

_"I haven't quite yet internalized the basic process of integrating a pallet in my runtime...Ugh!" Totally get it, it's OK, you won't even need this way sooner than you know._

[![Try on playground](https://img.shields.io/badge/Playground-Node_Template-brightgreen?logo=Parity%20Substrate)](https://playground.substrate.dev/?deploy=node-template)

## Goal

Learn the steps for integrating a pallet to your runtime.

## Use cases

Including a pallet that implements Event and Call into a runtime.

## Overview

As developers to new frameworks, we often get stuck on things like setting up dependencies correctly. This guide is an extension to the [Add a Pallet to Your Runtime tutorial][add-a-pallet-tutorial], intended for new developers looking to quickly integrate a pallet to their runtime.

## Steps

### 1. Import your pallet

In `runtime/lib.rs`:

```rust
// Import your pallet.
pub use pallet_something;
```

### 2. Include it in your runtime 

First, configure its runtime implementation:

```rust
// Configure your pallet.
impl pallet_something::Config for Runtime {
	type Event = Event;
	type Call = Call;
}
```

Then, specify all items that your pallet exposes to the runtime: 

```rust
construct_runtime!(
	pub enum Runtime where
		Block = Block,
		NodeBlock = opaque::Block,
		UncheckedExtrinsic = UncheckedExtrinsic
	{
/* --snip-- */
		Something: pallet_something::{Module, Call, Storage, Event<T>},
/* --snip-- */
	}
);
```

### 4. Update `Cargo.toml`

In `Cargo.toml`, include your pallet as a local dependency and include it in `std`:

```rust
/* --snip-- */
# local dependencies
pallet-something = { path = '../pallets/pallet-something', default-features = false, version = '3.0.0' }
/* --snip-- */
std = [
'pallet-something/std',
/* --snip-- */
]
```

## Examples

- [Reward token in FRAME governance node][playground-gov].

## Related material

- [Mock runtime][mock-runtime] 

[add-a-pallet-tutorial]: https://substrate.dev/docs/en/tutorials/add-a-pallet/import-a-pallet
[playground-gov]: playground.substrate.dev
[mock-runtime]: https://substrate.dev/docs/en/knowledgebase/runtime/tests#mock-runtime-environment