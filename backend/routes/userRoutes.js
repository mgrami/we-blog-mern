const express = require('express')
const router = express.Router()
const controllers = require('../controllers/userControllers')


router.post('/register', controllers.registerUser)
router.post('/login', controllers.loginUser)
router.get('/me', controllers.getMe)

module.exports = router