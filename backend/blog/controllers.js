const asyncHandler = require('express-async-handler')


const getPosts = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'All Posts' })
})

const getPost = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Get post with id: ${req.params.id}` })
})

const createPost = asyncHandler(async (req, res) => {
	if(!req.body.text) {
		res.status(400)
		throw new Error('Please add a text field.')
	}
	res.status(200).json({ message: 'Create new post' })
})

const updatePost = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Update post with id: ${req.params.id}` })
})

const deletePost = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Delete post with id: ${req.params.id}` })
})


module.exports = {
	getPosts,
	getPost,
	createPost,
	updatePost,
	deletePost,
}