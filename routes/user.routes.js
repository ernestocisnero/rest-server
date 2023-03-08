const { Router } = require('express');
const { getUsers, postUsers, putUsers, patchUser, deleteUser } = require('../controllers/user.controller');


const router = Router();

router.get('/', getUsers )

router.post('/', postUsers )

router.put('/:_id', putUsers)

router.patch('/:_id', patchUser)

router.delete('/:_id', deleteUser)

module.exports = router;