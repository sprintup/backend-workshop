webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp', []);

	__webpack_require__(3);
	__webpack_require__(5);
	__webpack_require__(7);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp')
	.service('dataService'), __webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	/*
	* https://teamtreehouse.com/library/building-a-mean-application/creating-and-editing-data-in-a-mean-app/create-and-update-data-in-angular

	* https://teamtreehouse.com/library/building-a-mean-application/going-mean-with-angular/geting-todos
	*/

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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/*
		This is the custom <todo></todo> directive found in the index.html file; 
	*/
	var angular = __webpack_require__(1);

	angular.module('todoListApp').directive('todo', __webpack_require__(6));

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	/*
	* If you look inside the public/templates folder you will see the todo html
	* this allows main controller to be lightweight 
	*/

	function ToDoDirective (){
	  return {
	    templateUrl: 'templates/todo.html', //I'm still unsure if this can see the templates directory
	    replace: true,
	    controller: 'todoCtrl'
	  }
	}

	module.exports = ToDoDirective;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp').controller('mainCtrl', __webpack_require__(8));
	angular.module('todoListApp').controller('todoCtrl', __webpack_require__(9));

/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
	https://teamtreehouse.com/library/building-a-mean-application/going-mean-with-angular/angular-refresher

	* best practice to keep controllers with as little logic as possible by keeping the core logic of application inside directives and services
	  * makes directives and services reusable across applicaiton
	  * write core logic once instead of in multiple controllers

	*/

	'use strict';

	function MainCtrl ($scope, dataService){
	  
	  /*
			Any time the main controller is loaded (page visited) the data service gets our todos and attaches to todos to the scopes todo variable
	  */
	  dataService.getTodos(function(response){
	    var todos = response.data.todos;  
	    $scope.todos =  todos;
	    });
	  
	  /*
			This is called using the ng-click directive from the index.html file; it creates a new todo and adds it to the todos that are currently in the angular scope
	  */
	  $scope.addTodo = function() {
	    $scope.todos.unshift({name: "This is a new todo.",
	                      completed: false});
	  };
	}

	module.exports = MainCtrl;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	function TodoCtrl($scope, dataService) {
	  
	  $scope.deleteTodo = function(todo, index) {
	    dataService.deleteTodo(todo).then(function () {
	      $scope.todos.splice(index, 1);
	    });
	  };

	  $scope.saveTodos = function() {
	    var filteredTodos = $scope.todos.filter(function(todo){
	      if(todo.edited) {
	        return todo
	      };
	    })
	    dataService.saveTodos(filteredTodos)
	    .finally($scope.resetTodoState());
	  };

	  $scope.resetTodoState = function() {
	    $scope.todos.forEach(function  (todo) {
	      todo.edited = false;
	    });
	  }
	}

	module.exports = TodoCtrl;

/***/ }
]);