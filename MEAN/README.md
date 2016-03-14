## A test MEAN todo app
* from this [tutorial](https://teamtreehouse.com/library/building-a-mean-application)
* [the original mean stack blog post](http://bit.ly/1Ozaz5J)
* Scaffold a new mean stack project with [meanjs generator](http://meanjs.org/generator.html)
* [Yeoman](http://yeoman.io/) to generate almost any type of project
 * Must have meanjs generator installed before running `yo meanjs`

* src- creates a clear seperation between my code and third party libraries. This directory contains all node app code.
* public- static assets (html files, imgs, css)


### Express 
* express() is the default method for creating an instance for setting up middleware for configuring routes and starting server
* [app.use()](http://expressjs.com/en/api.html#app.use) mounts the specified middleware function or functions at the specified path. 
 * express.static() tells express which file to serve static files from

### Nodemon
* node module that starts your server based on the entry point that we configured when we initialized the project with npm init
* watches javascript files and restarts server when changes occur