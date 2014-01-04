var mongoose = require('mongoose');

module.exports = mongoose.model('Task', {
    name: String,
    done: Boolean
});