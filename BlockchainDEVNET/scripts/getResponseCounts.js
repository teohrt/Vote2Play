module.exports = function(web3, contractAddressList, gasAmount) {

    var obj = {

        check: function() {
            return new Promise(async (resolve, reject) => {
                try {
                    var abiDef = contractAddressList[0].abi;
                    var CounterContract = web3.eth.contract(abiDef);
                    var contractInstance = CounterContract.at(contractAddressList[0].address);

                    // Make the check
                    var result = contractInstance.getResponseCounts.call({ from: web3.eth.accounts[0], gas: gasAmount});
                    contractInstance.getResponseCounts({ from: web3.eth.accounts[0], gas: gasAmount});
                    
                    return resolve({ value: result});
                }
                catch(e) {
                    console.log('***Error with getting total votes\n');
                    console.log(e);
                    return reject(e);
                }
            });
        }
    }
    return obj;
};