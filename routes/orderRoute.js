const express = require('express');
const { 
    createOrder, 
    getOrders, 
    cancelOrder, 
    updateOrderStatus,
    getAllOrders
} = require('../controllers/orderController');

const protect = require('../middleware/auth')
const admin = require('../middleware/admin')

const router = express.Router()


router.post('/', protect, createOrder)
router.get('/', protect, getOrders)
router.put('/:id/cancel', protect, cancelOrder)
router.put('/status/:id', protect, admin, updateOrderStatus)
router.get('/all-orders', protect, admin, getAllOrders)

module.exports = router

