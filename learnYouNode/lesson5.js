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