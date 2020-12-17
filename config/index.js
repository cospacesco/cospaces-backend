var dotenv = require('dotenv');

dotenv.config();

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    host: process.env.HOSTNAME,
    databaseURL: process.env.MONGODB_ATLAS_URI,
    api: {
        prefix: '/api'
    }
}