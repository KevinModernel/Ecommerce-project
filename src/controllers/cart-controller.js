const { Carts } = require('../models/cart.js');


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

module.exports = { showCartProducts, deleteCart }