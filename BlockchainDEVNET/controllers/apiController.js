var bodyParser = require('body-parser');

module.exports = function(app, web3) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    app.get('/', function(req, res) {
        res.send('Simple API implementation');
    });
};