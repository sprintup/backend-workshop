/*
 ## HTTP UPPERCASERER (Exercise 12 of 13)  
   
  Write an HTTP server that receives only POST requests and converts  
  incoming POST body characters to upper-case and returns it to the client.  
   
  Your server should listen on the port provided by the first argument to  
  your program.  
*/   

var fs = require('fs');
var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (request,response) {
  // var body = [];
  // request.on('data', function (chunk) {
  //   body.push(chunk);
  // }).on('end', function () {
  //   console.log(body.toString());
  // })

    if (request.method === "POST") {    
      request.pipe(map(function (chunk) {  
      return chunk.toString().split('').join('').toUpperCase()  
      })).pipe(response); 
    };
  });



  // var srcFileStream = fs.createReadStream(process.argv[3]);
  // srcFileStream.pipe(response);
  // response.write(fs.createReadStream(process.argv[3]).pipe(response));
server.listen(process.argv[2]);

/*
Solution:
 var http = require('http')  
 var map = require('through2-map')  
   
 var server = http.createServer(function (req, res) {  
   if (req.method != 'POST')  
     return res.end('send me a POST\n')  
   
   req.pipe(map(function (chunk) {  
     return chunk.toString().toUpperCase()  
   })).pipe(res)  
 })  
   
 server.listen(Number(process.argv[2]))  
*/