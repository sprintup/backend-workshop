var fs = require('fs');
var path = require('path');

module.exports = function (directory, filterExt, callback) {
	var files = fs.readdir(directory, filterFiles); 
	var fileArray = [];

	function filterFiles (err,data) {
		if (err) {return callback(err)};

		// console.log('at index 0: '+path.extname(data[0]));
		// console.log('.'+filterExt);
		for (var i = 0; i < data.length; i++) {
			if (path.extname(data[i]) === '.' + filterExt) {
				fileArray.push(data[i]);
			};	
		}
	return callback(null,fileArray);
	}
}

/*
Solution: 
     var fs = require('fs')  
     var path = require('path')  
       
     module.exports = function (dir, filterStr, callback) {  
       
       fs.readdir(dir, function (err, list) {  
         if (err)  
           return callback(err)  
       
         list = list.filter(function (file) {  
           return path.extname(file) === '.' + filterStr  
         })  
       
         callback(null, list)  
       })  
     }  
*/