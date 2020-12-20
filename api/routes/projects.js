const router = require('express').Router();
const tasksSubRouter = require('./tasks').subRouter;
const subRouter = require('express').Router({ mergeParams: true });
const ProjectService = require('../../services/projectService');

router.get('/', async (req,res) => {
    res.json('GET /projects');
});

router.get('/:id', async (req,res) => {
    res.json('GET /projects/'+req.params.id);
});

router.use('/:id/tasks', tasksSubRouter);

subRouter.post('/', async (req, res) => res.json(await ProjectService.Create(req.params.id, req.body)));

module.exports = router;
module.exports.subRouter = subRouter;