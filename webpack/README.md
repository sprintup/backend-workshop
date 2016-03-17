## Webpack tutorial
* [getting started](http://webpack.github.io/docs/tutorials/getting-started/) with webpack
* [github](https://github.com/webpack/webpack)
* webpack will analyze your entry file for dependencies to other files. These files (called modules) are included in your bundle.js too. webpack will give each module a unique id and save all modules accessible by id in the bundle.js file. Only the entry module is executed on startup. A small runtime provides the require function and executes the dependencies when required.
* Loaders
	* [CSS Loader](https://github.com/webpack/css-loader)
	* [Style Loader](https://github.com/webpack/style-loader)
	* Binding Loaders: Bind file extensions to loaders with a terminal command
* Code Splitting
	* on demand loaded chunks of code instead of a monolythic code base (applies best to large web apps)