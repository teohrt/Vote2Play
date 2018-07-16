module.exports = function(app, web3, contractAddressList) {

    var bodyParser = require('body-parser');
    var compileContract = require('../scripts/compileContract')(web3, contractAddressList);
    var chainInfo = require('../scripts/chainInfo')(web3);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    // logs requests for dev purposes
    app.use('/', (req, res, next) => {
        console.log('Request Url: ' + req.url);
        next();
    });

    // returns helpful chain data
    app.get('/', (req, res) => {
        res.send(chainInfo.getStatus());
    });
    
    // compiles smart contract, deploys it and then returns the mined address
    app.get('/compile', (req, res) => {
        compileContract.create()
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });

    // returns list of smart contract blockchain addresses
    app.get('/list', (req, res) => {
        res.send(contractAddressList);
    });

    app.get('/add', (req, res) => {
        res.send('Simple API implementation');
    });

    app.get('/check', (req, res) => {
        res.send('Simple API implementation');
    });
};