const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


const protect = async (req, res, next) => {
    try {
        let token;

        // 1. Checks for the authorization header
        if(req.header.authorizations) {
            token = req.headers.authorization
        }

        if(!token) {
            return res.status(401).json({message: "Not authorised, token missing"})
        }

        // 2. Token verify
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded

        next()
        
    } catch (error) {
        return res.status(401).json({"message": "invalid token", error : err.message})
    }
}


module.exports = protect