const app = require('../app.js');
const request = require('supertest');
const mongoose = require('mongoose');
const { isAdmin } = require('../src/utils/isAdmin.js');
const { Products } = require('../src/models/product.js');


beforeAll(() => {
	// Innitialize Express Server
	const PORT = process.env.PORT || 3000
	try {
		let server = app.listen(PORT);
		console.log("Express running on port: " + PORT);
	} catch (e) {
		console.error('Unable to stablish server: ', e);
	};
	// Connect to DB
	mongoose.connect('mongodb+srv://mongodbuser:mongo123@cluster0.kp6gl82.mongodb.net/?retryWrites=true&w=majority',
		 {
		 	useNewUrlParser: true
		 })
			.then(db => console.log('DB is connected'))
			.catch(err => console.error(err));
});

jest.mock('../src/utils/isAdmin.js');
jest.setTimeout(10000);

//
// Happy tests
//

describe('Test Admin Routes / GET HTTP REQUEST / Logged being an admin', () => {

	isAdmin.mockImplementation((req, res, next) => {
		return next();
	});

	test("Admin Panel should respond with a 200 status code", async () => {
		const response = await request(app).get("/admin").send();
		return expect(response.statusCode).toBe(200);
	});

	test("Admin Add Product Panel should respond with a 200 status code", async () => {
		const response = await request(app).get("/admin/addproduct").send();
		return expect(response.statusCode).toBe(200);
	});

	test("Admin Orders Panel should respond with a 200 status code", async () => {
		const response = await request(app).get("/admin/orders").send();
		return expect(response.statusCode).toBe(200);
	});

	test("Admin Edit Products Panel should respond with a 200 status code", async () => {
		const response = await request(app).get("/admin/edit").send();
		return expect(response.statusCode).toBe(200);
	});

	test("Admin Critical Products Panel should respond with a 200 status code", async () => {
		const response = await request(app).get("/admin/critical").send();
		return expect(response.statusCode).toBe(200);
	});

	test("Admin Restock Product Panel should respond with a 200 status code", async () => {
		const response = await request(app).get("/admin/restock").send();
		return expect(response.statusCode).toBe(200);
	});
});

describe('Test Admin Routes / POST HTTP REQUEST / Logged being an admin', () => {
	isAdmin.mockImplementation((req, res, next) => {
		return next();
	});

	const product = {
		name: "TestingProductName",
		category: "TestingProductCat",
		description: "TestingProductDesc",
		price: 9999,
		quantity: 9999,
		image: "TestingProductImage"
	};

	test("Admin Add Product Panel should add a product and respond with a 302 status code", async () => {
		// Checks how many documents are in products schema.		
		const count = await Products.count();

		const response = await request(app).post("/admin/addproduct").send(product);
		// Checks how many documents are after post new test product.
		const newCount = await Products.count();
		// Delete test posted product
		await Products.findOneAndRemove( {name: "TestingProductName"} )
		expect(newCount).toBe(count + 1);
		expect(response.statusCode).toBe(302);
	});

	test("Admin Edit Product Panel should add a edited product to DB and respond with a 302 status code", async () => {
		// Edited product, it changes product name to compare later.
		const editedProduct = {
			name: "TestingEditedProductName",
			category: "TestingProductCat",
			description: "TestingProductDesc",
			price: 9999,
			quantity: 9999,
			image: "TestingProductImage"
		};
		// Post test Product
		await request(app).post("/admin/addproduct").send(product);
		// Get _id of Posted product
		const postedProduct = await Products.findOne( {name: "TestingProductName" });
		const id = postedProduct._id;
		// Post edited Product, to update product name.
		const response = await request(app).post(`/admin/edit/${id}`).send(editedProduct);
		// Get product name through id, then store name and check whether it was edited or not.
		const newProduct = await Products.findOne( {_id: id} )
		const newName = newProduct.name
		expect(newName).toBe("TestingEditedProductName");
		expect(response.statusCode).toBe(302);
		// Delete test posted product
		await Products.findOneAndRemove( {name: "TestingEditedProductName"} )
	});

	test("Admin Delete Product Panel should delete a product to DB and respond with a 302 status code", async () => {
		// Post test Product
		await request(app).post("/admin/addproduct").send(product);
		
		// Get autogenerated _id of Posted product
		const postedProduct = await Products.findOne( {name: "TestingProductName" });
		const id = postedProduct._id;
		// Count how many products are.
		const count = await Products.count();
		// Post to delete added product.
		const response = await request(app).post(`/admin/delete/${id}`).send();
		// Count again how many products are.
		const newCount = await Products.count();

		expect(newCount).toBe(count - 1);
		expect(response.statusCode).toBe(302);
	});

	test("Admin Restock Panel should update stock in DB and respond with a 302 status code", async () => {
		// Post test Product
		await request(app).post("/admin/addproduct").send(product);

		// Get autogenerated _id of Posted product
		const postedProduct = await Products.findOne( {name: "TestingProductName" } );
		const id = postedProduct._id;
		// Current stock, before update.
		const stock = product.quantity;
		// Add 10 units to stock.
		const updateStock = { restock: 10 };
		// Post to update stock.
		const response = await request(app).post(`/admin/restock/${id}`).send(updateStock);		

		// Get again test product. and its new stock.
		const updatedProduct = await Products.findOne( {name: "TestingProductName" } );
		const updatedStock = updatedProduct.quantity;

		// Delete test posted product
		await Products.findOneAndRemove( {name: "TestingProductName"} )

		expect(updatedStock).toBe(stock + updateStock.restock);
		expect(response.statusCode).toBe(302);
	});
});


//
// Unhappy tests
//

describe('Test Admin Routes / POST HTTP REQUEST / Logged being an admin / Sending corrupted data', () => {
	isAdmin.mockImplementation((req, res, next) => {
		return next();
	});

	const product = {
		name: "TestingProductName",
		category: "TestingProductCat",
		description: "TestingProductDesc",
		price: "asd",
		quantity: "asd",
		image: "TestingProductImage"
	};

	test("Admin Add Product Panel shouldnt add a product, thrown an error in console and redirect to /notfound", async () => {
		// Checks how many documents are in products collection.		
		const count = await Products.count();
		const response = await request(app).post("/admin/addproduct").send(product);
		// Checks how many documents are after post new test product.
		const newCount = await Products.count();

		expect(newCount).toBe(count);
		expect(response.text).toBe("Found. Redirecting to /notfound");
	});

	test("Admin Edit Product Panel shouldnt add a product, thrown an error in console and redirect to /notfound", async () => {
		// Legit product, to post it in DB and then try to modify it with corrupted data.
		const legitProduct = {
			name: "TestingProductName",
			category: "TestingProductCat",
			description: "TestingProductDesc",
			price: 999,
			quantity: 999,
			image: "TestingProductImage"
		};		
		// Edited product, it has corrupted price and quantity.
		const corruptedProduct = {
			name: "TestingEditedProductName",
			category: "TestingProductCat",
			description: "TestingProductDesc",
			price: "asd",
			quantity: "asd",
			image: "TestingProductImage"
		};
		// Post legit test product.
		await request(app).post("/admin/addproduct").send(legitProduct);
		// Get autogenerated _id of Posted product
		const postedProduct = await Products.findOne( {name: "TestingProductName" } );
		const id = postedProduct._id;
		// Try to post corrupted product.
		const response = await request(app).post(`/admin/edit/${id}`).send(corruptedProduct);
		expect(response.text).toBe("Found. Redirecting to /notfound");
		// Delete test posted product
		await Products.findOneAndRemove( {name: "TestingProductName"} )
	});
});