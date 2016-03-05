console.log('public/javascripts/main.js');

$(document).ready( function(){
	var userView = new UserView();
	userView.render();
	$('#userView').append(userView.$el);

	var postModel = new PostModel();
	var postCollection = new PostCollection();
	var createPostView = new CreatePostView({collection:postCollection, model:postModel});
	createPostView.render();
	$('#createPostView').append(createPostView.$el);
})

