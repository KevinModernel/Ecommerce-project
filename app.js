const express = require('express');
const usersRouter = require('./src/routes/users_routes.js');
const productsRouter = require('./src/routes/products_routes.js');
const cartRouter = require('./src/routes/cart_routes.js');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { initializePassport } = require('./src/utils/passport-config.js')
const passport = require('passport')
const baseSession = require('./src/utils/session')


app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(baseSession)
initializePassport()
app.use(passport.initialize())
app.use(passport.session())

// View engine
app.set('views', './src/views');
app.set('view engine', 'pug');

app.use('/', usersRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);

// Connect to DB
mongoose.connect('mongodb+srv://mongodbuser:mongo123@cluster0.kp6gl82.mongodb.net/?retryWrites=true&w=majority',
	 {
	 	useNewUrlParser: true
	 })
		.then(db => console.log('DB is connected'))
		.catch(err => console.error(err));
// Innitialize Express Server
try {
	app.listen(3000);
	console.log("Express running on port 3000");
} catch (e) {
	console.error('Unable to stablish server: ', e);
};