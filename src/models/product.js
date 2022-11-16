const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'El titulo es obligatorio'],
    },
        category:{
        type: String,
        required: false,
    },
        description:{
        type: String,
        required: false,
    },
    price:{
        type: Number,
        required: [true, 'El precio es obligatorio'],
    },
    quantity:{
        type: Number,
        required: false,
    },
    image: {
        type: String,
        required: false
    }
})

const Products = mongoose.model('Product', ProductSchema)

module.exports = { Products }