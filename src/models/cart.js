const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'El nombre del producto es obligatorio'],
    },
    quantity:{
        type: Number,
        required: [true, 'La cantidad es obligatoria'],
    }
})

const Carts = mongoose.model('Cart', CartSchema)

module.exports = { Carts }