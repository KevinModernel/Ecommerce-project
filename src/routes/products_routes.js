const express = require('express');
const router = express.Router();
const { show_all_products, show_add_product, addProduct, addToCart, show_category} = require('../controllers/products-controller.js')

// Routes /products
router.get('/', show_all_products);
router.post('/addToCart', addToCart);
router.get('/:category', show_category)

module.exports = router