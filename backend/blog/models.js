const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'Please add title'],
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

module.exports = mongoose.model('Post', postSchema)