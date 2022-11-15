const express = require('express');
const usersRouter = require('./src/routes/users_routes.js');
const productsRouter = require('./src/routes/products_routes.js');
const app = express();


app.use(express.static('./public'));

// View engine
app.set('views', './src/views');
app.set('view engine', 'pug');

app.use('/', usersRouter);
app.use('/products', productsRouter);



// Innitialize Express Server
try {
	app.listen(3000);
	console.log("Express running on port 3000");
} catch (e) {
	console.error('Unable to stablish server: ', e);
};