'use strict';

var TaskTrackerModels = (function() {

  // ----------------------------------------------------------------------------
  // Users
  // ----------------------------------------------------------------------------

  var User = Backbone.Model.extend({
  	defaults: {
  		username: '',
      currentUser: false
    }
  });

  var Users = Backbone.Collection.extend({
  	model: User,
    url: '/users',
    initialize: function() {
      {username: 'Shadow Dragon'},
      {username: 'Dash'},
      {username: 'Green Lantern'}
    }
  });

  // ----------------------------------------------------------------------------
  // Tasks
  // ----------------------------------------------------------------------------

  var Task = Backbone.Model.extend({
  	defaults: {
  		title: '',
  		description: '',
      creator: '',
      assignee: 'Not Assigned',
      status: 'Unassigned'
  	}
  });

  var Tasks = Backbone.Collection.extend({
  	model: Task,
    url: '/tasks',
    initialize: function() {
      {
        title: 'Insurrection',
        description: 'Start an insurrection',
        creator: 'Shadow Dragon',
        status: 'Unassigned',
        assignee: 'Not Assigned'
      },
      {
        title: 'Specific strike',
        description: 'Strike fear into the hearts of enemys',
        creator: 'Dash',
        status: 'Assigned',
        assignee: 'Dash'
      },
      {
        title: 'General Strike',
        description: 'Facilitate a general strike',
        creator: 'Dash',
        status: 'Unassigned',
        assignee: 'Not Assigned'
      },
      {
        title: 'Abolish Capitalism',
        description: 'Also abolish the state',
        creator: 'Green Lantern',
        status: 'Unassigned',
        assignee: 'Not Assigned'
      }
    }
  });

  // ----------------------------------------------------------------------------
  // Module
  // ----------------------------------------------------------------------------

  return {
    Users: Users,
    Tasks: Tasks
  };

})();
