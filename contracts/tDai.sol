// SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

error LendingDaiToken__NotOwner();

contract LendingDaiToken is ERC20 {

    address public immutable i_owner;

    constructor() ERC20("LendingDaiToken", "DAI") {
        i_owner = msg.sender;
    }

    modifier onlyOwner() {
        if(i_owner != msg.sender) revert LendingDaiToken__NotOwner();
        _;
    }


    function mint(address _receipient, uint256 _amount) public {
        _mint(_receipient, _amount);
    }
}
