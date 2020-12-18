const router = require('express').Router();
const subRouter = require('express').Router({ mergeParams: true });

router.get('/', async (req,res) => {
    res.json('GET /sub-tasks');
});

router.get('/:id', async (req,res) => {
    res.json('GET /sub-tasks/'+req.params.id);
});

subRouter.post('/', async (req, res) => {
    res.json('POST /tasks/'+req.params.id+'/sub-tasks');
});

module.exports = router;
module.exports.subRouter = subRouter;