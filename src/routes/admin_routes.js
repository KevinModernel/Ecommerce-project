const express = require('express');
const router = express.Router();
const { addProduct, show_add_product } = require('../controllers/products-controller.js');
const { show_orders, updateStatus, showCritical, showRestock, show_edit_products, restock, editProducts } = require('../controllers/admin-controller.js');

// Routes /admin
router.get('/addproduct', show_add_product);
router.post('/addproduct', addProduct);
router.get('/orders', show_orders);
router.put('/orders/:id', updateStatus);
router.get('/edit', show_edit_products)
router.post('/edit/:id', editProducts)

router.get('/critical', showCritical)
router.get('/restock', showRestock)

router.post('/restock/:id', restock)


module.exports = router