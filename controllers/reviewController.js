const Reveiw = require('../models/Review');
const Product = require('../models/productModel');

const addReview = async (req, res) => {
    const { productId, rating, comment } = req.body

    const alreadyReveiwed = await Reveiw.findOne({user: req.user.id, product: productId})
    if(alreadyReveiwed) return res.status(400).json({message: "Already reviewed..."});

    const review = await Reveiw.create({user: req.user.id, product: productId, rating, comment})

    // changes in number of review and average rating in Product DB needed

    res.status(201).json(review)

}

const getReviews = async (req, res) => {
    const reviews = await Reveiw.find({product: req.params.productId}).populate('user', 'name _id')
    res.status(200).json(reviews)
}

const adminResponseReview = async (req, res) => {
    const review = await Reveiw.findById(req.params.id)
    if(!review) return res.status(404).json({message: "Review not found"});

    review.adminResponse = req.body.response 
    await review.save()
    res.status(201).json(review)
}



module.exports = {addReview, getReviews, adminResponseReview}