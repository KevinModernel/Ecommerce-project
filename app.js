require('dotenv').config();

const express = require('express');
const adminRouter = require('./src/routes/admin_routes.js');
const usersRouter = require('./src/routes/users_routes.js');
const productsRouter = require('./src/routes/products_routes.js');
const cartRouter = require('./src/routes/cart_routes.js');
const app = express();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const { initializePassport } = require('./src/utils/passport-config.js')
const passport = require('passport')
const baseSession = require('./src/utils/session')


app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//app.use(bodyParser);
app.use(methodOverride("_method"));

app.use(baseSession)
initializePassport()
app.use(passport.initialize())
app.use(passport.session())

// View engine
app.set('views', './src/views');
app.set('view engine', 'pug');

app.use('/', usersRouter);
app.use('/admin', adminRouter)
app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.get('*', function(req, res){
	res.status(404);
	res.render('notfound');
});


module.exports = app