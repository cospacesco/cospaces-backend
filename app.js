'use strict';

var config = require('./config');
var loaders = require('./loaders');
var app = require('express')();

async function startServer() {
  await loaders.init(app);
  
  app.listen(config.port, () => {
    console.log('\nServer is up & running at http://127.0.0.1:' + config.port + '/api...');
    console.log('Read docs at http://127.0.0.1:' + config.port + '/docs');
  });
}

startServer();

module.exports = app; // for testing