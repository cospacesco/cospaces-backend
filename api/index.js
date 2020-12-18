const router = require('express').Router();

const users = require('./routes/users');
const cospaces = require('./routes/cospaces');
const projects = require('./routes/projects');
const tasks = require('./routes/tasks');
const subTasks = require('./routes/sub-tasks');
const engagements = require('./routes/engagements');

router.use('/users', users)
router.use('/cospaces', cospaces)
router.use('/projects', projects)
router.use('/tasks', tasks)
router.use('/sub-tasks', subTasks)
router.use('/engagements', engagements)

module.exports = router;