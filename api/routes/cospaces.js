const router = require('express').Router();
const projectsSubRouter = require('./projects').subRouter;
const CoSpaceService = require('../../services/cospaceService');

router.get('/', async (req,res) => {
    res.json('GET /cospaces');
});

router.post('/', async (req, res) => res.json(await CoSpaceService.Create(req.body)));

router.get('/:id', async (req,res) => {
    res.json('GET /cospaces/'+req.params.id);
});

router.post('/:id/members/:userId', async (req, res) => res.json(await CoSpaceService.AddMember(req.params.id, req.params.userId)));

router.get('/findBySlug/:slug', async (req,res) => {
    res.json('GET /cospaces/'+req.params.slug);
});

router.use('/:id/projects', projectsSubRouter);

module.exports = router;