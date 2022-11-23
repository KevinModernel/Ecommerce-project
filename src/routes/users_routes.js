const express = require('express');
const router = express.Router();
const { get_landing, show_signup, signup, show_adminPanel, show_aboutUs, show_contact } = require('../controllers/users-controller.js');


router.get('/', get_landing);
router.get('/signup', show_signup);
router.post('/signup', signup)
router.get('/admin', show_adminPanel);

router.get("/aboutus", show_aboutUs);
router.get("/contact", show_contact);

module.exports = router