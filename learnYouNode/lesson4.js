/*
	My code
*/

var fs = require('fs');
var arrayOfSubstrings;

fs.readFile(process.argv[2], finishedReading);

function finishedReading (error, argument) {
	if (error) {return console.error(error)};
	// console.log(argument);
	arrayOfSubstrings = argument.toString().split("\n");
	logResult();
};

function logResult () {
	console.log(arrayOfSubstrings.length-1);
}

/*
	Answer
-they used utf8 for the second argument

 var fs = require('fs')  
 var file = process.argv[2]  
   
 fs.readFile(file, function (err, contents) {  
   // fs.readFile(file, 'utf8', callback) can also be used  
   var lines = contents.toString().split('\n').length - 1  
   console.log(lines)  
 })
*/