pragma solidity ^0.4.0;
contract vote2Play {
    
    uint testCount;
    
    function add() public {
        testCount++;
    }
    
    function check() public view returns (uint count) {
        count = testCount;
    }
}