const User = require('../models/User');
const CoSpace = require('../models/CoSpace');
const Project = require('../models/Project');
const Task = require('../models/Task');
const SubTask = require('../models/SubTask');
const Engagement = require('../models/Engagement');

async function replaceId(id, service) {
    switch (service) {
        case 'user':
            return (await User.findOne({ id }, '_id'))._id;
            break;
        case 'subTask':
            return (await SubTask.findOne({ id }, '_id'))._id;
            break;
    
        default:
            break;
    }
    
}

function checkAndAddToArray(array, newElement, fieldname, loopVar) {
    let existingElem = {};
    existingElem = array.find(elem => elem.id === newElement.id);
    if (!(typeof existingElem === 'undefined')) {
        existingElem[fieldname].push(loopVar);
    } else {
        newElement[fieldname] = [];
        newElement[fieldname].push(loopVar)
        array.push(newElement);
    }
    return array;
}

async function getObjectByObjectId(objectId, model) {
    switch (model) {
        case 'coSpace':
            return (await CoSpace.findById(objectId).select('-projects')).toApiCoSpaceSchema();
            break;
        case 'subTask':
            return (await SubTask.findOne({ 'id': objectId })).toApiSubTaskSchema();
            break;
    
        default:
            break;
    }
    
}

async function getObjectsByObjectId(objectId, model) {
    switch (model) {
        case 'engagement':
            return Engagement.toApiAllEngagementsSchema((await Engagement.find({ user: objectId })));
            break;
    
        default:
            break;
    }
    
}

async function getParentByChildObjectId(objectId, child) {
    switch (child) {
        case 'project':
            return (await CoSpace.findOne().populate({ path: 'projects', match: { 'id': objectId }}));
            break;
        case 'subTask':
            return (await Task.findOne().populate({ path: 'sub_tasks', match: { 'id': objectId }})).toApiTaskSlimSchema();
            break;
        case 'task':
            return (await Project.findOne().populate({ path: 'tasks', match: { 'id': objectId }})).toApiProjectSlimSchema();
            break;
        default:
            break;
    }
    
}

module.exports = {
    replaceId,
    checkAndAddToArray,
    getObjectByObjectId,
    getObjectsByObjectId,
    getParentByChildObjectId
}
