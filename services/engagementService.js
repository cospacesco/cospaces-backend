const Engagement = require('../models/Engagement');
const { replaceId } = require('../utils');

async function Create(engagement) {
    engagement.user = await replaceId(engagement.user, 'user');
    engagement.sub_task = await replaceId(engagement.sub_task, 'subTask');
    return (await Engagement.create(engagement)).toApiEngagementSchema();
}

module.exports = {
    Create
};