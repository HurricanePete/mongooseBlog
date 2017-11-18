const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
	title: {type: String, required: true},
	content: {type: String},
	author: {
		firstName: String,
		lastName: String
		},
	created: {type: Date, default: Date.now}
})

blogSchema.virtual('authorName').get(function() {
	return `${this.author.firstName} ${this.author.lastName}`.trim();
});

blogSchema.methods.apiRepr = function () {
	return {
		id: this._id,
		title: this.title,
		author:this.authorName,
		content: this.content,
		created: this.created
	};
}

const blog = mongoose.model('blog', blogSchema);

module.exports = {blog};