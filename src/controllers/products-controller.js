const { Products } = require('../models/product.js')

const show_all_products = (req, res) => {
	res.render('products')
};

const show_add_product = (req, res) => {
	res.render('addProduct')
};

const addProduct = async (req, res) => {
	console.log("\n console log linea 12 add product: name" + req.body.name);
	const product = {
		name: req.body.name,
		category: req.body.category,
		description: req.body.description,
		price: req.body.price,
		quantity: req.body.quantity,
		image: req.body.image
	}
	try {
		await Products.create(product);
	} catch (error) {
		console.log('\nError Products.create: ' + error +'\n');
	}
	console.log('Console.log linea 25 product controller: ' + product.name + product.image + product.price);
	res.redirect('/products');	
};



module.exports = { show_all_products, show_add_product, addProduct }