require('dotenv').config();
const app = require('./app.js');
const mongoose = require('mongoose');

// Innitialize Express Server
const PORT = process.env.PORT || 3000
try {
	app.listen(PORT);
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



