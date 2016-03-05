console.log('orch.js');

var config = require('./config');
var orch = require('orchestrate');

var db = orch(config.dbkey);

// db.post('things', {
//   "name": "Steve Kaliski",
//   "hometown": "New York, NY",
//   "twitter": "@stevekaliski"
// })

// .then(function (result) {
// console.log(result.path.key)
// })

// db.get("things", "baratheon-robert", "20c14e8965d6cbb0")
// .then(function (result) {
// 	console.log(result.path.key)
// })
// .fail(function (err) {
// })
