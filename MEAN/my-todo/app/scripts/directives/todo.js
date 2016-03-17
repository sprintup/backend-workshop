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