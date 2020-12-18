const router = require('express').Router();

router.get('/', async (req,res) => {
    res.json('GET /users');
});

router.post('/', async (req, res) => {
    res.json('POST /users');
});

router.get('/:id', async (req,res) => {
    res.json('GET /users/'+req.params.id);
});

router.get('/findByUsername/:username', async (req,res) => {
    res.json('GET /users/'+req.params.username);
});

module.exports = router;