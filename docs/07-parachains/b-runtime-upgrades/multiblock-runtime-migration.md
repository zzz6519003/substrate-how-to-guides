---
sidebar_position: 4
keywords: parachains
---

# How to use the scheduler pallet for a small multi-block runtime migration
_ WIP... _

## Goal
- Handle on-chain upgrades that could take 2-3 blocks with the scheduler pallet.

## Use cases
Launching a parachain.

## Overview

If your chain can work while its upgrading, then you can use the schedular pallet. 

If you are doing multi-block migration, you probably need:
- a signed extension or something similar that blocks all extrinsics during migration
- make sure none of the migrating stuff is not used on mandatory hooks (on_initialize) 

## Steps

### 1.
TODO

## Examples

## Resources
#### Rust docs
#### Knowledgebase 
