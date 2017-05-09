'use strict';

const mongoose = require('mongoose');
let config = require('../config/database');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://' + (process.env.MONGODB_ADDRESS || 'localhost') + ':27017' + config.dbName);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log(`Connected to the ${config.dbName} database`);
});