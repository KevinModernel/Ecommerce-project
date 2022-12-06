const { Users } = require('../models/user.js');

const createUser = async (user) => {
	try {
		await Users.create(user);
	} catch (error) {
		console.log('\nError Users.create: ' + error +'\n');
	}
};

module.exports = { createUser }