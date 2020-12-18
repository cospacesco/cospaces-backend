const router = require('express').Router();

router.get('/', async (req,res) => {
    res.json('GET /engagements');
});

router.post('/', async (req, res) => {
    res.json('POST /engagements');
});

router.get('/:id', async (req,res) => {
    res.json('GET /engagements/'+req.params.id);
});

module.exports = router;