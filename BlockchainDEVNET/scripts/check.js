module.exports = function(web3, contractAddressList) {

    var obj = {

        check: function() {
            return new Promise(async (resolve, reject) => {
                try {
                    var abiDef = contractAddressList[0].abi;
                    var CounterContract = web3.eth.contract(abiDef);
                    var contractInstance = CounterContract.at(contractAddressList[0].address);

                    // Make the check
                    var result = contractInstance.check.call({ from: web3.eth.accounts[0], gas: 1000000});
                    contractInstance.check({ from: web3.eth.accounts[0], gas: 1000000});
                    
                    return resolve({ value: result});
                }
                catch(e) {
                    console.log('***Error with check\n');
                    console.log(e);
                    return reject(e);
                }
            });
        }
    }
    return obj;
};