### [Learnyounode](https://github.com/workshopper/learnyounode)
Learn you node is a tool for learning node. Below are my notes. 

## Lesson 1
* To print these instructions again, run: learnyounode print
* To execute your program in a test environment, run: learnyounode run program.js                                                                
* To verify your program, run: learnyounode verify program.js           
* For help run: learnyounode help 

## Lesson 2: Baby Steps
* process.argv is the global process object. The first element is node, second element is path
* prefix property with '+' or using Number to change from string to number

## Lesson 3: My first I/O
* [file system](file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html)
* [buffers](file:///usr/local/lib/node_modules/learnyounode/node_apidoc/buffer.html) are Node's way of efficiently representing arbitrary arrays of data, whether it be ascii, binary or some other format.
 * buffer objects have to be converted to strings

## Lesson 4: My First Async I/O
* fs.readFile()
* [node callbacks](https://github.com/maxogden/art-of-node#callbacks)
* the difference between blocking and non blocking I/O
* async programming using the file system and how to use callbacks
* the difference between defining and invoking functions
* functions can be passed around with different names, but in node it's safe to assume cb or callback is a function.
* event loop polls for callbacks from dispatched operations in the task queue to execute on the call stack.
* node parses code to check for syntax errors before it runs the code.
* the first argument in a callback is an error

## Lesson 5: Filtered LS
* [path module](file:///usr/local/lib/node_modules/learnyounode/node_apidoc/path.html)
* callback functions don't need names

## Lesson 6: Make It Modular
* conforming to a set of rules allows other node users to easily implement your procedure. 
* extenstions are option when requiring modules
* it's idiomatic to check for errors and do early-returns within callback functions.
* module.exports callbacks and invoking with require
* node syntax for callback arguments is error, data. So first arg when invoking callback ought to be null.
* you must return the callback with the error in the argument, even in early returns
* in learnyounode errors should not be prefixed with string
* [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## Lesson 7: HTTP Client
* [http core module](file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html)
* [http.get(url, callback)](file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html#http_http_get_options_callback) is a get request
 * has signature of function callback (response) {}
 * this response object is a node stream
 * also has a setEncoding() method that you can set to "utf8" to convert to strings rather than a buffer. 
* [Node Streams](https://github.com/maxogden/art-of-node#streams). Three important events from a stream are "data","error","end".
 * Listen to events with response.on("data", function (data) {})
 * The "data" event is emitted when a chunk of data is available
* Set encoding outside event listener
* Remember to listen for the error event from the stream.

## Lesson 8: HTTP Collect
* [bl(Buffer List)](file:///usr/local/lib/node_modules/learnyounode/docs/bl.html)
* [concat-stream](file:///usr/local/lib/node_modules/learnyounode/docs/concat-stream.html)
* response.pipe() is how you pipe data into bufferlist

## Lesson 9: Juggling Async
* How to count asynchronous callbacks

## Lesson 10: Time Server
* [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
* Socket objects contain meta data regarding the connection, which is also a node duplex stream, meaning you can read from and write to it. 
* [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
* socket.write(data) to write data
* socket.end() to close socket
 * .end(data) simplifies the expression
* [strftime](https://github.com/samsonjs/strftime)
* [Date()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
* Every connection received by net server triggers callback that createserver() takes as an argument. 
 * the callback has a socket object as an argument as an argument

## Lesson 11: HTTP File Server
* http.createServer() creates a server that can talk HTTP
	* the server object that is returned is called the EventEmitter
* both request and response are node streams
* [Anatomy of a HTTP transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
* must set errors on request or the app might crash
* [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
* .pipe() directs data from one stream to another

## Lesson 12: HTTP Uppercaseer
* [through2-map](file:///usr/local/lib/node_modules/learnyounode/node_modules/through2-map  ) works like Array#map() but for streams of data
* request.on('data',callback) is where the data from the request is stored
* program with the thought that what is exected doesn't occur first and add exceptions. For instance, the solution has a if !POST return statment prior to logic. 

## Lesson 13: HTTP JSON API Server
* request.url is lowercase
* [node core url module](file:///usr/local/lib/node_modules/learnyounode/node_apidoc/url.html)
* it is important to set content type properly on responses.
* how to parse a url
* parsing iso dates from strings by passing string as argument to new date
* use response.end() to both pass data and close the socket
* when creating a JSON object, put its creation into a function 