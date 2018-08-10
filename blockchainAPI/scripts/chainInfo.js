module.exports = function (web3) {
	var obj = {};

	obj.getStatus = () => {
		var result = {};

		result.connected = web3.isConnected();

		if (result.connected) {
			result.coinbase = web3.eth.coinbase;
			result.coinbaseBalance = web3.eth.getBalance(result.coinbase).toNumber();
        }
        
		return result;
	};
	return obj;
};