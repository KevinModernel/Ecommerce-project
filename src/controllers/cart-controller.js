const { Carts } = require('../models/cart.js');
const { Orders } = require('../models/order.js');

const showCartProducts = async (req, res) => {
	const carts = await Carts.find();
	console.log("\ncarts: " + carts);
	console.log("cart zero: " + carts[0])
	/*
	
	const schemaKeys = Object.keys(carts.toObject());
	console.log(schemaKeys);
	*/
	let sum = 0;
	for (let i=0; i < carts.length;i++) {
		
		sum = sum + carts[i].price*carts[i].quantity;
		console.log("\n \n console in sum: " + sum);
	};
	res.render('cart', { carts, sum });
};

const deleteCart = async (req, res) => {
	await Carts.deleteMany();
	res.redirect("/");
}

const createOrderMW = async (req, res, next) => {
	const products = await Carts.find(); // brings each instance stored in database. [instance1, instance2, ...]
	

	next();
}

const deleteCartMW = async (req, res, next) => {
	next();
}

module.exports = { showCartProducts, deleteCart, createOrderMW, deleteCartMW }