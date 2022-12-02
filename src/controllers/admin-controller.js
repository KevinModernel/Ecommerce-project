const { Orders } = require('../models/order.js');
const { Products } = require('../models/product.js'); 

const show_orders = async (req, res) => {
	const ordersStored = await Orders.find();
	res.render('orders', { ordersStored });
};

const updateStatus = async (req, res) => {
	const idOrder = req.params.id;
	await Orders.updateOne({ _id: idOrder }, {status: "Entregado"})
	res.redirect('/admin/orders');
};

const showCritical = async (req, res) => {
	const criticalStock = await Products.find({ quantity: { $lt: 5} });
	console.log("CriticalStock: " + criticalStock);
	res.render('critical');
};


module.exports = { show_orders, updateStatus, showCritical }