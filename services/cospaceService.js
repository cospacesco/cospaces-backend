const CoSpace = require('../models/CoSpace');
const User = require('../models/User');
const { replaceId } = require('../utils');

async function Create(coSpace) {
    let lead_user = await User.findOne({ id: coSpace.lead_user });
    coSpace.lead_user = await replaceId(coSpace.lead_user, 'user');
    coSpace = await CoSpace.create(coSpace);
    lead_user.coSpaces.push(coSpace);
    await lead_user.save();
    return coSpace.toApiCoSpaceSchema();
}

async function AddMember(coSpaceId, userId) {
    let coSpace = await CoSpace.findOne({ id: coSpaceId });
    const memberAlreadyExists = coSpace.members.some(member => member.id == userId);
    if(!memberAlreadyExists) {
        let user = await User.findOne({ id: userId });
        userId = await replaceId(userId, 'user');
        coSpace.members.push(userId);
        coSpace = await coSpace.save();
        user.coSpaces.push(coSpace);
        await user.save();
    }
    return coSpace.toApiAddCoSpaceMemberResponseSchema();
}

module.exports = {
    Create,
    AddMember
};
