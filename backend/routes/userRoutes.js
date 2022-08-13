const express = require('express')
const router = express.Router()
const controllers = require('../controllers/userControllers')
const { protect, addUserToRequest } = require('../middlewares/authMiddlewares')


router.post('/register', addUserToRequest, controllers.registerUser)
router.post('/login', addUserToRequest, controllers.loginUser)
router.get('/me', protect, controllers.getMe)

module.exports = router