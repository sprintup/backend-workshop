'use strict';
/*
	This is the custom <todo></todo> directive found in the index.html file; 
*/
var angular = require('angular');

angular.module('todoListApp').directive('todo', require('./todo'));