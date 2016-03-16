webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp', []);
	__webpack_require__(3);
	__webpack_require__(5);
	__webpack_require__(7);
	 // debugger;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp').service('dataService'), __webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	function DataService($http, $q) {

	  this.getTodos = function(cb) {
	    $http.get('/api/todos').then(cb);
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

	var angular = __webpack_require__(1);

	angular.module('todoListApp').directive('todo', __webpack_require__(6));

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	function ToDoDirective (){
	  return {
	    templateUrl: 'templates/todo.html',
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

	'use strict';

	function MainCtrl ($scope, dataService){
	  
	  dataService.getTodos(function(response){
	    var todos = response.data.todos;  
	    $scope.todos =  todos;
	    });
	  hi
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