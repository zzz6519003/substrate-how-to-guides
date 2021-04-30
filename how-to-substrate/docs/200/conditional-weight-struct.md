---
sidebar_position: 1
---

# Conditional Weighting Struct

_There's always more than one way&mdash;but those can wait._

## Goal

Understand how to calculate transaction weights using a custom weighting struct.

## Use cases

Calculate transaction fees by computing correct weights based on the data within a function.

## Overview

Here are the different traits we'll be implementing:

- [`WeighData`][impl-weighdata-rustdocs]: Weigh the data in a function.
- [`PaysFee`][paysfee-rustdocs]: Designate whether the dispatch pays a fee or not.
- [`ClassifyDispatch`][classifydispatch-rustdocs]: A way to tell the runtime about the type of dispatch being made.

## Steps

### 1. Write the `WeighData` struct

Write a weighting struct that weighs transactions where the first parameter is a boolean value.

```rust
pub struct Conditional(u32);

impl WeighData<(&bool, &u32)> for Conditional {
    fn weigh_data(&self, (switch, val): (&bool, &u32)) -> Weight {

        // If the first parameter is true, then the weight is linear in the second parameter.
        if *switch {
            val.saturating_mul(self.0)
        }
        // Otherwise the weight is constant.
        else {
            self.0
        }
    }
}
```

### 2. Classify dispatch calls

Since this implementation of `WeighData` requires a `DispatchClass`, use [`default`][dispatchclass-rustdocs] to classify all calls as normal.

```rust
// Implement ClassifyDispatch
impl<T> ClassifyDispatch<T> for Conditional {
    fn classify_dispatch(&self, _: T) -> DispatchClass {
        Default::default()
    }
}
```

### 3. Implement `PaysFee`

Last, specify how `PaysFee` is used for the custom `WeighData` struct.

```rust
// Implement PaysFee
impl PaysFee for Conditional {
    fn pays_fee(&self) -> bool {
        true
    }
}
```
## Examples

- Feeless transaction pallet.

## Related material
#### How-to guides
- Calculating weights in storage migrations
- [Linear weighting struct](./linear-weight-struct)
- [Quadratic weighting struct](../300/quadratic-weight-struct)
#### Knowledgebase
- [Transaction Weights](https://substrate.dev/docs/en/knowledgebase/learn-substrate/weight)
- [Transaction Fees](https://substrate.dev/docs/en/knowledgebase/runtime/fees)
#### Other
- [Transaction fees in Polkadot](https://wiki.polkadot.network/docs/en/learn-transaction-fees)

[impl-weighdata-rustdocs]: https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.WeighData.html#impl-WeighData%3CT%3E-for-(Weight%2C%20DispatchClass%2C%20Pays
[paysfee-rustdocs]: https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.PaysFee.html 
[classifydispatch-rustdocs]: https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.ClassifyDispatch.html 
[dispatchclass-rustdocs]: https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/enum.DispatchClass.html