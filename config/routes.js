module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
	app.get('/', home.index);




    ///////////////////// A P I //////////////////////////

    // api routes
    var taskscontroller = require('../app/controllers/api/taskscontroller');

    // get tasks ready for angular
    app.get('/api/tasks', taskscontroller.getTasks);

    // adding new tasks to database
    app.post('/api/tasks', taskscontroller.putTasks);

};