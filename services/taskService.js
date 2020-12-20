const Task = require('../models/Task');
const Project = require('../models/Project');

async function Create(projectId, task) {
    task = await Task.create(task);
    let project = await Project.findOne({ id: projectId });
    project.tasks.push(task);
    await project.save();
    return task.toApiTaskSchema();
}

module.exports = {
    Create
};