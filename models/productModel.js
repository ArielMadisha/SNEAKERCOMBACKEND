const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({
    5: {type: Number, default : 0},
    6: {type: Number, default : 0},
    7: {type: Number, default : 0},
    8: {type: Number, default : 0},
    9: {type: Number, default : 0},
    10: {type: Number, default : 0}
})

const productSchema = new mongoose.Schema({
    name: {type : String, required: true},
    description: {type: String},
    price: { type: Number, required: true},
    category: {type: String},
    stock: {type: stockSchema, required: true},
    images: [{type: String}],
    ratings: { type: Number, default: 0},
    numberReviews: {type: Number, default: 0}
})

module.exports = mongoose.model('Product', productSchema)


//stock : {
//   5 : 2,
//  6 : 5,
//}