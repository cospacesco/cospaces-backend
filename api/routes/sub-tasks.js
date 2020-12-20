const router = require('express').Router();
const subRouter = require('express').Router({ mergeParams: true });
const SubTaskService = require('../../services/subTaskService');

router.get('/', async (req,res) => {
    res.json('GET /sub-tasks');
});

router.get('/:id', async (req,res) => {
    res.json('GET /sub-tasks/'+req.params.id);
});

subRouter.post('/', async (req, res) => res.json(await SubTaskService.Create(req.params.id, req.body)));

module.exports = router;
module.exports.subRouter = subRouter;