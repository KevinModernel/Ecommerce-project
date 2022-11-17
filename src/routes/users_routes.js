const express = require('express');
const router = express.Router();
const { get_landing, show_signup, signup, show_adminPanel } = require('../controllers/users-controller.js');


router.get('/', get_landing);
router.get('/signup', show_signup);
router.post('/signup', signup)
router.get('/admin', show_adminPanel);


module.exports = router