const express = require('express');
const { createUser ,getUser ,updateUser  ,deleteUser} = require('../controllers/userController');
const router = express.Router();
// Define route for creating a user
router.post('/create', createUser);
router.get('/', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports = router;
