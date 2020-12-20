const router = require('express').Router();
const subTasksSubRouter = require('./sub-tasks').subRouter;
const subRouter = require('express').Router({ mergeParams: true });
const TaskService = require('../../services/taskService');

router.get('/', async (req,res) => {
    res.json('GET /tasks');
});

router.get('/:id', async (req,res) => {
    res.json('GET /tasks/'+req.params.id);
});

router.use('/:id/sub-tasks', subTasksSubRouter);

subRouter.post('/', async (req, res) => res.json(await TaskService.Create(req.params.id, req.body)));

module.exports = router;
module.exports.subRouter = subRouter;