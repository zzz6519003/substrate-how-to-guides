---
sidebar_position: 2
keywords: pallet design, intermediate, runtime
code: 
---

# Part II: Registrar pallet 
:::note
This tutorial assumes that you have already installed the prerequisites for building with Substrate on your machine.
If you haven't already, head over to our [installation guide][installation].
:::

## Learning outcomes

:arrow_right: 

:arrow_right: 

:arrow_right:

## Overview
Elaborating from this project:  https://github.com/substrate-developer-hub/substrate-enterprise-sample 

The Registrar pallet inherits decentralized identifier (DID) capabilities from the DID pallet and uses these capabilities to implement an organization registry. This pallet maintains a list of organizations and maps each organization to a list of members. Organizations are identified by the ID of the account that created and owns it, which means that an account may create and own at most one organization. Organizations are associated with a name, which is designated by the value of the Org attribute on the DID of the organization owner. Organization owners are the only accounts that may add members to their organizations. When an account is added to an organization as a member, the organization owner creates an OrgMember delegate for the member's DID - this is a way for the organization owner to certify an account's membership in the organization. The registrar pallet exposes a custom origin, EnsureOrg, that validates whether or not an account owns or is a member of at least one organization. The EnsureOrg origin is used to control access to many of the chain's capabilities, including the ability to create roles with the RBAC pallet.

## Steps

### 1.

:::note Congratulations!
/ todo
:::

## Next steps

- 
