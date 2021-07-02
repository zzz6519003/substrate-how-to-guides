---
sidebar_position: 3
keywords: parachains
---

# How to set-up your runtime and client
_A series of steps your going to want to take before deploying your runtime as a parachain._

## Goal
- Ensure runtime weights are corret.
- Correctly deploy a runtime.

## Use cases
Launching a parachain.

## Overview
When launching a parachain, it is important to make sure a chain's runtime is properly setup. This includes performing 
storage migrations, checking that weights are correctly implemented and making sure the ProtocolID IS unique.
## Steps

### 1. Set a unique ProtocolID

In order to set a unique ProtocolID, change make sure you use some nonce or salt value. This is set in 
`/client/network/src/config`:

```rust
#[derive(Clone, PartialEq, Eq, Hash)]
pub struct ProtocolId(smallvec::SmallVec<[u8; 6]>);

impl<'a> From<&'a str> for ProtocolId {
	fn from(bytes: &'a str) -> ProtocolId {
		ProtocolId(bytes.as_bytes().into())
	}
}
```
This step is important &mdash; you wouldn't want to connect to the wrong network!

:::tip
Refer to [this guide](/docs/pallet-design/randomness) for some ideas on creating a unique value to use here.
:::

### 2. Check runtime weights

Use benchmarking to verify that your runtime weights are correct. 

:::note
Refer to this [knowledgebase article][benchmarking-kb] on
benchmarking for additional information.
:::

// TODO: what to check for and how to ensure "best practices"

#### Customize weights
// Change weights for each custom pallet - maybe this is its own separate HTG

#### Set block weight limit 
// TODO: Show what this means: "As the execution time of the network stabilizes the weights limit can be increased to 2 seconds. "

### 3. Runtime deployment
When launching a parachain, it is important to use the compressed version of the runtime to lower the amount of data being transferred.

// TODO: What does this mean in terms of what the reader needs to look for in their projects?
// Can we show how to check if the "changes are too big" ? Whats the threshold of combined runtimes past and current until its "too big" ?

// TODO: a step-through of what limiting the functionality with filters looks like.

#### For large runtimes 

It is less favorable to perform storage upgrades for large runtimes. In these cases, you can:

    1. Generate the genesis state of your chain with full runtime functionality (including all the pallets)

    2. Remove all  pallets that you will not need upon parachain launch from your runtime

    3. Re-build the WASM blob (validation logic) and the runtime of the chain

    4. Register your parachain with the updated genesis and the WASM blob generated in (3)

    5. After your parachain is live you can upgrade your runtime on-chain to include the missing pallets (ensure that pallet indices and names match those used to generate the genesis state in step (1) without having to do storage migrations. For more information on on-chain runtime upgrades refer to the next section.



## Examples
- [Statemine runtime deployment](https://github.com/paritytech/cumulus/pull/476)
## Resources
#### Knowledgebase 
- [Benchmarking][benchmarking-kb]

[benchmarking-kb]: https://substrate.dev/docs/en/knowledgebase/runtime/benchmarking