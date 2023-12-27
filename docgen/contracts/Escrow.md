# Escrow

contracts/Escrow.sol

## *constructor*

***constructor(__support)***

Arguments

| **name** | **type** | **description** |
|-|-|-|
| __support | address |  |



## *event* AdminChanged

***Escrow.AdminChanged(previousAdmin, newAdmin) ***

Arguments

| **name** | **type** | **description** |
|-|-|-|
| previousAdmin | address | not indexed |
| newAdmin | address | not indexed |



## *event* BeaconUpgraded

***Escrow.BeaconUpgraded(beacon) ***

Arguments

| **name** | **type** | **description** |
|-|-|-|
| beacon | address | indexed |



## *event* DisputeCreated

***Escrow.DisputeCreated(orderId) ***

Arguments

| **name** | **type** | **description** |
|-|-|-|
| orderId | bytes32 | not indexed |



## *event* OrderCancelled

***Escrow.OrderCancelled(orderId) ***

Arguments

| **name** | **type** | **description** |
|-|-|-|
| orderId | bytes32 | not indexed |



## *event* OrderConfirmed

***Escrow.OrderConfirmed(orderId) ***

Arguments

| **name** | **type** | **description** |
|-|-|-|
| orderId | bytes32 | not indexed |



## *event* OrderInitiated

***Escrow.OrderInitiated(orderId, buyer, seller, amount) ***

Arguments

| **name** | **type** | **description** |
|-|-|-|
| orderId | bytes32 | not indexed |
| buyer | address | indexed |
| seller | address | indexed |
| amount | uint256 | not indexed |



## *event* RoleAdminChanged

***Escrow.RoleAdminChanged(role, previousAdminRole, newAdminRole) ***

Arguments

| **name** | **type** | **description** |
|-|-|-|
| role | bytes32 | indexed |
| previousAdminRole | bytes32 | indexed |
| newAdminRole | bytes32 | indexed |



## *event* RoleGranted

***Escrow.RoleGranted(role, account, sender) ***

Arguments

| **name** | **type** | **description** |
|-|-|-|
| role | bytes32 | indexed |
| account | address | indexed |
| sender | address | indexed |



## *event* RoleRevoked

***Escrow.RoleRevoked(role, account, sender) ***

Arguments

| **name** | **type** | **description** |
|-|-|-|
| role | bytes32 | indexed |
| account | address | indexed |
| sender | address | indexed |



## *event* Upgraded

***Escrow.Upgraded(implementation) ***

Arguments

| **name** | **type** | **description** |
|-|-|-|
| implementation | address | indexed |



## *function* DEFAULT_ADMIN_ROLE

***Escrow.DEFAULT_ADMIN_ROLE() view***

Outputs

| **name** | **type** | **description** |
|-|-|-|
|  | bytes32 |  |



## *function* cancel

***Escrow.cancel(orderId, _message, _signatures) ***

Arguments

| **name** | **type** | **description** |
|-|-|-|
| orderId | bytes32 |  |
| _message | string |  |
| _signatures | bytes[] |  |



## *function* confirmOrder

***Escrow.confirmOrder(orderId) ***

Arguments

| **name** | **type** | **description** |
|-|-|-|
| orderId | bytes32 |  |



## *function* disputeOrder

***Escrow.disputeOrder(orderId) ***

Arguments

| **name** | **type** | **description** |
|-|-|-|
| orderId | bytes32 |  |



## *function* getRoleAdmin

***Escrow.getRoleAdmin(role) view***

> Details: Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.

Arguments

| **name** | **type** | **description** |
|-|-|-|
| role | bytes32 |  |

Outputs

| **name** | **type** | **description** |
|-|-|-|
|  | bytes32 |  |



## *function* grantRole

***Escrow.grantRole(role, account) ***

> Details: Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.

Arguments

| **name** | **type** | **description** |
|-|-|-|
| role | bytes32 |  |
| account | address |  |



## *function* hasRole

***Escrow.hasRole(role, account) view***

> Details: Returns `true` if `account` has been granted `role`.

Arguments

| **name** | **type** | **description** |
|-|-|-|
| role | bytes32 |  |
| account | address |  |

Outputs

| **name** | **type** | **description** |
|-|-|-|
|  | bool |  |



## *function* initiateOrder

***Escrow.initiateOrder(orderId, seller) payable***

Arguments

| **name** | **type** | **description** |
|-|-|-|
| orderId | bytes32 |  |
| seller | address |  |



## *function* renounceRole

***Escrow.renounceRole(role, account) ***

> Details: Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.

Arguments

| **name** | **type** | **description** |
|-|-|-|
| role | bytes32 |  |
| account | address |  |



## *function* resolveDispute

***Escrow.resolveDispute(orderId, cancel) ***

Arguments

| **name** | **type** | **description** |
|-|-|-|
| orderId | bytes32 |  |
| cancel | bool |  |



## *function* revokeRole

***Escrow.revokeRole(role, account) ***

> Details: Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.

Arguments

| **name** | **type** | **description** |
|-|-|-|
| role | bytes32 |  |
| account | address |  |



## *function* supportsInterface

***Escrow.supportsInterface(interfaceId) view***

> Details: See {IERC165-supportsInterface}.

Arguments

| **name** | **type** | **description** |
|-|-|-|
| interfaceId | bytes4 |  |

Outputs

| **name** | **type** | **description** |
|-|-|-|
|  | bool |  |



## *function* upgradeTo

***Escrow.upgradeTo(newImplementation) ***

> Details: Upgrade the implementation of the proxy to `newImplementation`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.

Arguments

| **name** | **type** | **description** |
|-|-|-|
| newImplementation | address |  |



## *function* upgradeToAndCall

***Escrow.upgradeToAndCall(newImplementation, data) payable***

> Details: Upgrade the implementation of the proxy to `newImplementation`, and subsequently execute the function call encoded in `data`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.

Arguments

| **name** | **type** | **description** |
|-|-|-|
| newImplementation | address |  |
| data | bytes |  |


