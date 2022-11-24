const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    name: String,
    city: String,
    address: String,
	password: String,
});

const Users = mongoose.model("User", UserSchema);

module.exports = { Users }