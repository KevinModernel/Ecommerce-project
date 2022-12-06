const emailNewOrder = (req, res) => {
	console.log("mail enviado");
	res.redirect("/");
};

module.exports = { emailNewOrder }