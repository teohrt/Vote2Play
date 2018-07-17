module.exports = function(web3, contractAddressList) {

    var obj = {

        addX: function(number) {
            return new Promise(async (resolve, reject) => {
                try {
                    var abiDef = contractAddressList[0].abi;
                    var CounterContract = web3.eth.contract(abiDef);
                    var contractInstance = CounterContract.at(contractAddressList[0].address);

                    // Add to the contract's counter
                    var result = contractInstance.addX.call(number, { from: web3.eth.accounts[0], gas: 1000000});
                    contractInstance.addX(number, { from: web3.eth.accounts[0], gas: 1000000});

                    return resolve( { value: 'added x' } ); 
                }
                catch(e) {
                    console.log('***Error with addX\n');
                    console.log(e);
                    return reject(e);
                }
            });
        }
    };
    return obj;
}