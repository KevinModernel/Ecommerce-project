const express = require('express');
const router = express.Router();
const { addProduct, show_add_product } = require('../controllers/products-controller.js');
const { show_orders, updateStatus } = require('../controllers/admin-controller.js');

// Routes /admin
router.get('/addproduct', show_add_product);
router.post('/addproduct', addProduct);
router.get('/orders', show_orders);
router.put('/orders/:id', updateStatus);

module.exports = router