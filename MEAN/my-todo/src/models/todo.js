'use strict';
/*
* This creates a todo schema
* Schema is a way to define and control an object that will be stored in the database
* mongoose is a singleton, so mongoose module persists across entire application and Todo model is registered with mongoose whereever you require mongoose
	* it is best practice to export the model itself 
*/
var mongoose = require('mongoose');

// todo.name
// todo.completed

var todoSchema = new mongoose.Schema({
	name: String,
	completed: Boolean
});

var model = mongoose.model('Todo', todoSchema);

module.exports = model;