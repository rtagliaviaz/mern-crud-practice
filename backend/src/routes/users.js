const {Router}= require('express');
const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/usersController');

//initialize
const router = Router();

router.route('/')
  .get(getUsers)
  .post(createUser)

router.route('/:id')  
  .delete(deleteUser)

module.exports = router;