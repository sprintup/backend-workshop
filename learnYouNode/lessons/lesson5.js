/*
FILTERED LS (Exercise 5 of 13)  
   
  Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. You will be provided a directory  
  name as the first argument to your program (e.g. '/path/to/dir/') and a  
  file extension to filter by as the second argument.  
   
  For example, if you get 'txt' as the second argument then you will need to  
  filter the list to only files that end with .txt. Note that the second  
  argument will not come prefixed with a '.'.  
   
  The list of files should be printed to the console, one file per line. You  
  must use asynchronous I/O. 
*/

var fs = require('fs');
var path = require('path');

// console.log('2: ' + process.argv[2] + ' | 3: ' + process.argv[3]);

fs.readdir(process.argv[2],function callback (err, files) {
	// console.log('files: ' + files.length);
	for (var i = 0; i < files.length; i++) {
		// console.log('i: ' + i + ' | files[i]' + files[i]);
		// console.log('path.extname(files[i]): '+path.extname(files[i]) + ' | process.argv[3]: '+ '.'+process.argv[3]);
		if (path.extname(files[i]) == '.'+process.argv[3]) {
			// console.log('process.argv[3]: ' + process.argv[3] + ' | files[i]: ' + files[i]);
			console.log(files[i]);
		};	
	};
})

/*
Answer

 var fs = require('fs')  
 var path = require('path')  
   
 fs.readdir(process.argv[2], function (err, list) {  
   list.forEach(function (file) {  
     if (path.extname(file) === '.' + process.argv[3])  
       console.log(file)  
   })  
 }) 
*/