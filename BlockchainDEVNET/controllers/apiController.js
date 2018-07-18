module.exports = function(app, web3, contractAddressList) {

    var bodyParser = require('body-parser');
    var compileContract = require('../scripts/compileContract')(web3, contractAddressList);
    var chainInfo = require('../scripts/chainInfo')(web3);
    var getTotalVotes = require('../scripts/getTotalVotes')(web3, contractAddressList);
    var vote = require('../scripts/vote')(web3, contractAddressList);

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
        var itemID = web3.fromAscii("Trace is cool");
        var response1 = web3.fromAscii("lol");
        var response2 = web3.fromAscii("bad joke");
        var responses = [response1, response2];

        compileContract.create(itemID, responses)
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

    // Adds a varialbe value to the contract's counter
    app.get('/vote/:number', (req, res) => {
        var number = req.params.number;
        vote.vote(number)
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });
    
    // Returns the amount the contract has been added to
    app.get('/getTotalVotes', (req, res) => {
        getTotalVotes.check()
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });
};