const express = require('express');
const router = express.Router();
const { addProduct, show_add_product } = require('../controllers/products-controller.js');
const { show_adminPanel, show_orders, updateStatus, showCritical, showRestock, show_edit_products, restock, editProducts, deleteProduct } = require('../controllers/admin-controller.js');
const { isAdmin } = require('../utils/isAdmin.js');

// Routes /admin
router.get('/', isAdmin, show_adminPanel);
router.get('/addproduct', isAdmin, show_add_product);
router.post('/addproduct', isAdmin, addProduct);
router.get('/orders', isAdmin, show_orders);
router.put('/orders/:id', isAdmin, updateStatus);
router.get('/edit', isAdmin, show_edit_products)
router.post('/edit/:id', isAdmin, editProducts)
router.post('/delete/:id', isAdmin, deleteProduct)

router.get('/critical', isAdmin, showCritical)
router.get('/restock', isAdmin, showRestock)

router.post('/restock/:id', isAdmin, restock)


module.exports = router