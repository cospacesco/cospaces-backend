var expressLoader = require('./express');
var mongooseLoader = require('./mongoose');

async function init(expressApp) {
    await mongooseLoader();
    expressLoader(expressApp);
}

module.exports = { init }