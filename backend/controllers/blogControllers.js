const asyncHandler = require('express-async-handler')
const { Post } = require('../models/blogModels')


const getPosts = asyncHandler(async (req, res) => {
	const posts = await Post.find()
	res.status(200).json(posts)
})

const getPost = asyncHandler(async (req, res) => {

	const post = await Post.findById(req.params.id)

	if(!post) {
		res.status(400)
		throw new Error('Post not found')
	}

	res.status(200).json(post)
})

const createPost = asyncHandler(async (req, res) => {
	if(!req.body.title) {
		res.status(400)
		throw new Error('Please add a title field')
	}

	const post = await Post.create({ title: req.body.title, body: req.body.body })

	res.status(200).json(post)
})

const updatePost = asyncHandler(async (req, res) => {

	const post = await Post.findById(req.params.id)

	if(!post) {
		res.status(400)
		throw new Error('Post not found')
	}

	const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, })

	res.status(200).json(updatedPost)
})

const deletePost = asyncHandler(async (req, res) => {

	const post = await Post.findById(req.params.id)

	if(!post) {
		res.status(400)
		throw new Error('Post not found')
	}

	post.remove()

	res.status(200).json(req.params.id)
})


module.exports = {
	getPosts,
	getPost,
	createPost,
	updatePost,
	deletePost,
}