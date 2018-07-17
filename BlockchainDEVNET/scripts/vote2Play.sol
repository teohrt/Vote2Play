pragma solidity ^0.4.0;
contract vote2Play {
    
    uint testCount;
    uint transactionCount;
    
    function add() public {
        testCount++;
        transactionCount++;
    }
    
    function checkN() public returns (uint) {
        transactionCount++;
        return testCount;
    }
    
    function checkT() public returns (uint) {
        transactionCount++;
        return transactionCount-1;
    }
    
    function addX(uint x) public {
        testCount += x;
        transactionCount++;
    }
}