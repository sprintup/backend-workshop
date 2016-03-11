### [LearnyouNode](https://github.com/workshopper/learnyounode)

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