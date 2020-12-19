const CoSpace = require('../models/CoSpace');
const User = require('../models/User');
const UserService = require('../services/userService');
const { replaceId } = require('../utils');

async function Create(coSpace) {
    let lead_user = await User.findOne({ id: coSpace.lead_user });
    coSpace.lead_user = await replaceId(coSpace.lead_user, UserService);
    coSpace = await CoSpace.create(coSpace);
    lead_user.coSpaces.push(coSpace);
    await lead_user.save();
    return coSpace.toApiCoSpaceSchema();
}

module.exports = {
    Create
};
