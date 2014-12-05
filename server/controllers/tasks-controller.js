var express = require('express');
var tasksRouter = express.Router();
var mongoose = require('mongoose');
var Task = require('../models/tasks');


tasksRouter.get('/', function(req, res) {
	Task.find({}, function(err, tasks) {
		if(err) return console.error(err);
		res.json({tasks: tasks});
	});	
});




tasksRouter.post('/new', function(req, res) {
	var b = req.body;

	var task = new Task();
	task.name = b.name;
	task.description = b.description;
	task.save(function(err, task) {
		if(err) { console.log(err); }
		res.json({ status: 'success'});
	});
	
});



tasksRouter.delete('/:id/delete', function(req, res) {
	Task.remove({ _id: req.params.id }, function(err) {
		if(err) console.log(err);
		res.json({status: 'success'});
	})
});



tasksRouter.put('/:id/update', function(req, res) {
	var data = req.body;
	Task.update({ _id: req.params.id}, data, function(err) {
		if(err) console.log(err);
		res.json({status: 'success'});
	});

});



tasksRouter.put('/:id/done', function(req, res) {
	var data = req.body;
	Task.update({ _id: req.params.id}, data, function(err) {
		if(err) console.log(err);
		res.json({status: 'success'});
	});
});





module.exports = tasksRouter;
