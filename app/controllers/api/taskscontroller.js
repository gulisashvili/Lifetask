var Task = require('../../models/task');

// get tasks ready for angular
exports.getTasks = function (req, res, next) {
  // query the task collection
  Task.find({}, function(err, tasks) {
    if(err) return next(err);
    res.json(tasks);
  });
};

// adding new tasks to database
exports.putTasks = function(req, res, next) {

  // get new task name
  var taskName = req.body.name;

  // create new task
  var task = new Task({
    name: taskName,
    done: false
  });

  // save task in database
  task.save(function(err, task) {
    if(err) return next(err);
    res.json(task);
  });

};