const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
	title: String,
	content: String,
	author: {
		firstName: String,
		lastName: String
		}
})

blogSchema.virtual('authorName').get(function() {
	return `${this.author.firstName} ${this.author.lastName}`.trim();
});

blogSchema.methods.apiRepr = function() {
	return {
		id: this._id,
		title: this.title,
		author:this.authorName,
		content: this.content
	};
}

const blog = mongoose.model('mongoose-blog', blogSchema, 'blogEntries');

module.exports = {blog};