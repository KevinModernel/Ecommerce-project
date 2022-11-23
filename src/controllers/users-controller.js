const get_landing = (req, res) => {
	res.render('landing')
};

const show_signup = (req, res) => {
	res.render('../views/signup')
};

const signup = (req, res) => {
	res.redirect('/products')
};

const show_adminPanel = (req, res) => {
	res.render('admin')
};

const show_aboutUs = (req, res) => {
	res.render('aboutus')
};

const show_contact = (req, res) => {
	res.render('contact')
};




module.exports = { get_landing, show_signup, signup, show_adminPanel, show_aboutUs, show_contact }