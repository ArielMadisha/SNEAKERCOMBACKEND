const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const genarateToken = require('../utils/generateJwt')

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    const userExsist = await User.findOne({email})

    if(userExsist){
        return res.status(400).json({message: "User already exists"})
    }

    // Hash the password - Assingment
    const user = await User.create({name, email, password})

    res.status(201).json({
        _id : user._id,
        name: user.name,
        email: user.email,
        token: genarateToken(user._id, user.role),
        role: user.role 
    })

}

const loginUser = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({email})

    if(user && (user.password === password)) {
        res.json({
            _id: user._id,
            email: user.email,
            name: user.name,
            token: genarateToken(user._id, user.role),
            role: user.role 
        })
    }
    else{
        res.status(401).json({message : "Invalid credentials"})
    }
}


module.exports = {
    registerUser,
    loginUser
}