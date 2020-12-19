const router = require('express').Router();
const projectsSubRouter = require('./projects').subRouter;

router.get('/', async (req,res) => {
    res.json('GET /cospaces');
});

router.post('/', async (req, res) => {
    res.json('POST /cospaces');
});

router.get('/:id', async (req,res) => {
    res.json('GET /cospaces/'+req.params.id);
});

router.post('/:id/members/:userId', async (req, res) => {
    res.json('POST /cospaces/'+req.params.id+'/members/'+req.params.userId);
});

router.get('/findBySlug/:slug', async (req,res) => {
    res.json('GET /cospaces/'+req.params.slug);
});

router.use('/:id/projects', projectsSubRouter);

module.exports = router;