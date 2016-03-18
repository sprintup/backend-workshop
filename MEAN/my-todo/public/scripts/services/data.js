'use strict';
/*
* https://teamtreehouse.com/library/building-a-mean-application/creating-and-editing-data-in-a-mean-app/create-and-update-data-in-angular

* https://teamtreehouse.com/library/building-a-mean-application/going-mean-with-angular/geting-todos
*/
angular.module('todoListApp').service('dataService'), require('./data');
function DataService($http, $q) {

  this.getTodos = function(cb) {
    // $http.get('/api/todos').then(cb);
    $http.get('/mock/todos.json').then(cb);
  };
  
  this.deleteTodo = function(todo) {
    if (!todo._id) {
      return $q.resolve();
    }
    return $http.delete('/api/todos/' + todo._id).then(function () {
      console.log("I deleted the " + todo.name + " todo!");
    });
  };
  
  this.saveTodos = function(todos) {
  	var queue = [];
  	todos.forEach(function (todo) {
  		var request;
  		if (!todo._id) {
  			request = $http.post('/api/todos', todo)
  		} else {
  			request = $http.put('/api/todos/' + todo._id, todo).then(function  (result) {
  				todo = result.data.todo;
  				return todo;
  			})
  		};
  		queue.push(request);
  	})
  };
  return $q.all(queue).then(function (results) {
  	console.log("I saved " + todos.length + " todos!");
  });
};

module.exports = DataService;