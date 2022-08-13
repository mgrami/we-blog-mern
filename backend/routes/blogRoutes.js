const express = require('express')
const router = express.Router()
const controllers = require('../controllers/blogControllers')
const { protect, addUserToRequest } = require('../middlewares/authMiddlewares')


router.get('/', addUserToRequest, controllers.getPosts)

router.get('/:id', addUserToRequest, controllers.getPost)

router.post('/', protect, controllers.createPost)

router.put('/:id', protect, controllers.updatePost)

router.delete('/:id', protect, controllers.deletePost)


module.exports = router