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


module.exports = { get_landing, show_signup, signup, show_adminPanel }