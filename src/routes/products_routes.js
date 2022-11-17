const express = require('express');
const router = express.Router();
const { show_all_products, show_add_product, addProduct, addToCart} = require('../controllers/products-controller.js')

// Routes /products
router.get('/', show_all_products);
router.get('/addproduct', show_add_product);
router.post('/addproduct', addProduct);
router.post('/addToCart', addToCart);

module.exports = router