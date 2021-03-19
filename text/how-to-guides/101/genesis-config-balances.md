# How to configure genesis for Balances
- [Goal](#goal)
- [Use cases](#use-cases)
- [Overview](#overview)
- [Steps](#steps)
  * [1. Modify accounts](#1-modify-accounts)
  * [2. Modify balances`](#2-modify-balances)
- [Examples](#examples)
- [Related material](#related-material)

## Goal

1. Understand how to customize genesis configuration
2. Create custom Config for your pallet

## Use cases

- Initialize endowed accounts
- Initialize balances for endowed accounts

## Overview

Genesis configuration is a useful tool for testing chain behaviour by defining an initial state for things such as accounts, balances, genesis for custom pallets, and more. Here is a simple guide on how to configure custom intial balances for a runtime, using [BalancesConfig](https://substrate.dev/rustdocs/v2.0.0/node_template_runtime/type.BalancesConfig.html).

## Steps

### 1. Modify accounts 

In `chain_spec.rs`, modify the accounts-to-amount map to apply it to the set of all endowed accounts (this is how every node template is set up):

```rust
 pallet_balances: Some(BalancesConfig {
		balances: endowed_accounts.iter().cloned().map(|k|(k, 1 << 60)).collect(),
}),
```

Alternatively, write out each account you would like to pre-seed, as shown below.

```rust
pallet_balances: Some(BalancesConfig {
		balances: vec![ (
		get_account_id_from_seed::<sr25519::Public>("Alice"),
		1 << 60
		),
		(
		get_account_id_from_seed::<sr25519::Public>("Bob"),
		1 << 60
		),
		],
}),
```
### 2. Modify balances
By changing the right-hand-side value of the `balances` tuple, we can customize the amount of each account. Take a look at the [Rust documentation](https://substrate.dev/rustdocs/v2.0.0/pallet_balances/struct.GenesisConfig.html) on how this is implemented. Let's modify things such that Alice is pre-seeded with 1<<10:

```rust
pallet_balances: Some(BalancesConfig {
		balances: vec![ (
		get_account_id_from_seed::<sr25519::Public>("Alice"),
		1 << 10  // <---- shift 10 decimals: 1024
		),
		],
}),
```

## Examples

1. Assign custom amounts to `endowed_accounts`
2. Configure a genesis state with a custom set of accounts

## Related material

- Custom pallet Genesis configuration (Recipe)