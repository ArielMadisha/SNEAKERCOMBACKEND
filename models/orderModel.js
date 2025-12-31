const mongoose = require('mongoose')

const orderItemsSchema = new mongoose.Schema({
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    size: { type: Number, required: true, enum: [5,6,7,8,9,10] },
    qty: {type: Number, required: true},
    price: {type: Number, required: true}
})


const orderSchema = new mongoose.Schema({
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    orderItems : [orderItemsSchema],
    totalPrice: { type: Number},
    status: {
        type: String,
        default: "Pending",
        enum: ['Pending', "Shipped", "Delivered", "Cancelled"]
    }
}, {timestamps: true})


module.exports = mongoose.model('Order', orderSchema)