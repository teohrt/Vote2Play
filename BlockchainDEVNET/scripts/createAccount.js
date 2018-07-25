module.exports = function (web3, contractAddressList, gasAmount) {

    var obj = {

        create: function () {
            return new Promise(async (resolve, reject) => {
                try {
                    // Create new account and transfer funds for future transactions
                    var _address = web3.personal.newAccount("superSecretPassword!");
                    web3.eth.sendTransaction({ from: web3.eth.coinbase, to: _address, value: web3.toWei(1.0, "ether") });

                    while(true) {

                        var _balance = web3.eth.getBalance(_address);
                        if (_balance.toString() != "0") {

                            var result = {
                                newAccountAddress: _address,
                                balance: _balance.toString()
                            };
                            console.log(result);
                            
                            return resolve({
                                newAccountAddress: _address,
                                balance: _balance.toString()
                            });
                        }
                    }

                }
                catch (e) {
                    console.log('***Error with account creation\n');
                    console.log(e);
                    return reject(e);
                }
            });
        }
    }
    return obj;
};