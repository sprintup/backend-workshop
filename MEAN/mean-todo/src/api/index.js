'use strict';

var express = require('express');
var todos = require('../../mock/todos.json');

var router = express.Router();

router.get('/todos', function  (req, res) {
	res.send({todos:todos}); //imports mock data JSON data here
})

module.exports = router;