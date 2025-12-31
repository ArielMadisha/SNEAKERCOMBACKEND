const Product = require('../models/productModel');

// Getting all products
const getProducts = async (req, res) => {
    const products = await Product.find()

    res.status(200).json(products)
}


// Getting product by ID
const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(product) res.status(200).json(product);
    else res.status(404).json({message : "Product not found"});
}


// Create Product - work in progress
const createProduct = async (req, res) => {
    console.log(req.body)
    console.log(req.file)
    // console.log(req)
    let prod = {}
    const product = new Product(req.body)
    // const productDb = await product.save()
    res.status(201).json("check")
}

// Updating product
const updateProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(!product) return res.status(404).json({message: "Product not found!!!"});

    Object.assign(product, req.body)
    const updated = await product.save()
    res.status(200).json(updated)
}


// Deleting a product
const deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(!product) return res.status(404).json({message: 'Product not found'});


    await product.deleteOne();
    res.status(200).json({message: "Product deleted."})
}



module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct }