var users = [];                 // Stores blockchain accounts
var contractAddressList = [];   // Stores deployed smart contract addresses with their ABI definition
var chainPort   = 8545;         // Geth's default value
var serverPort  = 3333;         // Arbitrary port of my liking
var gasAmount   = 9999999;      // High number for easy transactions on my devnet

var express = require('express');
var app = express();
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:" + chainPort));
var apiController = require('./controllers/apiController');

// Allow the API to do all the things. Power to the people.
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

// Routes
apiController(app, web3, contractAddressList, gasAmount, users);


app.listen(serverPort, () => {
    console.log('RESTful server listening on port: ' + serverPort + ' ...\n' + 
    'Blockchain is connected: ' + web3.isConnected() + '\n');
});