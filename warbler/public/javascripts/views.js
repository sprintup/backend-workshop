console.log('public/javascripts/views.js');

var UserView = Backbone.View.extend ({ //displays the user's public profile (username and bio), a logout button, and all views below.
  render: function(){
    var logoutBtn = '<form id= "logoutBtn" action = "/" method="get"><input type="submit" value = "Logout"></form>';
    this.$el.html(logoutBtn);


  },

})

var CreatePostView = Backbone.View.extend ({ //display a text input area and a "Post It" button which submits the new post.
  render: function() {
    var warble = '<textarea id="warble"></textarea><br>';
    var postWarble = '<button id="postWarble">Warble!</button>';
    this.$el.html(warble + postWarble);
  },
  events : {
    "click #postWarble" : "savePost"
  },
  savePost: function(){
    var text = $('#warble').val();
    console.log(text);
  }
})

var RecentPostsView = Backbone.View.extend ({ //a list of the 5 most recent posts made by anyone.


  render: function(){
    
  },
  initialize: function(){

  }
})

var MyPostsView = Backbone.View.extend ({ //a list of all the posts made by the current user.
  render: function(){

  },
  initialize: function(){

  }
})

//need this view when set up bonus "mention" feature
var MyMentionsViews = Backbone.View.extend ({ // a list of all the posts made which mention the current user (by including @username).
  render: function(){

  },
  initialize: function(){

  }
})
