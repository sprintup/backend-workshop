console.log('resetDB.js');

var config = require('./config');
var orch = require('orchestrate');
var db = orch(config.dbkey);

db.deleteCollection('users').then(function () {
	db.put('users', "Dan", 
	   {"username" : "Dan", "password" : "123", "bio" : "Dude!"}
	);
	db.put('users', "Tom", 
	   {"username" : "Tom", "password" : "456", "bio" : "asdf!"}
	)
})

db.deleteCollection('warbles').then(function () {
	db.put('warbles', "0",
		{"id" : "0", "text" : "W00t!", "author" : "Dan", "timestamp" : "1444000000000"}
	);	
	db.put('warbles', "1",
		{"id" : "1", "text" : "Yikes!", "author" :"Dan", "timestamp" : "1444000000000"}
	);
	db.put('warbles', "2",
		{"id" : "2", "text" : "Ahoy @Dan!", "author" : "Tom", "timestamp" : "1444000000000"}
	);
	db.put('warbles', "3",
		{"id" : "3", "text" : "Zounds!", "author" : "Tom", "timestamp" :"1444000000000"}
	);
	db.put('warbles', "4",	
		{"id" : "4", "text" : "rrrrrrrrrrrrrrrrrrrrrr! @Tom", "author" : "Shackleton", "timestamp" : "1444000000000"}
	);
	db.put('warbles', "5",	
		{"id" : "5", "text" : "AckThhtffp!", "author" : "Shackleton", "timestamp" : "1444000000000"}
	)
})


