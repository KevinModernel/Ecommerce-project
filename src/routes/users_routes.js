const express = require('express');
const router = express.Router();
const passport = require('passport');
const { get_landing, show_signup, signup, show_adminPanel, show_aboutUs, show_contact, retry_show_signup, login, retry_get_landing, logout } = require('../controllers/users-controller.js');


router.get('/', get_landing);

router.get('/signup', show_signup);
router.post('/signup', passport.authenticate('register', { failureRedirect: '/retrysignup' }), signup)
router.get('/retrysignup', retry_show_signup);

router.post('/login', passport.authenticate('login', { failureRedirect: '/retrylogin' }), login)
router.get('/retrylogin', retry_get_landing)

router.get('/logout', logout)

router.get('/admin', show_adminPanel);

router.get("/aboutus", show_aboutUs);
router.get("/contact", show_contact);

module.exports = router