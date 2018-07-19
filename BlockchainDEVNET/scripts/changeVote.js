module.exports = function(web3, contractAddressList, gasAmount) {

    var obj = {

        change: function( response ) {
            return new Promise(async (resolve, reject) => {
                try {
                    var abiDef = contractAddressList[0].abi;
                    var CounterContract = web3.eth.contract(abiDef);
                    var contractInstance = CounterContract.at(contractAddressList[0].address);

                    // Make the check
                    var result = contractInstance.changeVote.call( response, { from: web3.eth.accounts[0], gas: gasAmount});
                    contractInstance.changeVote( response, { from: web3.eth.accounts[0], gas: gasAmount});
                    
                    return resolve({ value: result});
                }
                catch(e) {
                    console.log('***Error with changing vote\n');
                    console.log(e);
                    return reject(e);
                }
            });
        }
    }
    return obj;
};