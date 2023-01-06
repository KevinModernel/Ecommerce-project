const app = require('../app.js');
const request = require('supertest');
const { isAdmin } = require('../src/utils/isAdmin.js');

// TESTS OK
describe('Test isAdmin middleware. Being an Admin', () => {

	const mockReq = () => {
  		let req = {};
  		req.user = {isAdmin: 'true'};
  		return req;
	};

	const mockRes = () => {
	    const res = {};
	    res.status = jest.fn().mockReturnValue(res);
	    res.json = jest.fn().mockReturnValue(res);
	    return res;
	};

	test("IsAdmin MW should respond with next.", async() => {
		const mockedNext = jest.fn(() => "next");
    	const mockedReq = mockReq();
    	const mockedRes = mockRes();		

    	const result = isAdmin(mockedReq, mockedRes, mockedNext);
    	return expect(result).toBe("next");
	});
});
// TESTS OK
describe('Test isAdmin middleware. Logged but not being and Admin', () => {

	const mockReq = () => {
  		let req = {};
  		req.user = {isAdmin: 'false'};
  		return req;
	};

	const mockRes = () => {
	    const res = {};
	    res.redirect = jest.fn().mockReturnValue("notFound");
	    return res;
	};

	test("IsAdmin MW should redirect to not found.", async() => {
		const mockedNext = jest.fn(() => "next");
    	const mockedReq = mockReq();
    	const mockedRes = mockRes();		

    	const result = isAdmin(mockedReq, mockedRes, mockedNext);
    	return expect(result).toBe("notFound");
	});
});
// TESTS OK
describe('Test isAdmin middleware. Not logged in', () => {
	const mockReq = () => {
  		let req = {};
  		return req;
	};

	const mockRes = () => {
	    const res = {};
	    res.redirect = jest.fn().mockReturnValue("notFound");
	    return res;
	};

	test("IsAdmin MW should redirect to not found.", async() => {
		const mockedNext = jest.fn(() => "next");
    	const mockedReq = mockReq();
    	const mockedRes = mockRes();		

    	const result = isAdmin(mockedReq, mockedRes, mockedNext);
    	return expect(result).toBe("notFound");
	});
});