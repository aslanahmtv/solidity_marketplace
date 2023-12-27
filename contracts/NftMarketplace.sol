// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;
pragma abicoder v2;

import {AccessControlUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {Escrow} from "./Escrow.sol";

contract NftMarketplace is AccessControlUpgradeable {

    function __NftMarketplace_init() internal onlyInitializing {
        __AccessControl_init();
    }

    function __NftMarketplace_init_unchained() internal onlyInitializing {}

    struct NftSellOrder {
        address seller;
        address token;
        uint256 tokenId;
        uint256 nativeTokenPrice;
    }

    mapping(uint256 => NftSellOrder) public nftSellOrders;

    event NftSellOrder_CreatedOrUpdated(uint256 indexed id, address seller, address token, uint256 tokenId, uint256 nativeTokenPrice);

    event NftSellOrder_Deleted(uint256 indexed id, address seller);

    event NftSellOrder_Completed(uint256 indexed id, address seller, address buyer, address token, uint256 tokenId, uint256 nativeTokenPrice);

    function createSellNftOrder(address _token, uint256 _tokenId, uint256 _nativeTokenPrice) external {
        IERC721 nftContract = IERC721(_token); 
        require(nftContract.ownerOf(_tokenId) == msg.sender, "You don't own this NFT");

        nftContract.transferFrom(msg.sender, address(this), _tokenId);
        uint256 id = uint256(keccak256(abi.encodePacked(address(_token), _tokenId)));
        nftSellOrders[id] = NftSellOrder({
            seller: msg.sender,
            token: _token,
            tokenId: _tokenId,
            nativeTokenPrice: _nativeTokenPrice
        });

        emit NftSellOrder_CreatedOrUpdated(id, msg.sender, _token, _tokenId, _nativeTokenPrice);
    }

    function completeSellNftOrder(uint256 _orderId) payable external {
        
        NftSellOrder storage order = nftSellOrders[_orderId];
        require(order.seller != address(0), "Order by given order id does not exist");
        require(order.nativeTokenPrice == msg.value, "order price and payed amount doesnt match");

        IERC721 nftContract = IERC721(order.token); 
        nftContract.transferFrom(address(this), msg.sender, order.tokenId);

        emit NftSellOrder_Completed(_orderId, order.seller, msg.sender, order.token, order.tokenId, order.nativeTokenPrice);
        delete nftSellOrders[_orderId];
    }

    function cancelSellNftOrder(uint256 _orderId) external {
        require(nftSellOrders[_orderId].seller == msg.sender, "You are not the creator of this order");

        NftSellOrder storage order = nftSellOrders[_orderId];
        IERC721 nftContract = IERC721(order.token); 
        nftContract.transferFrom(address(this), order.seller, order.tokenId);
        delete nftSellOrders[_orderId];
        emit NftSellOrder_Deleted(_orderId, msg.sender);
    }
}
