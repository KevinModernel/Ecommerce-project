const express = require('express');
const router = express.Router();
const { showCartProducts, deleteCart, createOrderMW, deleteCartMW } = require("../controllers/cart-controller.js")
const { emailNewOrder } = require("../controllers/communications-controller");

// cart routes
router.get("/", showCartProducts);
router.get("/deleteCart", deleteCart);
router.get("/confirmation", [createOrderMW, deleteCartMW], emailNewOrder)


module.exports = router

