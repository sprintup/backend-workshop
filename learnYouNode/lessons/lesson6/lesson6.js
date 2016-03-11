/*
-Print the list of files (one file per line) to the console.
*/

var module = require('./module.js');

var directory = process.argv[2];
var extention = process.argv[3];

function callback(err, data) {
	if (err) {return console.log(err)};
	for (var i = 0; i < data.length; i++) {
		console.log(data[i]);
	};
}

module(directory, extention, callback);

/*
Answer: 

     var filterFn = require('./solution_filter.js')  
     var dir = process.argv[2]  
     var filterStr = process.argv[3]  
       
     filterFn(dir, filterStr, function (err, list) {  
       if (err)  
         return console.error('There was an error:', err)  
       
       list.forEach(function (file) {  
         console.log(file)  
       })  
     })  
*/