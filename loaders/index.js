var swaggerExpressLoader = require('./swaggerExpress');

async function init(expressApp) {
    await swaggerExpressLoader(expressApp);
}

module.exports = { init }