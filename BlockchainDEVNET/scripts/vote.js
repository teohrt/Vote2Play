module.exports = function(web3, contractAddressList, gasAmount) {

    var obj = {

        vote: function( vote ) {
            return new Promise(async (resolve, reject) => {
                try {
                    var abiDef = contractAddressList[0].abi;
                    var smartContract = web3.eth.contract(abiDef);
                    var contractInstance = smartContract.at(contractAddressList[0].address);

                    // vote
                    var result = contractInstance.vote.call( vote, { from: web3.eth.accounts[0], gas: gasAmount});
                    contractInstance.vote( vote, { from: web3.eth.accounts[0], gas: gasAmount});

                    return resolve( { value: result } ); 
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