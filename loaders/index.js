var swaggerExpressLoader = require('./swaggerExpress');
var mongooseLoader = require('./mongoose');

async function init(expressApp) {
    await mongooseLoader();
    await swaggerExpressLoader(expressApp);
}

module.exports = { init }