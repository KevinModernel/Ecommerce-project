const mongoose = require('mongoose')

const OrdersSchema = new mongoose.Schema({
    
    email:{
        type: String,
        required: false,
    },
    name:{
        type: String,
    },
    date:{
        type: String,
        required: false,
    },
    products:{
        type: Array,
    },
    status:{
        type: String,
        "default": 'Generada'
    }
    })

const Orders = mongoose.model('Orders', OrdersSchema)
module.exports = { Orders }