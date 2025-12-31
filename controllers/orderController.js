const Order = require('../models/orderModel')
const Product = require('../models/productModel')

const createOrder = async (req, res) => {
    const { orderItems, totalPrice } = req.body;
    
    for ( const item of orderItems ) {
        const product = await Product.findById(item.product)
        if(!product) return res.status(404).json({message : "Product not found"});

        if(product.stock[item.size] < item.qty) {
            return res.status(400).json({message : 'Not enough stock'})
        }

        product.stock[item.size] = product.stock[item.size] - item.qty
        await product.save()
    }

    const order = await Order.create({user : req.user.id, orderItems, totalPrice})
    res.status(201).json(order)

}

// get order of a specific user
const getOrders = async (req, res) => {
    const orders = await Order.find({user: req.user.id}).populate("orderItems.product")
    res.status(200).json(orders)
}


// Cancel order
const cancelOrder = async (req, res) => {
    const order = await Order.findById(req.params.id)
    if(!order) return res.status(404).json({message: 'Order does not exsist.'});

    for (const item of order.orderItems){
        const product = await Product.findById(item.product);
        if(product){
            product.stock[item.size] += item.qty
            await product.save()
        }
    }

    order.status = "Cancelled"
    await order.save();

    res.status(200).json({message: "Order cancelled"})
}

const updateOrderStatus = async (req, res) => {
    const order = await Order.findById(req.params.id)

    if(!order) return res.status(404).json({message: "Order is not found"});
    console.log(order)
    order.status = req.body.status || order.status
    await order.save()
    res.status(200).json(order)
}

const getAllOrders = async (req, res) => {
    const allOrders = await Order.find()
    
    res.status(200).json(allOrders)
}



module.exports = { createOrder, getOrders, cancelOrder, updateOrderStatus, getAllOrders }