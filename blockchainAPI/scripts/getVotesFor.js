module.exports = function(web3, contractAddressList, gasAmount) {

    var obj = {

        check: function( response, contractAddress ) {
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
                    var contractInstance = CounterContract.at(contractAddressList[0].address);

                    // Make the check
                    var result = contractInstance.getVotesFor.call( response, { from: web3.eth.accounts[0], gas: gasAmount});
                    contractInstance.getVotesFor( response, { from: web3.eth.accounts[0], gas: gasAmount});
                    
                    return resolve({ value: result});
                }
                catch(e) {
                    console.log('***Error with getting vote count for specifc response\n');
                    console.log(e);
                    return reject(e);
                }
            });
        }
    }
    return obj;
};