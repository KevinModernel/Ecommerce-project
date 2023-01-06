const { Products } = require('../models/product.js');
const { Carts } = require('../models/cart.js');


const createProduct = async (product) => {
	try {
		await Products.create(product);
	} catch (error) {
		console.log('\nError in createProduct Service: ' + error +'\n');
	}
};

const addToCartDB = async (name, price) => {
	try {
		const result = await Carts.find({ name: name }).lean();
		if (result.length == 1) { // Si el producto ya está en el cart, suma 1.
			const cantidad = result[0].quantity;
			await Carts.findOneAndUpdate( {name: result[0].name }, {quantity: cantidad + 1}, {price: price});
		} else { // Si el producto no esta en el cart, lo crea.
			await Carts.create( {name: name, quantity: 1, price: price});
		};
	} catch (error) {
		console.log("Error addToCartDB: " + error)}
};


module.exports = { createProduct, addToCartDB };