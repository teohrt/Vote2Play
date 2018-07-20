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
    
    // Compiles smart contract, deploys it and then returns the mined address
    // GET: Hard coded values for testing
    app.get('/compile', (req, res) => {
        var itemID = "Trace is cool";
        var response1 = "lol";
        var response2 = "bad joke";
        var responses = [response1, response2];

        compileContract.create(itemID, responses)
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });

    // postman example:
    // {
    //     "itemID": "test contract",
    //     "responses": ["test1", "test2"]
    // }
    //
    // TODO: Implement dynamic contracts
    //
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
    
    // TODO: Impliment dynamic contracts
    //
    // Votes on a contract according to the sent response
    app.post('/vote/', (req, res) => {
        vote.vote(req.body.response)
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });
    
    // TODO: Impliment POST and dynamic contracts
    //
    // Returns amount of total votes on a contract
    app.get('/getTotalVotes', (req, res) => {
        getTotalVotes.check()
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });

    // TODO: Impliment dynamic contracts
    //
    // Returns amount of votes for a response
    app.post('/getVotesFor', (req, res) => {
        getVotesFor.check(req.body.response)
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });

    // TODO: Impliment dynamic contracts
    // 
    // Changes previous vote value
    app.post('/changeVote', (req, res) => {
        changeVote.change(req.body.response)
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });

    // TODO: Impliment POST and dynamic contracts
    // 
    // Returns voter addresses for an item
    app.get('/getVoterList', (req, res) => {
        getVoterList.check()
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });

    // TODO: Impliment POST and dynamic contracts
    // 
    // Returns counts for the different responses of an item
    app.get('/getResponseCounts', (req, res) => {
        getResponseCounts.check()
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });

    // Returns voter addresses and their associated response values
    app.get('/getVoterHistory', (req, res) => {
        getVoterHistory.check()
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });
};