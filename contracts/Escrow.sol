// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import {AccessControlUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract Escrow is AccessControlUpgradeable {
    using ECDSA for bytes32;

    function __Escrow_init() internal onlyInitializing {
        __AccessControl_init();
    }

    function __Escrow_init_unchained() internal onlyInitializing {}

    bytes32 public constant SUPPORT_ROLE = keccak256("SUPPORT_ROLE"); 

    enum OrderStatus {
        NotCreated,
        Initialized,
        Completed,
        Dispute,
        Cancelled
    }

    struct Order {
        address payable buyer;
        address payable seller;
        uint256 amount;
        OrderStatus status;
    }

    mapping(bytes32 => Order) private orders;

    event OrderInitiated(bytes32 orderId, address indexed buyer, address indexed seller, uint256 amount);
    event OrderConfirmed(bytes32 orderId);
    event OrderCancelled(bytes32 orderId);
    event DisputeCreated(bytes32 orderId);

    function initiateOrder(bytes32 orderId, address seller) external payable {
        require(msg.value > 0, "Amount must be greater than zero");
        //todo add extra zero-value enum
        require(orders[orderId].status == OrderStatus.NotCreated, "Order already initialized");

        Order storage order = orders[orderId];
        order.buyer = payable(msg.sender);
        order.seller = payable(seller);
        order.amount = msg.value;
        order.status = OrderStatus.Initialized;

        emit OrderInitiated(orderId, msg.sender, seller, msg.value);
    }

    function confirmOrder(bytes32 orderId) external {
        Order storage order = orders[orderId];
        require(msg.sender == order.buyer, "Only the buyer can confirm the order");
        require(order.status == OrderStatus.Initialized, "Order is not in a valid state");

        //todo replace by withdraw function
        (bool sent, ) = order.seller.call{value: order.amount}("");
        require(sent, "Failed to send Ether to seller");

        order.status = OrderStatus.Completed;

        emit OrderConfirmed(orderId);
    }

    function disputeOrder(bytes32 orderId) external {
        Order storage order = orders[orderId];
        require(msg.sender == order.buyer, "Only the buyer can start dispute");
        require(order.status == OrderStatus.Initialized, "Order is not in a valid state");

        order.status = OrderStatus.Dispute;

        emit DisputeCreated(orderId);
    }

    function resolveDispute(bytes32 orderId, bool cancel) external onlyRole(SUPPORT_ROLE) {
        Order storage order = orders[orderId];
        require(order.status == OrderStatus.Dispute, "Order is not in valid state");
        if (cancel) {
            (bool sent, ) = order.buyer.call{value: order.amount}("");
            require(sent, "Failed to send Ether to buyer");
            order.status = OrderStatus.Cancelled;
            emit OrderCancelled(orderId);
        } else {
            (bool sent, ) = order.seller.call{value: order.amount}("");
            require(sent, "Failed to send Ether to seller");
            order.status = OrderStatus.Completed;
            emit OrderConfirmed(orderId);
        }
    }

    function cancel(bytes32 orderId, string calldata _message, bytes[] memory _signatures) public {
        require(_signatures.length == 2, "Invalid number of signatures");

        bytes32 messageHash = keccak256(bytes(_message)).toEthSignedMessageHash();

        Order storage order = orders[orderId];

        require(order.status == OrderStatus.Initialized, "Invalid state for cancel");
        for (uint i = 0; i < _signatures.length; i++) {
            address signer = messageHash.recover(abi.encodePacked(_signatures[i]));
            require((i == 0 && signer == order.buyer) || (i == 1 && signer == order.seller), "Invalid signatures");
        }

        emit OrderCancelled(orderId);
    }
}
