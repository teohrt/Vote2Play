// stores deployed smart contract addresses
var contractAddressList = [];

var express = require('express');
var app = express();
var chainPort = 8545;   // geth's default value
var serverPort = 3333;
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:" + chainPort));

// routes
var apiController = require('./BlockchainDEVNET/controllers/apiController')(app, web3, contractAddressList);

app.listen(serverPort, () => {
    console.log('Blockchain is connected: ' + web3.isConnected() + '\nServer listening on port: ' + serverPort + ' ...\n');
});