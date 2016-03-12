/*
Question
 ## JUGGLING ASYNC (Exercise 9 of 13)  
   
  This problem is the same as the previous problem (HTTP COLLECT) in that  
  you need to use http.get(). However, this time you will be provided with  
  three URLs as the first three command-line arguments.  
   
  You must collect the complete content provided to you by each of the URLs  
  and print it to the console (stdout). You don't need to print out the  
  length, just the data as a String; one line per URL. The catch is that you  
  must print them out in the same order as the URLs are provided to you as  
  command-line arguments.  
*/

var http = require('http');
var bl = require('bl');
var counter = 0;
var data2 = undefined;
var data3 = undefined;
var data4 = undefined;

http.get(process.argv[2], function callback (response) {
  response.setEncoding('utf8');

  response.pipe(bl(function (error, data) {
    // console.log(' | 2 |  ');
    counter ++;
    data2 = data.toString();
    printResults();
  }));

  // response.on('error: ', console.error) ;
});

http.get(process.argv[3], function callback (response) {
  response.setEncoding('utf8');

  response.pipe(bl(function (error, data) {
    // console.log(' | 3 |  ');
    counter ++;
    data3 = data.toString();
    printResults();
  }));

  // response.on('error: ', console.error) ;
});

http.get(process.argv[4], function callback (response) {
  response.setEncoding('utf8');

  response.pipe(bl(function (error, data) {
    // console.log(' | 4 |  ');
    counter ++;
    data4 = data.toString();
    printResults();
  }));

  // response.on('error: ', console.error) ;
});

function printResults (argument) {
  // console.log('counter: '+counter);
  if (counter == 3) {
    console.log(data2);
    console.log(data3);
    console.log(data4);
  };
}

/*
Solution:
 var http = require('http')  
 var bl = require('bl')  
 var results = []  
 var count = 0  
   
 function printResults () {  
   for (var i = 0; i < 3; i++)  
     console.log(results[i])  
 }  
   
 function httpGet (index) {  
   http.get(process.argv[2 + index], function (response) {  
     response.pipe(bl(function (err, data) {  
       if (err)  
         return console.error(err)  
   
       results[index] = data.toString()  
       count++  
   
       if (count == 3)  
         printResults()  
     }))  
   })  
 }  
   
 for (var i = 0; i < 3; i++)  
   httpGet(i)  
*/