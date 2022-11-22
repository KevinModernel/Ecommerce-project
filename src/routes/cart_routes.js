const express = require('express');
const router = express.Router();
const { showCartProducts, deleteCart } = require("../controllers/cart-controller.js")

// cart routes
router.get("/", showCartProducts);
router.get("/deleteCart", deleteCart);

module.exports = router
