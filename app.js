var express = require('express');
var app = express();
var apiController = require('./BlockchainDEVNET/apiController');
var chainPort = 5434;
var serverPort = 3333;

apiController(app);

app.listen(serverPort, () => {
    console.log('Server listening on port: ' + serverPort + ' ...\n');
});