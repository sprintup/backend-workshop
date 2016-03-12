/*
Answer
 ## TIME SERVER (Exercise 10 of 13)  
   
  Write a TCP time server!  
   
  Your server should listen to TCP connections on the port provided by the  
  first argument to your program. For each connection you must write the  
  current date & 24 hour time in the format:  
   
     "YYYY-MM-DD hh:mm"  
   
  followed by a newline character. Month, day, hour and minute must be  
  zero-filled to 2 integers. For example:  
   
     "2013-07-06 17:42"  
   
  After sending the string, close the connection.  
     "YYYY-MM-DD hh:mm"  
   
  followed by a newline character. Month, day, hour and minute must be  
  zero-filled to 2 integers. For example:  
   
     "2013-07-06 17:42" 
*/
var net = require('net')  
// var date = new Date();
// var date = date.getFullYear()
//           +'-0'+(date.getMonth()+1)
//           +'-'+date.getDate()
//           +' 0'+date.getHours()
//           +':'+date.getMinutes();
var strftime = require('strftime');

// console.log(strftime('%Y-%m-%d %H:%M:%S'))

var server = net.createServer(function (socket) {  
 // socket handling logic  
  // socket.write(date);
  socket.end(strftime('%Y-%m-%d %H:%M\n'));
  // console.log(socket);
})  
server.listen(process.argv[2]);

  // date.getFullYear()  
  // date.getMonth()     // starts at 0  
  // date.getDate()      // returns the day of month  
  // date.getHours()  
  // date.getMinutes()  
   
// console.log(date.getFullYear()
//           +'-0'+date.getMonth()
//           +'-'+date.getDate()
//           +' 0'+date.getHours()
//           +':'+date.getMinutes()
//           );

/*
Solution
     var net = require('net')  
       
     function zeroFill(i) {  
       return (i < 10 ? '0' : '') + i  
     }  
       
     function now () {  
       var d = new Date()  
       return d.getFullYear() + '-'  
         + zeroFill(d.getMonth() + 1) + '-'  
         + zeroFill(d.getDate()) + ' '  
         + zeroFill(d.getHours()) + ':'  
         + zeroFill(d.getMinutes())  
     }  
       
     var server = net.createServer(function (socket) {  
       socket.end(now() + '\n')  
     })  
       
     server.listen(Number(process.argv[2]))  
*/