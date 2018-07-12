var express = require('express');
var app = express();
var chainPort = 5434;
var serverPort = 3333;
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:" + chainPort));
var compiledContract = require('./BlockchainDEVNET/scripts/compileContract')(web3);
var apiController = require('./BlockchainDEVNET/controllers/apiController');

apiController(app);

compiledContract();

app.listen(serverPort, () => {
    console.log('Server listening on port: ' + serverPort + ' ...\n');
});