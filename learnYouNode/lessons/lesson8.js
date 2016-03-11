var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function callback (response) {
  response.setEncoding('utf8');
  // response.on("data", function (data) {
  //   console.log(data);
  // });

  response.pipe(bl(function (error, data) {
  	console.log(data.length);
  	console.log(data.toString());
  }));

  // response.on('error: ', console.error) ;

});

/*
Solution:

   var http = require('http')  
   var bl = require('bl')  
     
   http.get(process.argv[2], function (response) {  
     response.pipe(bl(function (err, data) {  
       if (err)  
         return console.error(err)  
       data = data.toString()  
       console.log(data.length)  
       console.log(data)  
     }))    
   })  
*/