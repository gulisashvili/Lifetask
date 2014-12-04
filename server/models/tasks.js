var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tasksSchema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	done: { type: Boolean, default: false }
});

module.exports = mongoose.model('tasks', tasksSchema);
