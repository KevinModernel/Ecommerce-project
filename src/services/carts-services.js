const { Orders } = require('../models/order.js');
const { Products } = require('../models/product.js');

class product {
	constructor(name, quantity) {
		this.name = name;
		this.quantity = quantity;
	};
};

const createOrder = async (products, email, name) => {
	let productsList = [];
	for(let i=0; i < products.length; i++ ) {
		productsList.push(
			new product(products[i].name, products[i].quantity)
		);
	};

	const newOrder = {
		email,
		name,
		date: new Date().toLocaleString(),
		products: productsList
	}
	
	try {
		await Orders.create(newOrder);
	} catch (error) {
		console.log('\nError Orders.create: ' + error +'\n');
	}

};

const removeStock = async (cartProducts) => {
	for(let i=0; i < cartProducts.length; i++ ) {
		let productName = cartProducts[i].name
		let product = await Products.findOne({name: productName});
		let productStock = product.quantity;
		let orderQuantity = cartProducts[i].quantity;
		let finalStock = productStock - orderQuantity;
		await Products.findOneAndUpdate({name: cartProducts[i].name}, {quantity: finalStock});	
	};
};

module.exports = { createOrder, removeStock }