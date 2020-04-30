const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,

    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    displayImage: {
        type: Buffer
    },
    gallery: [{
        image: {
            type: Buffer
        }
    }]
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product