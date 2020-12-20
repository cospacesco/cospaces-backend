const Project = require('../models/Project');
const CoSpace = require('../models/CoSpace');

async function Create(coSpaceId, project) {
    project = await Project.create(project);
    let coSpace = await CoSpace.findOne({ id: coSpaceId });
    coSpace.projects.push(project);
    await coSpace.save();
    return project.toApiProjectSchema();
}

module.exports = {
    Create
};