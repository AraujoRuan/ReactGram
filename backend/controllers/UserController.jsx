const User = require("../models/User.jsx")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const jwtSecret = process.env.JWT_SECRET

//Generete user token
const genereteToken = (id) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: "7d"
    })
} 

//Register user and sign in 
const register = async (req, res) => {
    res.json({Registro:1})
}

module.exports = {
    register,
}