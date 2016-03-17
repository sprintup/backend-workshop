## A test MEAN todo app
* based from this [repo](https://github.com/sprintup/mean-todo) and from this [tutorial](https://teamtreehouse.com/library/building-a-mean-application)
* [the original mean stack blog post](http://bit.ly/1Ozaz5J)
* Scaffold a new mean stack project with [meanjs generator](http://meanjs.org/generator.html)
* [Yeoman](http://yeoman.io/) to generate almost any type of project
 * Must have meanjs generator installed before running `yo meanjs`

* src- creates a clear seperation between my code and third party libraries. This directory contains all node app code.
 * api- is where you store all of your api routes
 * index.js- api module
* public- static assets (html files, imgs, css)


### Express 
* express() is the default method for creating an instance for setting up middleware for configuring routes and starting server
* [app.use()](http://expressjs.com/en/api.html#app.use) mounts the specified middleware function or functions at the specified path. 
 * express.static() tells express which file to serve static files from
 * express automatically formats JSON response headers if you return a JSON object

### Nodemon
* node module that starts your server based on the entry point that we configured when we initialized the project with npm init
* watches javascript files and restarts server when changes occur

## Routes
* GET routes are the most common types or routes in web applications. To use a GET route use the .get() method
* all files in public folder have a route so be careful not to create new routes that conflict with the routes that already exist
 * to avoid this prefix api routes with '/api/' to create api namespace.
 * also can use a router instead of manually writing prefix. This works a lot like mounting the api routes to the app, but instead of mounting the route to the app, mount it to the router. Then mount the router to the app using app.use('/', router);
 * The router will automatically prefix the route with the namespace.
 * Want to keep routes in their own file 

## Mock Data
* [Postman](https://www.getpostman.com/) to check routes
 * lets you see header information sent with response
 * collections for working on multiple applications
 * environment variables to switch from local and remote servers

## Angular 
* in index.html file the app is loaded/initilized or 'bootstrapped' with the ng-app directive
 * ng-controller director binds main controller to div
 * <todo> is a custom directive
* in scripts/app.js angular is creating new module
	* this module must be included in the html before the rest of the directives, services and controllers so they can be attached to the app as dependencies.
* name controller files the same as the controller name
 * main functionallity of main controller file is the addTodo method that creates a new todo and adds it to the todos that are currently in the angular scope.
 * whenever the main controller is loaded (page is visited) data service gets the todos and attaches the scopes to the todos variable
* custom directive lives in scripts/directives folder
	* not a whole lot in the scripts file 
	* in the todo template file, there are ng-class directives which add classes based on when the scopes variables evaluate to true or false
	* ng-click method do things like setting variable editing to true; to firing the delete todo scope method
	* allows main controller to be lightweight
* best practice to keep the controllers with as little logic as possible by keeping the core logic inside directives and services 
	* write core logic once 

## Connecting Angular app with Express app
1. Make changes to data service in scripts/services/data to load todos from api

## Webpack
* all js files need to be included in html file, in order
	* module loaders like [webpack](https://webpack.github.io/) let you bundle your js files into a single file
	* lets you install vendor resources using npm and reference them the same way you would in node (require method).
	* move into an app directory
	* remove all script tags from html and replace them with 2 
		* /scripts/vendor.bundle.js //third party libraries (angular)
		* /scripts/todo.bundle.js //app code
	* run `webpack --watch' to tell webpack to rebuild bundles if js files change
* [webpack.config.js](https://webpack.github.io/docs/configuration.html) is needed for webpack to work 
	* context- where application source code lives
	* entry- first file webpack should load (like package.json main): see [code splitting](https://webpack.github.io/docs/code-splitting.html)
	* output- where bundle will go when webpack is done

# Mongo
* Install [Homebrew](http://brew.sh/)
* setting up [mongo](http://treehouse.github.io/installation-guides/mac/mongo-mac.html)
* Using Mongo
	* start mongo daemon with `mongod`
	* in another terminal start shell with `mongo', which is an app to access data in MongoDB
	* exit shell with `quit()`
	* stop mongo daemon `ctrl-c`
* to connect app to mongo
	* create a database.js file in the src directory
	* add callback to verify mongoose is working properly in the database.js file

## Mongoose
* [Mongoose](http://mongoosejs.com/) is a node middleware that allows us to create complex objects or models to represent our data to store it in mongodb.
* Install mongoose with `npm install --save -E mongoose`
* to create a connection with mongoddo use `mongoose.connect()`
	* then require databas in app.js file
* mongoose is singleton: meaning changes in one file are reflected across node process
* return err with response status like in index.js

## Schema
* schema- is a way to define and control an object that will be stored in the database
* first create a models directory in src folder
* models directory- where we keep our mongoose models
* register models with mongoose
* use schema constructor to create new mongoose schema, which is the Schema() method off the mongoose module
* most simple schema are objects with names and [value types](http://mongoosejs.com/docs/schematypes.html)
* once you have a schema, you can create the model

## Model
* create a model using the mongoose.model() method [docs](http://mongoosejs.com/docs/models.html)
* because mongoose is a singleton, models are available where ever you require mongoose

## Iron Node Debugger
* [Iron Node](http://s-a.github.io/iron-node/) lets us interactivly debug applications in the browser while the node application is running
* install with `npm install iron-node -g`
* breakpoints are a main way to debug. There are two ways to set them
	* Permanent breakpoint into code: debugger;
	* Temporary breakpoints in debugger
* Use iron-node just like node command: `iron-node src/app.js`
* to manually load file into memory in iron node is with cmd-p and enter file
* can be used to sift through scopes, including closures.

## Using Models 
* capitilizing first letter is a convention for referencing models, class or constructor function
* get data (todos) from database using models .find() method
	* first parameter is a JSON object where you pass conditions for the objects that you want to find. Empty object will return all.
	* second parameter is a callback function that takes 2 arguments (err, todos). Mongoose will always take err as first parameter
* create new record on database with .create() method and pass it a JSON object

## Seed Data
* create a seed.js file in src file with mock todos

## Creating data with POST routes in Express
* add post route with router.post() convenience method
* post method used to send data to the server
* Express does not have a body parser by default
	* To parse data use the [body-parser](https://github.com/expressjs/body-parser) module `npm install body-parser --save -E`
	* tell express to use body-parser's JSON method with app.use(parser.json()); in the app.js file
	* body parser has many other methods for parsing 

## Editing Data with PUT route
* use put convenience method
* with id parameter
	* so that you can get the parameter from the req.params object
	* handled with Express
* need to look up todo by it's id and then update it
	* mongoos has a findByIdAndUpdate() method
	* must explicitly tell mongoose to return new data by sending an object with a key of "new" set to true as 3rd argument
* mongoose returns the old argument by default when updating record
* /todos/:id the color represents a paramter

## Create and Update data in Angular
* $q.all(queue) to run all of the requests in parallel
	* .all() method iterates through queue, runs each request and returns a promise
	* passing promises. Remember to return promise in data.js
	* angular [$q](https://docs.angularjs.org/api/ng/service/$q)
		* resolves all promises before returning results

# Advanced Angular
* [ngInclude](https://docs.angularjs.org/api/ng/directive/ngInclude) to include navbar template
	* just include the ng-include directive where you want the template in your html, with the src set to the path to template in the templates folder
* [Angulars interval service]
	* when you request a template through url, like ng-include src attribute, angular first looks for the template in the template cache. If it's not there angular will put it there for further use.
	* the src attribute takes an expression that should result in a path to the template. In this app it's a string, but it could be a function or inline string concatenation
* two-way data binding means it is prefered to use angular [wrapper services](https://docs.angularjs.org/api/ng/service) instead of common native js methods
	* .setInterval() == $interval
	* .setTimeout() == $timeout
* error method gives stack trace, which helps with debugging

