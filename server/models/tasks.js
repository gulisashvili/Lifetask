var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// task schema
var taskSchema = new Schema({	
	name: { type: String, required: true },
	description: { type: String, required: true },
	done: { type: Boolean, default: false }
});


// exports model
module.exports = mongoose.model('tasks', taskSchema);
