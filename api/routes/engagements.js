const router = require('express').Router();
const EngagementService = require('../../services/engagementService');

router.get('/', async (req,res) => {
    res.json('GET /engagements');
});

router.post('/', async (req, res) => res.json(await EngagementService.Create(req.body)));

router.get('/:id', async (req,res) => {
    res.json('GET /engagements/'+req.params.id);
});

module.exports = router;