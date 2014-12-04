var express = require('express'),
  mongoose = require('mongoose'),
  config = require('./config/config');

mongoose.connect(config.db);

var db = mongoose.connection;

db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});


var app = express();

require('./config/express')(app, config);
app.listen(config.port);
