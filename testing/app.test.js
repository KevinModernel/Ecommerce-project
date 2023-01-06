const app = require('../app.js');
const request = require('supertest');
const { isAdmin } = require('../src/utils/isAdmin.js');

// A rule of thumb, on how to split your tests, might be: CRUD operations can be tested within a single test. 
// All functions providing business logic should be tested separately, as they might change more often and 
// are more complex.


// Small functions like crud operations can be tested with test data defined directly within the test file. 
// Here as well, it might come to the point where you need so much test data, which clutters your tests. 
// You can think about if it is worth moving all test data out into separate files to import from.
// This has the drawback, that you lose the direct view, of how your test data looks like, but you get more 
// overview within the test file on the other hand.

describe('Test Users Routes / GET HTTP REQUEST', () => {

	test("Landing page should respond with a 200 status code", async () => {
	const response = await request(app).get("/").send();
	return expect(response.statusCode).toBe(200);
	});

	test("Sign Up page should respond with a 200 status code", async () => {
	const response = await request(app).get("/signup").send();
	return expect(response.statusCode).toBe(200);
	});	

	test("Retry Sign Up page should respond with a 200 status code", async () => {
	const response = await request(app).get("/retrysignup").send();
	return expect(response.statusCode).toBe(200);
	});

	test("Retry Log In page should respond with a 200 status code", async () => {
	const response = await request(app).get("/retrylogin").send();
	return expect(response.statusCode).toBe(200);
	});

	test("About Us In page should respond with a 200 status code", async () => {
	const response = await request(app).get("/aboutus").send();
	return expect(response.statusCode).toBe(200);
	});

	test("Contact In page should respond with a 200 status code", async () => {
	const response = await request(app).get("/contact").send();
	return expect(response.statusCode).toBe(200);
	});
});

// tendria que hacer tests para el resto de las rutas que no tienen middleware.
