const router = require('express').Router();
const UserService = require('../../services/userService');

router.get('/', async (req,res) => {
    res.json('GET /users');
});

router.post('/', async (req, res) => res.json(await UserService.Create(req.body)));

router.get('/:id', async (req,res) => res.json(await UserService.GetUserById(req.params.id)));

router.get('/findByUsername/:username', async (req,res) => {
    res.json('GET /users/'+req.params.username);
});

module.exports = router;