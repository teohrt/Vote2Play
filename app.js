var express = require('express');
var app = express();
var chainPort = 8545;
var serverPort = 3333;
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:" + chainPort));
var compileContract = require('./BlockchainDEVNET/scripts/compileContract')(web3);
var apiController = require('./BlockchainDEVNET/controllers/apiController');

apiController(app, web3);

compileContract.createContract();

app.listen(serverPort, () => {
    console.log('Blockchain is connected: ' + web3.isConnected() + '\nServer listening on port: ' + serverPort + ' ...\n');
});