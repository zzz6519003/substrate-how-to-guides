# Basic pallet integration
- [Goal](#goal)
- [Use cases](#use-cases)
- [Overview](#overview)
- [Steps](#steps)
  * [1. Import your pallet](#1-import-your-pallet)
  * [2. Configure its runtime implementation](#2-configure-its-runtime-implementation)
  * [3. Include it in your runtime](#3-include-it-in-your-runtime)
  * [4. Indicate your local dependency](#4-indicate-your-local-dependency)
  * [5. Include your pallet in `std`](#5-include-your-pallet-in--std-)
- [Examples](#examples)
- [Related material](#related-material)

## Goal

Learn the steps needed to integrate a simple pallet to your runtime.

## Use cases

- Including a pallet that only implements Event and Call into a runtime

## Overview

As developers to new frameworks, we often get stuck on things like setting up dependencies correctly. This guide is an extension to [the beginner tutorial](https://substrate.dev/docs/en/tutorials/add-a-pallet/configure-a-pallet), intended as a recipe for a more general approach for things to remember when integrating a pallet to runtime.

## Steps

### 1. Import your pallet
In `runtime/lib.rs`:

```rust
/// Import your pallet.
pub use pallet_something;
```

### 2. Configure its runtime implementation

```rust
/// Configure your pallet.
impl pallet_something::Trait for Runtime {
	type Event = Event;
	type Call = Call;
}
```

### 3. Include it in your runtime

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

### 4. Indicate your local dependency 
In `Cargo.toml`:

```rust
/* --snip-- */
# local dependencies
pallet-something = { path = '../pallets/pallet-something', default-features = false, version = '3.0.0' }
/* --snip-- */
```

### 5. Include your pallet in `std`

```rust
std = [
'pallet-something/std',
/* --snip-- */
]
```

## Examples

1. Add a Pallet to Your Runtime ([**tutorial**](https://substrate.dev/docs/en/tutorials/add-a-pallet/import-a-pallet))

## Related material

- Integrating the staking pallet in your runtime (**Recipe**)
- Mock runtime (**[Knowledge base](https://substrate.dev/docs/en/knowledgebase/runtime/tests#mock-runtime-environment)**)