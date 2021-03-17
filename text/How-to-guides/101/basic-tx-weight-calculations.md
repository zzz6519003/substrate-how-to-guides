# Basic Transaction Weight Calculations
- [Goal](#goal)
- [Use cases](#use-cases)
- [Overview](#overview)
- [Steps](#steps)
  * [1. Import weight configuration tools](#1-import-weight-configuration-tools)
  * [2. Calculate maximum weight before a function](#2-calculate-maximum-weight-before-a-function)
  * [3. Calculate the actual weight linked to function's logic](#3-calculate-the-actual-weight-linked-to-function-s-logic)
- [Examples](#examples)
- [Related material](#related-material)

## Goal

Understand how to calculate transaction weights for a basic dispatch function.

## Use cases

Assign the correct weight before a function call to storage, required to calculate transaction fees.

## Overview
Weights are an important part of Substrate development as they provide information about what the maximum cost a function can be in terms of the block size it will take up. This way, the [weighting system](https://substrate.dev/docs/en/knowledgebase/learn-substrate/weight) checks what the cost will be before a function is executed. As a runtime engineers, we care about weights to as they not only help add security checks around the functions we create, but they also force us to think about the computational ressources consumed by a transaction and [calculate what fees to charge](https://substrate.dev/docs/en/knowledgebase/runtime/fees) users.

Traits

- [`PaysFee`](https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.PaysFee.html): to specify whether or not a dispatch pays the fee
- [`GetDispatchInfo`](https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.GetDispatchInfo.html): carries weight information using the #[weight] attribute
- [`DispatchResultWithPostInfo`](https://docs.rs/frame-support/3.0.0/frame_support/dispatch/type.DispatchResultWithPostInfo.html): provides new weight info once the extrinsic function has been executed.

## Steps

### 1. Import weight configuration tools 

Make sure you have the right dependencies for basic weight configuring.

```rust
use frame_support::Parameter;
use frame_support::weights::{GetDispatchInfo, Pays};
use sp_runtime::traits::Dispatchable;
use frame_support::pallet_prelude::{DispatchResultWithPostInfo};
use frame_support::dispatch::DispatchResult;
```

### 2. Calculate maximum weight before a function

Using `call.get_dispatch_info()`, calculate the maximum possible weight before the function is declared:

```rust
#[weight = {
			let dispatch_info = call.get_dispatch_info();
			(dispatch_info.weight, dispatch_info.class, Pays::Yes)
            }]

        // Define a function header that returns DispatchResultWithPostInfo
		fn do_three_reads(origin, call: Box<<T as Config>::Call>) -> DispatchResultWithPostInfo {
            // Function logic
        }
```
[GetDispatchInfo](https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.GetDispatchInfo.html) provides the `get_dispatch_info()` method we need to retrieve information about the function's weight.

### 3. Calculate the actual weight linked to function's logic

The actual weight of a function call depends on the logic of the extrinsic. After execution, we can give back fees once the actual weight has been calculated. Handle this using the [`Pays` Enum](https://docs.rs/frame-support/3.0.0/frame_support/weights/enum.Pays.html) and [`DbWeight`](https://substrate.dev/rustdocs/v3.0.0/frame_system/pallet/trait.Config.html#associatedtype.DbWeight).

For a function whose logic does 3 storage reads, calculate it using `DbWeight` and return it at the end of the function:

```rust
// Function returns a calculation corresponding to 3 DB reads
let check_logic_weight = T::DbWeight::get().reads(3);		
return Ok(Some(check_logic_weight).into())

//Remove fee assoicated to weight
Ok(Pays::Yes.into())
```

This is the basic procedure of confirguring weights. There are more advanced methods that suit different use cases. For a simple function with a fixed amount of storage reads, this method is most robust.

## Examples
Feeless transaction pallet (link to playground).

## Related material

- Calculating weights in storage migrations (Recipe)
- Transaction Weights ([Knowledge base](https://substrate.dev/docs/en/knowledgebase/learn-substrate/weight))
- Transaction Fees ([Knowledge base](https://substrate.dev/docs/en/knowledgebase/runtime/fees))
- In Polkadot: [https://wiki.polkadot.network/docs/en/learn-transaction-fees](https://wiki.polkadot.network/docs/en/learn-transaction-fees)
- [`WeightData`](https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.WeighData.html
- [`ClassifyDispatch`](https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.ClassifyDispatch.html)