'use strict';

var config = require('./config');
var loaders = require('./loaders');
var app = require('express')();

async function startServer() {
  await loaders.init(app);
  
  app.listen(config.port, () => {
    console.log('\nServer is up & running at '+ config.host + ':' + config.port + '/api...');
    console.log('Read docs at '+ config.host + ':' + config.port + '/docs');
  });
}

startServer();

module.exports = app; // for testing