const { Orders } = require('../models/order.js');

const show_orders = async (req, res) => {
	const ordersStored = await Orders.find();
	res.render('orders', { ordersStored });
};

const updateStatus = async (req, res) => {
	const idOrder = req.params.id;
	await Orders.updateOne({ _id: idOrder }, {status: "Entregado"})
	res.redirect('/admin/orders');
};


module.exports = { show_orders, updateStatus }