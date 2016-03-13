/*
Question
 ## HTTP FILE SERVER (Exercise 11 of 13)  
   
  Write an HTTP server that serves the same text file for each request it  
  receives.  
   
  Your server should listen on the port provided by the first argument to  
  your program.  
   
  You will be provided with the location of the file to serve as the second  
  command-line argument. You must use the fs.createReadStream() method to  
  stream the file contents to the response.  
*/

var fs = require('fs');
var http = require('http');

var server = http.createServer(function (request,response) {
  // response.write(fs.createReadStream(process.argv[3]);
  var srcFileStream = fs.createReadStream(process.argv[3]);
  srcFileStream.pipe(response);
  // response.write(fs.createReadStream(process.argv[3]).pipe(response));

  // src.pipe(dst);
});
// console.log('file: '+fs.createReadStream(process.argv[3]);
server.listen(process.argv[2]);

// console.log(process.argv);

/*
Solution:
 var http = require('http')  
 var fs = require('fs')  
   
 var server = http.createServer(function (req, res) {  
   res.writeHead(200, { 'content-type': 'text/plain' })  
   
   fs.createReadStream(process.argv[3]).pipe(res)  
 })  
   
 server.listen(Number(process.argv[2]))  
*/