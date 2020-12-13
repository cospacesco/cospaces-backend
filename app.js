'use strict';

var loaders = require('./loaders');
var app = require('express')();

async function startServer() {
  await loaders.init(app);
  
  var port = process.env.PORT || 10010;
  
  app.listen(port, () => {
    console.log('\nServer is up & running at http://127.0.0.1:' + port + '/api...');
    console.log('Read docs at http://127.0.0.1:' + port + '/docs');
  });
}

startServer();

module.exports = app; // for testing