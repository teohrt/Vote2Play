module.exports = function(app, web3, contractAddressList, gasAmount) {    

    var bodyParser = require('body-parser');
    
    var chainInfo = require('../scripts/chainInfo')(web3);
    var compileContract = require('../scripts/compileContract')(web3, contractAddressList, gasAmount);
    var getTotalVotes = require('../scripts/getTotalVotes')(web3, contractAddressList, gasAmount);
    var vote = require('../scripts/vote')(web3, contractAddressList, gasAmount);
    var getVotesFor = require('../scripts/getVotesFor')(web3, contractAddressList, gasAmount);

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

    // TODO:
    // Impliment POST and remove hardcoded variables
    // Impliment dynamic contracts
    //
    // Compiles smart contract, deploys it and then returns the mined address
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
    
    // TODO:
    // Impliment POST
    // Impliment dynamic contracts
    //
    // Votes on a contract according to the sent response
    app.get('/vote/', (req, res) => {
        var response = "lol";

        vote.vote(response)
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });
    
    // TODO:
    // Impliment POST
    // Impliment dynamic contracts
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

    // TODO:
    // Impliment POST
    // Impliment dynamic contracts
    //
    // Returns amount of votes for a response
    app.get('/getVotesFor', (req, res) => {
        var response = "badjoke";

        getVotesFor.check(response)
        .then(result => {
            res.send({ data: result });
        })
        .catch(error => {
            console.log(error);
        });
    });

    // TODO:
    // ChangeVote
    // GetResponseCounts
    // getVoterHistory
    // getVoterList
};