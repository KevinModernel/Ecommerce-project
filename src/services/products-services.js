const { Products } = require('../models/product.js');

const createProduct = async (product) => {
	try {
		await Products.create(product);
	} catch (error) {
		console.log('\nError Products.create: ' + error +'\n');
	}
};

module.exports = { createProduct };