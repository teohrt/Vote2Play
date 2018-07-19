var contractAddressList = [];   // Stores deployed smart contract addresses with their ABI definition
var chainPort   = 8545;         // Geth's default value
var serverPort  = 3333;         // Arbitrary port of my liking
var gasAmount   = 9999999;      // High number for easy transactions on my devnet

var express = require('express');
var app = express();
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:" + chainPort));
var apiController = require('./BlockchainDEVNET/controllers/apiController');

// Routes
apiController(app, web3, contractAddressList, gasAmount);

app.listen(serverPort, () => {
    console.log('Blockchain is connected: ' + web3.isConnected() + '\nRESTful server listening on port: ' + serverPort + ' ...\n');
});