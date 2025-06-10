const User = require("../models/User.jsx")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const jwtSecret = process.env.JWT_SECRET

//Generete user token
const generateToken = (id) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: "7d"
    })
} 

//Register user and sign in 
const register = async (req, res) => {
    const {name, email, password} = req.body

    //check id user exists
     const user = await User.findOne({ email })

   if (user) {
    res.status(422).json({ errors: ["Por favor, utilize outro e-mail."] })
    return
  }

    // Generete passsword hash
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    // Create user
    const newUser = await User.create({
    name,
    email,
    password: passwordHash,
  })

    // If user was created successfully, return the token
    if (!newUser) {
    res.status(422).json({
      errors: ["Houve um erro, por favor tente novamente mais tarde."],
    })
    return
  }

  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id),
  })
}

// Get logged in user 
const login = (req, res) => {
  res.send("Login")
} 

module.exports = {
    register,
    login,
}