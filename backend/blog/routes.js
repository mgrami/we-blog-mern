const express = require('express')
const router = express.Router()
const controllers = require('./controllers')


router.get('/', controllers.getPosts)

router.post('/', controllers.createPost)

router.get('/:id', controllers.getPost)

router.put('/:id', controllers.updatePost)

router.delete('/:id', controllers.deletePost)


module.exports = router