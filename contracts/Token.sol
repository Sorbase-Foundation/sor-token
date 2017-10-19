pragma solidity ^0.4.15;

import "./MiniMeToken.sol";

contract Token is MiniMeToken {

  // @dev Token constructor
  function Token(address _tokenFactory)
      MiniMeToken(
          _tokenFactory,
          0x0,                            // no parent token
          0,                              // no snapshot block number from parent
          "Sorbase Token",                // Token name
          18,                             // Decimals
          "SOR",                          // Symbol
          true                            // Enable transfers
      ) {}
}
