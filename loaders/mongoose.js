var config = require('../config');
var mongoose = require('mongoose');

async function connectDB() {    
    console.log("\nConnecting to MongoDB Atlas...")

    await mongoose.connect(config.databaseURL, {useNewUrlParser: true, useUnifiedTopology: true,})

    console.log("Connected Successfully to MongoDB Atlas")
}

module.exports = connectDB;