const express = require('express');
const router = express.Router();
const { show_all_products } = require('../controllers/products-controller.js')


router.get('/', show_all_products);

module.exports = router