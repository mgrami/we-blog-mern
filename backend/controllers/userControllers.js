const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const { User } = require('../models/userModels')



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
		})
	} else {
		res.status(400)
		throw new Error('Invalid user data')
	}
})

const loginUser = asyncHandler(async (req, res) => {
	res.json({ message: 'Login user' })
})

const getMe = asyncHandler(async (req, res) => {
	res.json({ message: 'User data display' })
})

module.exports = {
	registerUser,
	loginUser,
	getMe,
}