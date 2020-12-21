const User = require('../models/User');
const Engagement = require('../models/Engagement');
const { checkAndAddToArray, getObjectByObjectId, getParentByChildObjectId, getObjectsByObjectId } = require('../utils');

async function Create(user) {
    return (await User.create(user)).toApiUserSchema();
}

async function GetObjectId(id) {
    return (await User.findOne({ id }, '_id'))._id;
}

async function GetUserById(id) {
    let user = (await User.findOne({ id })).toApiUserSchema();
    
    let coSpaces = [];
    for (coSpaceObjectId of user.coSpaces) {
        let coSpace = await getObjectByObjectId(coSpaceObjectId, 'coSpace');
        coSpace.projects = []
        coSpaces.push(coSpace);
    }
    user.coSpaces = coSpaces;

    let userEngagements = await getObjectsByObjectId(await GetObjectId(user.id), 'engagement');

    let userSubTasks = []
    for (engagement of userEngagements) {
        let subTask = await getObjectByObjectId(engagement.sub_task.id, 'subTask');
        subTask.engagement = Engagement.toApiEngagementSlimSchema(engagement);
        userSubTasks.push(subTask);
    }

    let userTasks = []
    for (subTask of userSubTasks) { 
        let task = await getParentByChildObjectId(subTask.id, 'subTask')
        userTasks = checkAndAddToArray(userTasks, task, 'sub_tasks', subTask);
    }

    let userProjects = []
    for (task of userTasks) {
        let project = await getParentByChildObjectId(task.id, 'task');
        userProjects = checkAndAddToArray(userProjects, project, 'tasks', task);
    }

    for (project of userProjects) {
        let coSpace = await getParentByChildObjectId(project.id, 'project');
        user.coSpaces = checkAndAddToArray(user.coSpaces, coSpace, 'projects', project);
    }

    return user;
}

module.exports = {
    Create,
    GetObjectId,
    GetUserById,
};
