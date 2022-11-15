const express = require('express');
const router = express.Router();
const { get_landing, show_signup, signup } = require('../controllers/users-controller.js');


router.get('/', get_landing);
router.get('/signup', show_signup);
router.post('/signup', signup)


module.exports = router