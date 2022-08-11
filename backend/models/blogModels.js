const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		title: {
			type: String,
			required: [true, 'Please add a title'],
		},
		body: {
			type: String,
			required: false,
		},
	},
	{		
		timestamps: true,
	}
)

module.exports = { Post: mongoose.model('Post', postSchema), }