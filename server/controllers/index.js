var express = require('express');
var indexRouter = express.Router();


indexRouter.get('/', function(req, res) {
	res.render('index');
});


module.exports = indexRouter;
