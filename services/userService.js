const User = require('../models/User');

async function Create(user) {
    return (await User.create(user)).toApiUserSchema();
}

module.exports = {
    Create
};