const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'Please add a title'],
		},
		body: {
			type: String,
			required: false,
		},
		author:{
			type: String,
			required: true,
		},
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
	},
	{		
		timestamps: true,
	}
)

module.exports = { Post: mongoose.model('Post', postSchema), }