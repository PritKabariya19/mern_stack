const mongoose = require('mongoose')

// table structure
const ProductSchema = mongoose.Schema({
    pname:String,
    pprice:Number,
    pdetails:String
})

// Convert Schema into model
const ProductModel = mongoose.model('Product',ProductSchema);

module.exports = ProductModel