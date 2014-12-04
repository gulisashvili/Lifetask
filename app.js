var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Task = require('./server/models/tasks');



var app = express();

app.set('env', process.env.NODE_ENV = process.env.NODE_ENV || 'development'); 

// connect to database based on enviroment
if(app.get('env') == 'development') {
  mongoose.connect('mongodb://localhost/todo-app');
} else {
  mongoose.connect('mongodb://levanigls:milan@ds053160.mongolab.com:53160/todo-app');
}



// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'jade');

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/partials/:partianName', function(req, res) {
  res.render('partials/' + req.params.partianName);
});

// Router
app.get('*', function(req, res) {
  res.render('base/index', { title: "To Do App" });
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: err
      });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('base/error', {
      message: err.message,
      error: {}
  });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
	console.log("Server is Listening on: " + app.get('port'));
});
