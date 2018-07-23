module.exports = function(app, web3, contractAddressList, gasAmount) {    

    var bodyParser = require('body-parser');
    
    var chainInfo = require('../scripts/chainInfo')(web3);
    var compileContract = require('../scripts/compileContract')(web3, contractAddressList, gasAmount);
    var getTotalVotes = require('../scripts/getTotalVotes')(web3, contractAddressList, gasAmount);
    var vote = require('../scripts/vote')(web3, contractAddressList, gasAmount);
    var getVotesFor = require('../scripts/getVotesFor')(web3, contractAddressList, gasAmount);
    var changeVote = require('../scripts/changeVote')(web3, contractAddressList, gasAmount);
    var getVoterList = require('../scripts/getVoterList')(web3, contractAddressList, gasAmount);
    var getResponseCounts = require('../scripts/getResponseCounts')(web3, contractAddressList, gasAmount);
    var getVoterHistory = require('../scripts/getVoterHistory')(web3, contractAddressList, gasAmount);

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
    
    // Returns list of smart contract blockchain addresses and their ABI's
    app.get('/list', (req, res) => {
        res.send(contractAddressList);
    });

    // postman example:
    // {
    //     "itemID": "test contract",
    //     "responses": ["test1", "test2"]
    // }
    // Compiles smart contract, deploys it and then returns the mined address
    app.post('/compile', (req, res) => {
        compileContract.create(req.body.itemID, req.body.responses)
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });

    // TODO: Impliment dynamic voters
    // 
    // Votes on a contract according to the sent response
    app.post('/vote/', (req, res) => {
        vote.vote(req.body.response, req.body.contractAddress)
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });

    // Returns amount of total votes on a contract
    app.post('/getTotalVotes', (req, res) => {
        getTotalVotes.check(req.body.contractAddress)
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });

    // Returns amount of votes for a specific response of an item
    app.post('/getVotesFor', (req, res) => {
        getVotesFor.check(req.body.response, req.body.contractAddress)
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });

    // TODO: Impliment dynamic voters
    // 
    // Changes previous vote value
    app.post('/changeVote', (req, res) => {
        changeVote.change(req.body.response, req.body.contractAddress)
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });

    // Returns voter addresses for an item
    app.post('/getVoterList', (req, res) => {
        getVoterList.check(req.body.contractAddress)
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });

    // Returns counts for the different responses of an item
    app.post('/getResponseCounts', (req, res) => {
        getResponseCounts.check(req.body.contractAddress)
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });

    // Returns voter addresses and their associated response values
    app.post('/getVoterHistory', (req, res) => {
        getVoterHistory.check(req.body.contractAddress)
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });
};

// TODO LIST:
// Dynamic Voters
// Account creation