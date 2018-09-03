module.exports = function(web3, contractAddressList, gasAmount) {

    var obj = {

        vote: function( vote, contractAddress ) {
            return new Promise(async ( resolve, reject ) => {
                try {
                    var abiDef;
                    // Finds ABI in list for the transaction
				    for (i = 0; i < contractAddressList.length; i++) {
                        if (contractAddress == contractAddressList[i].address) {
                            abiDef = contractAddressList[i].abi;
                        }
                    }

                    var smartContract = web3.eth.contract(abiDef);
                    var contractInstance = smartContract.at(contractAddress);

                    // Vote
                    var result = contractInstance.vote.call(vote, { from: web3.eth.accounts[0], gas: gasAmount });
                    contractInstance.vote(vote, { from: web3.eth.accounts[0], gas: gasAmount });

                    return resolve({ value: result }); 
                }
                catch(e) {
                    console.log('***Error with Vote\n');
                    return reject(e);
                }
            });
        }
    };
    return obj;
}