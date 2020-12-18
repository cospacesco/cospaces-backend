const router = require('express').Router();
const tasksSubRouter = require('./tasks').subRouter;
const subRouter = require('express').Router({ mergeParams: true });

router.get('/', async (req,res) => {
    res.json('GET /projects');
});

router.get('/:id', async (req,res) => {
    res.json('GET /projects/'+req.params.id);
});

router.use('/:id/tasks', tasksSubRouter);

subRouter.post('/', async (req, res) => {
    res.json('POST /cospaces/'+req.params.id+'/projects');
});

module.exports = router;
module.exports.subRouter = subRouter;