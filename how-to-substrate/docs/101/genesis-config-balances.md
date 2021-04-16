---
sidebar_position: 3
---

# Configuring genesis for Balances
_All the power to you now that you're getting the hang of things &mdash; by no means anything to show-off about, but may as well start somewhere !_

## Goal

Learn how to customize a chain's genesis configuration for Balances.

## Use cases

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

1. Configure a genesis state with a custom set of accounts

## Related material

- Custom pallet Genesis configuration (Recipe)
- Add a pallet [Tutorial](https://substrate.dev/docs/en/tutorials/add-contracts-pallet#genesis-configuration)
