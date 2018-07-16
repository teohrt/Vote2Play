// Stores deployed smart contract addresses and ABI definitions
var contractAddressList = [];

var express = require('express');
var app = express();
var chainPort = 8545;   // Geth's default value
var serverPort = 3333;  // Arbitrary port of my liking
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:" + chainPort));
var apiController = require('./BlockchainDEVNET/controllers/apiController');

// Routes
apiController(app, web3, contractAddressList);

app.listen(serverPort, () => {
    console.log('Blockchain is connected: ' + web3.isConnected() + '\nRESTful server listening on port: ' + serverPort + ' ...\n');
});