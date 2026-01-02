const express = require('express')
const {
    addReview,
    getReviews,
    adminResponseReview
} = require('../controllers/reviewController')

const admin = require('../middleware/admin')
const protect = require('../middleware/auth')

const router = express.Router()

router.post('/', protect, addReview)
router.get('/:productId', getReviews)
router.post('/:id/respond', protect, admin, adminResponseReview)

module.exports = router