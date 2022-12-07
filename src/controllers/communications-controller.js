const { deliverMail } = require('../services/communications-service.js')

const emailNewOrder = async (req, res) => {
	await deliverMail(`Nueva orden de: ...`, 'body');
	console.log("mail enviado");
	res.redirect("/");
};

module.exports = { emailNewOrder }