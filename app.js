var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/database');
var api = require('./routes/api');
var passport = require('passport');
var app = express();

require('./database/database');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'api')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(passport.initialize());

app.get('/', function(req, res) {
    res.send('Page under construction.');
});

app.use('/api', api);

var port = 8000;

app.listen(process.env.PORT || port);

module.exports = app;