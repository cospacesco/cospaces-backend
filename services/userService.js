const User = require('../models/User');

async function Create(user) {
    return (await User.create(user)).toApiUserSchema();
}

async function GetUserById(id) {
    let result = await User.findOne({ id });
    return result;
}

module.exports = {
    Create,
    GetById: GetUserById,
    GetUserById,
};
