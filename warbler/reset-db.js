var config = require('./config');
var orch = require('orchestrate');
var db = orch(config.dbkey);

console.log('hello, I am running')

db.deleteCollection('users')

db.put('users', '1', {
  "username": "dan",
  "password": "123",
  "bio": "programming"
})
.then(function (result) {
console.log(result.body.results)

})

db.list('users').then(function(result) {
	console.log(result.body.results)
})