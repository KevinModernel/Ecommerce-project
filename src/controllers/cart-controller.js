const { Carts } = require('../models/cart.js');
const { Orders } = require('../models/order.js');
const { createOrder } = require('../services/carts-services.js')

const showCartProducts = async (req, res) => {
	const carts = await Carts.find();
	let sum = 0;
	for (let i=0; i < carts.length;i++) {	
		sum = sum + carts[i].price*carts[i].quantity;
	};
	res.render('cart', { carts, sum, user: req.user });
};

// To delete cart when delete cart button is hit.
const deleteCart = async (req, res) => {
	await Carts.deleteMany();
	res.redirect("/");
}

const createOrderMW = async (req, res, next) => {
	const products = await Carts.find(); // brings each instance stored in database. [instance1, instance2, ...]
	createOrder(products, req.user.email, req.user.name);
	next();
}
// To delete cart after order is confirmed.
const deleteCartMW = async (req, res, next) => {
	//await Carts.deleteMany();
	next();
}

module.exports = { showCartProducts, deleteCart, createOrderMW, deleteCartMW }