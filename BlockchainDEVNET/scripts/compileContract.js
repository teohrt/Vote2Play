var fs = require('fs');
var solc = require('solc');

module.exports = function(web3) {
    var obj = {
        
        createContract:  function() {

            return new Promise(async (resolve, reject) => {
                var result = {};

                try {

                    var code = fs.readFileSync('./BlockchainDEVNET/scripts/vote2Play.sol').toString();
                    var compiledCode = solc.compile( code );
                    var abiDefinition = JSON.parse( compiledCode.contracts[':vote2Play'].interface );
                    var contract = web3.eth.contract( abiDefinition );
                    var byteCode = '0x' + compiledCode.contracts[':vote2Play'].bytecode;
                    var deployedContract = contract.new( { data: byteCode, from: web3.eth.accounts[0], gas: 1000000 } );
                    //var contractInstance = contract.at(deployedContract.address);

                    while(true) {

                        if (deployedContract.address) {

                            console.log('successful compile');
                            return resolve( { minedAddress: deployedContract.address } ); 

                        }
                        await sleep(1000);
                    }

                }
                catch (e) {

                    console.log('Contract creation error. : ');
                    console.log(e);
                    return reject(e);

                }
        
            });
        }
    };
    return obj;
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}