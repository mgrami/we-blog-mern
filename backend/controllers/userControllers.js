const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const { User } = require('../models/userModels')


const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d',})

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body

  if(!username || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  const userExists = await User.findOne({email})

  if(userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = User.create({
    username,
    email,
    password: hashedPassword
  })

  if(user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({email})

  if(user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    })
  } else if(!email || !password) {
    res.status(400)
    throw new Error('All the required fields must be filled')
  } else if(!user) {
    res.status(400)
    throw new Error('This user does not exist; Please signup first.')
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

const getMe = asyncHandler(async (req, res) => {
  const { _id, username, email } = await User.findById(req.user.id)
  res.status(200).json({ id: _id, username, email, })
})


module.exports = {
  registerUser,
  loginUser,
  getMe,
}