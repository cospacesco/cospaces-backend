'use strict';

var config = require('./config');
var loaders = require('./loaders');
var app = require('express')();

var serverURL = config.host + (config.env=='production' ? '' : ':' + config.port);

async function startServer() {
  await loaders.init(app);
  
  app.listen(config.port, () => {
    console.log('\nServer is up & running at '+ serverURL + '/api...');
    console.log('Read docs at '+ serverURL + '/docs');
  });
}

startServer();

module.exports = app; // for testing