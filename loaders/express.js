const config = require('../config');
const api = require('../api');
const bodyParser = require('body-parser');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./api/swagger/swagger.yaml');

var swaggerUiOptions = {
  customCss: 'div.swagger-ui > div { max-width:960px; margin:auto; } .swagger-ui .topbar { display: none }'
};

function initServer(expressApp) {
  console.log("\nInitializing Express Server...")

  expressApp.use(cors());
  expressApp.use(bodyParser.json());
  expressApp.use(config.api.prefix, api);
  
  // Serve Swagger UI
  expressApp.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerUiOptions));

  console.log("Express Server initialized")
}

module.exports = initServer;