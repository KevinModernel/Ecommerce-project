const { Orders } = require('../models/order.js');
const { Products } = require('../models/product.js'); 

const show_adminPanel = (req, res) => {
	res.render('admin', { user: req.user } )
};

const show_orders = async (req, res) => {
	const ordersStored = await Orders.find();
	res.render('orders', { ordersStored });
};

const updateStatus = async (req, res) => {
	const idOrder = req.params.id;
	await Orders.updateOne({ _id: idOrder }, {status: "Entregado"})
	res.redirect('/admin/orders');
};

const showCritical = async (req, res) => {
	const criticalStock = await Products.find({ quantity: { $lt: 5} });
	res.render('critical', { criticalStock });
};

const showRestock = async (req, res) => {
	const products = await Products.find({});
	res.render('restock', { products });
};

const restock = async (req, res) => {
	const restock = Number(req.body.restock);
	const idProduct = req.params.id;
	const product = await Products.findOne({ _id: idProduct});
	const currentStockProduct = product.quantity;
	const actualStock = currentStockProduct + restock;
	await Products.updateOne({ _id: idProduct}, { quantity: actualStock});
	res.redirect(`/admin/${req.body.adress}`);
};

const show_edit_products = async (req, res) => {
	const products = await Products.find({});
	res.render('editproducts', { products });
};

const editProducts = async (req, res) => {
	const idProduct = req.params.id;
	const name = req.body.name;
	const category = req.body.category;
	const description = req.body.description;
	const price = req.body.price;
	const image = req.body.image;
	const update = {name,
					category,
					description,
					price,
					image,
				};
	console.log(update);
	await Products.updateOne({ _id: idProduct}, update);
	res.redirect('/admin/edit');
};

module.exports = { show_adminPanel, show_orders, updateStatus, showCritical, showRestock, show_edit_products, restock, editProducts }