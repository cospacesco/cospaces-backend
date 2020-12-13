var dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.PORT,
    databaseURL: process.env.MONGODB_ATLAS_URI
}