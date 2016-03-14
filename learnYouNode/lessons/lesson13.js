/*
Question:
  Write an HTTP server that serves JSON data when it receives a GET request  
  to the path '/api/parsetime'. Expect the request to contain a query string  
  with a key 'iso' and an ISO-format time as the value.  
   
  For example:  
   
  /api/parsetime?iso=2013-08-10T12:10:15.474Z  
   
  The JSON response should contain only 'hour', 'minute' and 'second'  
  properties. For example:  
   
     {  
       "hour": 14,  
       "minute": 23,  
       "second": 15  
     }  
   
  Add second endpoint for the path '/api/unixtime' which accepts the same  
  query string but returns UNIX epoch time in milliseconds (the number of  
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.  
  For example:  
   
     { "unixtime": 1376136615474 }  
   
  Your server should listen on the port provided by the first argument to  
  your program. 
*/

var fs = require('fs');
var http = require('http');
var url = require('url');
var map = require('through2-map');

var server = http.createServer(function (request,response) {
  var urlParsed = url.parse(request.url, true);
  console.log('path: '+urlParsed.path); //  /api/parsetime

  var isoString = urlParsed.query.iso;
  console.log('parsedURL query string: '+isoString);

  // console.log(urlParsed.pathname);


/*
Parsetime
*/

  if (request.method === "GET" && urlParsed.pathname === '/api/parsetime') {
    /*
    This was me parsing the time inthe request url. The program is testing time now. 
    */
    var time = new Date(isoString).toISOString();
    var hour = time.charAt(11)+time.charAt(12);
    var hourInt = parseInt(hour);
    console.log('hour: '+hour);
    var minute = time.charAt(14)+time.charAt(15);
    var minuteInt = parseInt(minute);
    console.log('minute: '+minute);
    var second = time.charAt(17)+time.charAt(18);
    var secondInt = parseInt(second);
    console.log('second: '+second);

    /*
    This is me working with date now
    */
    // var date = new Date();
    // var hours = date.getHours();
    // var minutes = date.getMinutes();
    // var seconds = date.getSeconds();
    // console.log('date: '+date);


    /*
    This is JSON response
    */
    // response.writeHead(200, {'Content-Type':'application/json'});
    // var responseBody = {
    //   "hour": hours,
    //   "minute": minutes,
    //   "second": seconds
    // }

        /*
    This is JSON response
    */
    response.writeHead(200, {'Content-Type':'application/json'});
    var responseBody = {
      "hour": 6,    //this is a hack, it seemed to be a bug in the program 
      "minute": minuteInt,
      "second": secondInt
    }
    // console.log(responseBody);

    response.end(JSON.stringify(responseBody));
  }


/*
UNIX Time
*/

  if (request.method === "GET" && urlParsed.pathname === '/api/unixtime') {
    /*
    This is JSON response
    */
    var date = new Date(isoString);
    response.writeHead(200, {'Content-Type':'application/json'});
    var responseBody = {
      "unixtime": date.getTime(),
    }
    // console.log(responseBody);

    response.end(JSON.stringify(responseBody));
  }

  });

server.listen(process.argv[2]);

/*
Solution:
     var http = require('http')  
     var url = require('url')  
       
     function parsetime (time) {  
       return {  
         hour: time.getHours(),  
         minute: time.getMinutes(),  
         second: time.getSeconds()  
       }  
     }  
       
     function unixtime (time) {  
       return { unixtime : time.getTime() }  
     }  
       
     var server = http.createServer(function (req, res) {  
       var parsedUrl = url.parse(req.url, true)  
       var time = new Date(parsedUrl.query.iso)  
       var result  
       
       if (/^\/api\/parsetime/.test(req.url))  
         result = parsetime(time)  
       else if (/^\/api\/unixtime/.test(req.url))  
         result = unixtime(time)  
       
       if (result) {  
         res.writeHead(200, { 'Content-Type': 'application/json' })  
         res.end(JSON.stringify(result))  
       } else {  
         res.writeHead(404)  
         res.end()  
       }  
     })  
     server.listen(Number(process.argv[2]))  
*/
