const config = require('../config');
const api = require('../api');
const bodyParser = require('body-parser');
const cors = require('cors');

function initServer(expressApp) {
  console.log("\nInitializing Express Server...")

  expressApp.use(cors());
  expressApp.use(bodyParser.json());
  expressApp.use(config.api.prefix, api);
  
  console.log("Express Server initialized")
}

module.exports = initServer;