const asyncHandler = require('express-async-handler')
const { Post } = require('../models/blogModels')
const { User } = require('../models/userModels')


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

  const post = await Post.create({
    title: req.body.title,
    body: req.body.body || '',
    author: req?.user?.username,
    user_id: req?.user?.id,
  })

  res.status(200).json(post)
})

const updatePost = asyncHandler(async (req, res) => {

  const post = await Post.findById(req.params.id)
  const user = await User.findById(req.user.id)

  if(!post) {
    res.status(400)
    throw new Error('Post not found')
  }
  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }
  if(post.user_id.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, })

  res.status(200).json(updatedPost)
})

const deletePost = asyncHandler(async (req, res) => {

  const post = await Post.findById(req.params.id)
  const user = await User.findById(req.user.id)

  if(!post) {
    res.status(400)
    throw new Error('Post not found')
  }
  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }
  if(post.user_id.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
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