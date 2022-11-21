const { createProduct, addToCartDB } = require('../services/products-services.js');
const { Products } = require('../models/product.js');

const show_all_products = async (req, res) => {
	const products = await Products.find();
	//for (product in await Products.find()) {
	//	console.log("\n console log linea 6 product controller: " + product)
	//};
	// console.log("\n console log linea 8: " + products)
	res.render('products', { products })
};

const show_add_product = (req, res) => {
	res.render('addProduct')
};

const addProduct = (req, res) => {
	const product = {
		name: req.body.name,
		category: req.body.category,
		description: req.body.description,
		price: req.body.price,
		quantity: req.body.quantity,
		image: req.body.image
	};
	createProduct(product);
	res.redirect('/products');	
};

const addToCart = (req, res) => {
	const product = req.body.product
	addToCartDB(product);
	//res.get();
};


module.exports = { show_all_products, show_add_product, addProduct, addToCart }