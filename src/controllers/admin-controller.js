const { Orders } = require('../models/order.js');
const { Products } = require('../models/product.js'); 

const show_adminPanel = (req, res) => {
	res.render('admin', { user: req.user } )
};

const show_orders = async (req, res) => {
	const ordersStored = await Orders.find();
	res.render('orders', { ordersStored, user: req.user });
};

const updateStatus = async (req, res) => {
	const idOrder = req.params.id;
	await Orders.updateOne({ _id: idOrder }, {status: "Entregado"})
	res.redirect('/admin/orders');
};

const showCritical = async (req, res) => {
	const criticalStock = await Products.find({ quantity: { $lt: 5} });
	res.render('critical', { criticalStock, user: req.user });
};

const showRestock = async (req, res) => {
	const products = await Products.find({});
	res.render('restock', { products, user: req.user });
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
	res.render('editproducts', { products, user: req.user });
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
	try {
		await Products.updateOne({ _id: idProduct}, update);
		res.redirect('/admin/edit');
	} catch (error) {
		console.log('\nError in EditProduct Controller: ' + error +'\n');
		res.redirect('/notfound');
	};
};

const deleteProduct = async (req, res) => {
	const idProduct = req.params.id;
	await Products.findOneAndRemove( {_id: idProduct} );
	res.redirect('/admin/edit');
};

module.exports = { show_adminPanel, show_orders, updateStatus, showCritical, showRestock, show_edit_products, restock, editProducts, deleteProduct }