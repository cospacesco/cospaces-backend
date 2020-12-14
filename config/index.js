var dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT,
    host: process.env.HOSTNAME,
    databaseURL: process.env.MONGODB_ATLAS_URI
}