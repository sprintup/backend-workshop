console.log('database.js');

var _ = require('underscore');


var database = {
	users: {
	Dan: {username:'Dan', password:'123', bio:"Dude!"},
	Tom: {username:'Tom', password:'456', bio:"Avast!"}
	},
	warbles: [
		{id:0, text:'W00t!', author:'Dan', timestamp:1444000000000},
		{id:1, text:'Yikes!', author:'Dan', timestamp:1444000010000},
		{id:2, text:'Ahoy @Dan!', author:'Tom', timestamp:1444000100000},
		{id:3, text:'Zounds!', author:'Tom', timestamp:1444100000000},
		{id:4, text:'rrrrrrrrrrrrrrrrrrrrrr! @Tom', author:'Shackleton', timestamp:1444100001000},
		{id:5, text:'AckThhtffp!', author:'Shackleton', timestamp:1444100020000}
	]
}
var newKeyFn = {
	users: function(obj) {
		return obj.username;
	},
	tweets: function(obj) {
		var id = database.warbles.length;
		obj.id = id;
		return id;
	}
}

function search(collname,key,val) {
	return _.values(database[collname]).filter(function(model) {
		if (val instanceof RegExp)
			return model[key].match(val);
		else
			return model[key] === val;
	})
}

function list(collname) {
	return database[collname];
}

function get(collname,id) {
	return database[collname][id];
}

function put(collname,id,obj) {
	database[collname][id] = obj;
}

function post(collname,obj) {
	var id = newKeyFn[collname](obj);
	database[collname][id] = obj;
	console.log(database);
	return id;
}

// For debugging only:
function show() {
	console.log(database);
	return database;
}

module.exports = {
	list: list,
	search: search,
	get:get,
	put: put,
	post: post,
	show: show
}
