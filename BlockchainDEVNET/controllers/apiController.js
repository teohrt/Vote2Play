module.exports = function(app, web3, contractAddressList) {

    var bodyParser = require('body-parser');
    var compileContract = require('../scripts/compileContract')(web3, contractAddressList);
    var chainInfo = require('../scripts/chainInfo')(web3);
    var check = require('../scripts/check')(web3, contractAddressList);
    var add = require('../scripts/add')(web3, contractAddressList);
    var addX = require('../scripts/addX')(web3, contractAddressList);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    // Logs requests for dev purposes
    app.use('/', (req, res, next) => {
        console.log('Request Url: ' + req.url);
        next();
    });

    // Returns helpful chain data
    app.get('/', (req, res) => {
        res.send(chainInfo.getStatus());
    });
    
    // Compiles smart contract, deploys it and then returns the mined address
    app.get('/compile', (req, res) => {
        compileContract.create()
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });

    // Returns list of smart contract blockchain addresses and their ABI's
    app.get('/list', (req, res) => {
        res.send(contractAddressList);
    });

    // Adds 1 to the contract's counter
    app.get('/add', (req, res) => {
        add.add()
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });

    // Adds a varialbe value to the contract's counter
    app.get('/addX/:number', (req, res) => {
        var number = req.params.number;
        addX.addX(number)
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });
    
    // Returns the amount the contract has been added to
    app.get('/check', (req, res) => {
        check.check()
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });
};