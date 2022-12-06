const { Orders } = require('../models/order.js');

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

module.exports = { createOrder }