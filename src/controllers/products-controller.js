const { createProduct, addToCartDB } = require('../services/products-services.js');
const { Products } = require('../models/product.js');

const show_all_products = async (req, res) => {
	const products = await Products.find();
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
};

const show_category = async (req, res) => {
	const category = req.params.category;
	console.log("category: " + category);
	const products = await Products.find({ category : category })
	res.render('products', { products, user: req.user })
};


module.exports = { show_all_products, show_add_product, addProduct, addToCart, show_category }