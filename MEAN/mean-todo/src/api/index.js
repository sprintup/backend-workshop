'use strict';

var express = require('express');
var Todo = require('../models/todo');
// var todos = require('../../mock/todos.json');

var router = express.Router();

router.get('/todos', function  (req, res) {
	Todo.find({}, function (err, todos) {
		if (err) {
			return res.status(500).json({message: err.message});
		}
		res.send({todos:todos}); //imports mock data JSON data here
	})
})

router.post('/todos', function (req, res) {
	var todo = req.body; //will be data for todos
	Todo.create(todo, function (err, todo) {
		if (err) {
			return res.status(500).json({err: err.message});
		}
		res.json({'todo': todo, message: 'Todo Created'});
	})
})

module.exports = router;