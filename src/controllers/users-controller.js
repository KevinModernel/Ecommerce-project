const { Users } = require('../models/user.js');

const get_landing = (req, res) => {
	res.render('landing', { user: req.user } )
};

const retry_get_landing = (req, res) => {
	res.render('landing', { retryLogIn: true })
};

const login = (req, res) => {
	res.redirect('/products')
};

const show_signup = (req, res) => {
	res.render('../views/signup')
};

const retry_show_signup = (req, res) => {
	res.render('../views/signup', { retrySignUp: true })
};

const signup = (req, res) => {
	res.redirect('/products')
};

const logout = function(req, res) {
	req.logout(function(err) {
		if (err) { return next(err) };
		req.session.destroy();
		res.redirect('/cart/deletecart');
	});
};  



const show_aboutUs = (req, res) => {
	res.render('aboutus', { user: req.user } )
};

const show_contact = (req, res) => {
	res.render('contact', { user: req.user } )
};




module.exports = { get_landing, show_signup, signup, retry_show_signup, show_aboutUs, show_contact, login, retry_get_landing, logout }