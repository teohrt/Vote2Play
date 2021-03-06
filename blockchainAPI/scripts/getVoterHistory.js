module.exports = function(web3, contractAddressList, gasAmount) {

    var obj = {

        check: function(contractAddress) {
            return new Promise(async (resolve, reject) => {
                try {
                    var abiDef;
                    // Finds ABI in list for the transaction
				    for (i = 0; i < contractAddressList.length; i++) {
                        if (contractAddress == contractAddressList[i].address) {
                            abiDef = contractAddressList[i].abi;
                        }
                    }
                    
                    var CounterContract = web3.eth.contract(abiDef);
                    var contractInstance = CounterContract.at(contractAddress);

                    // Make the check
                    var result = contractInstance.getVoterHistory.call({ from: web3.eth.accounts[0], gas: gasAmount});
                    contractInstance.getVoterHistory({ from: web3.eth.accounts[0], gas: gasAmount});
                    
                    return resolve({ value: result});
                }
                catch(e) {
                    console.log('***Error with getting voter history\n');
                    console.log(e);
                    return reject(e);
                }
            });
        }
    }
    return obj;
};