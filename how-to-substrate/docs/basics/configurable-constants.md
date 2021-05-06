---
sidebar_position: 1
---

# Configure a custom constant

_The basics for defining a constant in your runtime._

## Goal

Define a runtime constant value that becomes reset on `on_finalize`.

## Use cases

Use a constant to keep track of the amount of times a function is called.

## Overview

Declaring a constant value in a runtime is a useful tool to either define fixed values or define values that change dynamically according to some factor(s). This guide steps through the process of defining a value for a runtime using a pallet that has functions to do manipulate the value over time.

This guide makes use of:

- [`Get`][get-trait-rustdocs]
- [`#[pallet::extra_constants]`][extra-constants-rustdocs]

## Steps

### 1. Define the constants in your pallet

`MaxAddend` will be the value displayed in metadata and `ClearFrequency` keeps track of the block numbers and will be used to define how frequently `MaxAddend` gets reset:

```rust
#[pallet::config]
	pub trait Config: frame_system::Config {
        type Event: From<Event<Self>> + IsType<<Self as frame_system::Config>::Event>;

		#[pallet::constant] // put the constant in metadata
        /// Maximum amount added per invocation
        type MaxAddend: Get<u32>;

        /// Frequency with which the stored value is deleted
        type ClearFrequency: Get<Self::BlockNumber>;
	}
```

### 2. Declare `MaxAddend` and `ClearFrequency` in Storage

Using the storage attribute macro:

```rust

#[pallet::storage]
	pub(super) type MaxAddend<T> = StorageValue<_, u32>;

#[pallet::storage]
	pub(super) type ClearFrequency<T> = StorageValue<_, T::BlockNumber>;

```

```rust
// Extrinsics callable from outside the runtime.
	#[pallet::call]
	impl<T: Config> Pallet<T> {
		#[pallet::weight(1_000)]
		pub(super) fn mint(
			origin: OriginFor<T>,
			beneficiary: T::AccountId,
			#[pallet::compact] amount: T::Balance,
		) -> DispatchResultWithPostInfo {
```

### 3. Configure `on_finalize`

`SingleValue` is set to 0 every `ClearFrequency` number of blocks in the `on_finalize` function that runs at the end of blocks execution.

```rust
#[pallet::hooks]
	impl<T: Config> Hooks<BlockNumberFor<T>> for Pallet<T> {

        fn on_finalize(n: T::BlockNumber) {
            if (n % T::ClearFrequency::get()).is_zero() {
                let c_val = <SingleValue>::get();
                <SingleValue>::put(0u32);
                Self::deposit_event(Event::Cleared(c_val));
            }
        }
```

### 4. Create a runtime method that allows users to manipulate the value

The `add_value` method increases `SingleValue` so long as each call adds less than the `MaxAddend` value. In more complex patterns, the constant value may be used as a static base value that is scaled by a multiplier to incorporate stateful context for calculating some dynamic fee (i.e. floating transaction fees).

For this function, make sure to:

- include checks using `ensure!`
- keep track of the previous value
- check for overflow
- update `SingleValue`

```rust
// Extrinsics callable from outside the runtime.
	#[pallet::call]
	impl<T: Config> Pallet<T> {
    #[pallet::weight(1_000)]

    fn add_value(
        origin: OriginFor<T>,
        val_to_add: u32
        ) -> DispatchResultWithPostInfo {
            let _ = ensure_signed(origin)?;

            ensure!(val_to_add <= T::MaxAddend::get(), "value must be <= maximum add amount constant");

            // previous value got
            let c_val = <SingleValue>::get();

            // checks for overflow when new value added
            let result = match c_val.checked_add(val_to_add) {
                Some(r) => r,
                None => return Err(DispatchError::Other("Addition overflowed")),
            };
            <SingleValue>::put(result);
            Self::deposit_event(Event::Added(c_val, val_to_add, result));
            Ok(())
        }
```

### 5. Supply the constant value

In `runtime/lib.rs`, declare the values for your pallet's implementation:

```rust
parameter_types! {
    pub const MaxAddend: u32 = 1738;
    pub const ClearFrequency: u32 = 10;
}

impl constant_config::Config for Runtime {
    type Event = Event;
    type MaxAddend = MaxAddend;
    type ClearFrequency = ClearFrequency;
}
```

## Examples

- `constant-config`

## Resources
#### Tutorials
- Nick's [forkless upgrade tutorial](https://substrate.dev/docs/en/tutorials/forkless-upgrade/)


[get-trait-rustdocs]: https://substrate.dev/rustdocs/v3.0.0/frame_support/traits/trait.Get.html
[extra-constants-rustdocs]: https://crates.parity.io/frame_support/attr.pallet.html#extra-constants-palletextra_constants-optional