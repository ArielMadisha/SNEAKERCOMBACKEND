const express = require('express')
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController')
const protect = require('../middleware/auth')
const admin = require('../middleware/admin')
const singleImageUpload = require('../middleware/uploadMiddleware')

const router = express.Router()

router.get("/", getProducts)

router.get("/:id", getProductById)

router.post("/", singleImageUpload ,createProduct)

router.put("/:id", protect, admin,updateProduct)

router.delete("/:id", protect, admin,deleteProduct)


module.exports = router