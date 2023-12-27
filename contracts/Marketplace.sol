// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import {Escrow} from "./Escrow.sol";
import {NftMarketplace} from "./NftMarketplace.sol";
import {Upgradeable} from "./Upgradeable.sol";

contract Marketplace is NftMarketplace, Escrow, Upgradeable {

    function initialize() public initializer {
        __Upgradeable_init();
        __NftMarketplace_init();
        __Escrow_init_unchained();
    }
}
