'use strict';
/*
	Uses mongoose to get mongo set up in app
*/

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function (err) {
	if (err) {
		console.log('Failed connecting to mongodb');
	} else {
		console.log('Successfully connected to mongo');
	};
});