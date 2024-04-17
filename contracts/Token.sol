// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Token {
    string public tokenName;
    uint public tokenCap;

    constructor(string memory _name, uint _cap){
        tokenName = _name;
        tokenCap = _cap;
    }
}
