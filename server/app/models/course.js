var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CourseSchema   = new Schema({
    name: String,
	description : String,
	price: String,
	duration : String,
	author: String,
	image : String
});

module.exports = mongoose.model('Course', CourseSchema);