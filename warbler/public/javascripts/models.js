console.log('public/javascripts/models.js');

var UserModel = Backbone.Model.extend ({
  defaults: {
    username: '',
    password: '',
    bio: ''
  }
})

var PostModel = Backbone.Model.extend ({
  defaults: {
    text: '',
    author: '',
    timestamp: ''
  }
})

var PostCollection = Backbone.Collection.extend({
	model: PostModel,
	url:''
})
