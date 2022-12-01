const express = require('express');
const router = express.Router();
const { show_all_products, show_add_product, addProduct, addToCart} = require('../controllers/products-controller.js')

// Routes /products
router.get('/', show_all_products);
router.post('/addToCart', addToCart);

module.exports = router