webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp', []);

	__webpack_require__(3);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp')
	.controller('mainCtrl', function($scope, dataService){
	  
	  dataService.getTodos(function(response){
	    var todos = response.data.todos;  
	    $scope.todos =  todos;
	    });
	  
	  $scope.addTodo = function() {
	    $scope.todos.unshift({name: "This is a new todo.",
	                      completed: false});
	  };
	  
	})

/***/ }
]);