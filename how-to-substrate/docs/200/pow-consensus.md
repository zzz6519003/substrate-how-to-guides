---
sidebar_position: 2
---

# Configure chain to POW Consensus

_When you want to experiment with different consensus engines out there and wanna learn how it works. Start with the classics._

## Goal

To understand how link a POW consensus engine to a service client.

## Use cases

- Launching a POW chain.
- Upgrading a chain from Authority based to POW based.

## Overview

The basic-pow node demonstrates how to wire up a custom consensus engine into the Substrate Service. It uses a minimal proof of work consensus engine to reach agreement over the blockchain. This guide will teach us many useful aspects of dealing with consensus and prepare us to understand more advanced consensus engines in the future.

## Steps

### 1. Make a function that defines a full node using `sc_consensus_pow` and `sc_service`

In `src/service.rs`, make a function called `new_full1` that defines [`PartialComponents`](https://crates.parity.io/sc_service/struct.PartialComponents.html) and
[`PowBlockImport`](https://substrate.dev/rustdocs/v3.0.0/sc_consensus_pow/struct.PowBlockImport.html) :

```rust
let pow_block_import = sc_consensus_pow::PowBlockImport::new(
    client.clone(),
    client.clone(),
    sha3pow::MinimalSha3Algorithm,
    0,                              // check inherents starting at block 0
    select_chain.clone(),
    inherent_data_providers.clone(),
    can_author_with,
);

let import_queue = sc_consensus_pow::import_queue(
    Box::new(pow_block_import.clone()),
    None,
    sha3pow::MinimalSha3Algorithm,  // provide it with references to our client
    inherent_data_providers.clone(),
    &task_manager.spawn_handle(),
    config.prometheus_registry(),
)?;
```

See [docs](https://crates.parity.io/sc_consensus_pow/struct.PowBlockImport.html#method.new) on to configure the `pow_block_import` function.

### 2. Create an actual import queue that the service will use for importing blocks into the client.

Define your node's [inherents](https://substrate.dev/docs/en/knowledgebase/learn-substrate/extrinsics#inherents) by using [`InherentDataProviders`](https://crates.parity.io/sp_inherents/struct.InherentDataProviders.html) in a function that defines the providers of your POW system:

```rust
pub fn build_inherent_data_providers() -> Result<InherentDataProviders, ServiceError> {
    let providers = InherentDataProviders::new();

    providers
        .register_provider(sp_timestamp::InherentDataProvider)
        .map_err(Into::into)
        .map_err(sp_consensus::error::Error::InherentData)?;

    Ok(providers)
}
```

### 3. Define the `proposer` and `worker`

In the `new_full` function, define `proposer`:

```rust
let proposer = sc_basic_authorship::ProposerFactory::new(
    task_manager.spawn_handle(),
    client.clone(),
    transaction_pool,
    prometheus_registry.as_ref(),
);

let (_worker, worker_task) = sc_consensus_pow::start_mining_worker(
    Box::new(pow_block_import),
    client,
    select_chain,
    MinimalSha3Algorithm,
    proposer,
    network.clone(),
    None,
    inherent_data_providers,
    // time to wait for a new block before starting to mine a new one
    Duration::from_secs(10),
    // how long to take to actually build the block (i.e. executing extrinsics)
    Duration::from_secs(10),
    can_author_with,
);
```

Let the task manager spawn it:

```rust
task_manager
    .spawn_essential_handle()
    .spawn_blocking("pow", worker_task);
```

### 4. Construct the light client's service.

The construction of the [light client](https://www.parity.io/what-is-a-light-client/) service is quite similar to the construction of a `new_full`.

## Examples

Basic POW node [![Try on playground](https://img.shields.io/badge/Playground-Node_Template-brightgreen?logo=Parity%20Substrate)](https://playground.substrate.dev/?deploy=node-template)

## Resources

- Rustdocs [`PowBlockimport`](https://crates.parity.io/sc_consensus_pow/struct.PowBlockImport.html)
- Knowledgebase article on [inherents](https://substrate.dev/docs/en/knowledgebase/learn-substrate/extrinsics#inherents)
- Rust docs [POW Algorithm](https://crates.parity.io/sc_consensus_pow/trait.PowAlgorithm.html) trait
