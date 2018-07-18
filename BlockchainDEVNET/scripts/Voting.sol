pragma solidity ^0.4.11;

contract Voting {
    bytes32 private itemID;
    bytes32[] private responseTypes;
    uint8[] private countsOfVoteTypes;
    
    struct pair {
        address voter;
        bytes32 response;
    }
    
    pair[] private voterHistory;
    uint8 private totalNumberOfVotes;
    address[] private addressList;
    
    constructor(bytes32 votable, bytes32[] responses) public {
        itemID = votable;
        responseTypes = responses;
        countsOfVoteTypes.length = responseTypes.length;
    }
    
    //checks if the given address is allowed to vote
    //returns false if address has already voted, true if it hasn't
    function canVote(address voter) private view returns (bool) {
        for (uint8 i = 0; i < addressList.length; i++) {
            if (voter == addressList[i]) {
                return false;
            }
        }
        return true;
    }
    
    function vote(bytes32 response) public returns (bool) {
        //if address is allowed to vote
        if (canVote(msg.sender)) {
            for (uint8 i = 0; i < responseTypes.length; i++) {
                //if response is valid
                if (response == responseTypes[i]) {
                    countsOfVoteTypes[i]++;
                    totalNumberOfVotes++;
                    addressList.push(msg.sender);
                    pair memory log;
                    log.voter = msg.sender;
                    log.response = response;
                    voterHistory.push(log);
                    return true;
                }
            }
        }
        //not allowed to vote or the response is invalid
        return false;
    }
    
    function getTotalVotes() public view returns (uint8) {
        return totalNumberOfVotes;
    }
    
    function getVoterList() public view returns (address[]) {
        return addressList;
    }
    
    function getVotesFor(bytes32 response) public view returns (uint8) {
        for(uint i = 0; i < responseTypes.length; i++) {
            if (responseTypes[i] == response) {
                return countsOfVoteTypes[i];
            }
        }
        //invalid response type
        revert();
    }
    
    function getResponseCounts() public view returns (bytes32[] responses, uint8[] counts) {
        return (responseTypes, countsOfVoteTypes);
    }
    
    function getVoterHistory() public view returns (address[] addresses, bytes32[] responses) {
        address[] memory add = new address[](voterHistory.length);
        bytes32[] memory res = new bytes32[](voterHistory.length);
      
        for(uint i = 0; i < totalNumberOfVotes; i++) {
            add[i] = (voterHistory[i].voter);
            res[i] = (voterHistory[i].response);
        }
        return (add, res);
    }  
    
    function changeVote(bytes32 resp) public returns (bool) {
        //checks if voted before
        if (!canVote(msg.sender)) {
            //checks if response is valid
            for (uint8 i = 0; i < responseTypes.length; i++) {
                if (resp == responseTypes[i]) {
                    //increments new response's count
                    countsOfVoteTypes[i]++;
                    //finds voter record and updates
                    for (uint8 j = 0; j < totalNumberOfVotes; j++) {
                        if (voterHistory[j].voter == msg.sender) {
                            //decrements old response's count
                            for (uint8 I = 0; I < responseTypes.length; I++) {
                                if (voterHistory[j].response == responseTypes[I]) {
                                    countsOfVoteTypes[I]--;
                                }
                            }
                            //updates record to store new response
                            voterHistory[j].response = resp;
                            return true;
                        }
                    }
                }
            }
        }
        //no vote to change and/or invalid response
        return false;
    }
}