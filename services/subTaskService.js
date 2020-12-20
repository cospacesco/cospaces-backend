const SubTask = require('../models/SubTask');
const Task = require('../models/Task');

async function Create(taskId, subTask) {
    subTask = await SubTask.create(subTask);
    let task = await Task.findOne({ id: taskId });
    task.sub_tasks.push(subTask);
    await task.save();
    return subTask.toApiSubTaskSchema();
}

module.exports = {
    Create
};