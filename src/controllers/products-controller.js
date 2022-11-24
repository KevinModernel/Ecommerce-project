const { createProduct, addToCartDB } = require('../services/products-services.js');
const { Products } = require('../models/product.js');

const show_all_products = async (req, res) => {
	const products = await Products.find();
	//console.log("\nshow all products req.name: " + req.user.name) // te tira undefined req.name, por que?
	res.render('products', { products, user: req.user })
};

const show_add_product = (req, res) => {
	res.render('addProduct', { user: req.user } )
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
	const name = req.body.name;
	const price = req.body.price;
	addToCartDB(name, price);
	//res.get();
};


module.exports = { show_all_products, show_add_product, addProduct, addToCart }