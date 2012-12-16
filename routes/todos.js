var Todo = require('../models/todo').Todo;

var handleError = function(err, res) {
	console.log(err);
	res.send(500);	
};

var addCorsHeader = function(res) {
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With");
};

exports.getAll = function(req, res) {	
	addCorsHeader;

	Todo.find({}, function(err, todos) {
		if (err) {
			handleError(err, res);
		} else {
			res.json(200, todos);	
		}				
	});
	
};
 
exports.getById = function(req, res) {
    addCorsHeader;

    Todo.findOne({_id: req.params.id}, function(err, todo) {
		if (err) {
			handleError(err, res);
		} else {
			res.json(200, todo);
		}		
	});
};

exports.save = function(req, res) {
	addCorsHeader;

 	var todo = new Todo({
 		description: req.params.description	
 	});
  	
  	todo.save(function (err) {
		if (err) {
			handleError(err, res);
		} else {
			res.send(201, req.body);
		}		
  	});
};

exports.delete = function(req, res) {
	addCorsHeader;

  	Todo.find({ _id: req.params.id}).remove();
  	res.send(200);
};

exports.complete = function(req, res) {
	addCorsHeader;

  	Todo.update({ _id: req.params.id }, { $set: { completedDate : Date.now() }}, function(err, numberAffected, raw) {
  		if (err) {
			handleError(err, res);
		} else {
			res.send(200);
		}		
	});
};