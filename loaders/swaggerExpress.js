var SwaggerExpress = require('swagger-express-mw');

var swaggerConfig = {
  appRoot: __dirname+"/../" // required config
};

async function createServer(expressApp) {
    SwaggerExpress.create(swaggerConfig, function(err, swaggerExpress) {
      console.log("\nInitializing Swagger Express Server...")

      if (err) { throw err; }
    
      // Also serve the Swagger API docs and Swagger UI
      expressApp.use(swaggerExpress.runner.swaggerTools.swaggerUi());
    
      // install middleware
      swaggerExpress.register(expressApp);

      console.log("Swagger Express Server initialized")

      return expressApp;
    });
}

module.exports = createServer;