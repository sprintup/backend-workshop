/*
https://teamtreehouse.com/library/building-a-mean-application/going-mean-with-angular/angular-refresher

* best practice to keep controllers with as little logic as possible by keeping the core logic of application inside directives and services
  * makes directives and services reusable across applicaiton
  * write core logic once instead of in multiple controllers

*/

'use strict';
angular.module('todoListApp').controller('mainCtrl', function MainCtrl ($scope, dataService){
    
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
);

module.exports = MainCtrl;