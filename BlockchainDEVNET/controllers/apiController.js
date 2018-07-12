var bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    app.get('/', function(req, res) {
        console.log()
        res.send('Simple API implementation')
    });
};