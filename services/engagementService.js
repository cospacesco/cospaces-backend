const Engagement = require('../models/Engagement');
const UserService = require('../services/userService');
const SubTaskService = require('../services/subTaskService');
const { replaceId } = require('../utils');

async function Create(engagement) {
    engagement.user = await replaceId(engagement.user, UserService);
    engagement.sub_task = await replaceId(engagement.sub_task, SubTaskService);
    return (await Engagement.create(engagement)).toApiEngagementSchema();
}

module.exports = {
    Create
};