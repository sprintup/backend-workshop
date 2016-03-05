console.log('routes/index.js');

var express = require('express');
var router = express.Router();

//these three lines make database accessible
var config = require('../config');
var orch = require('orchestrate');
var db = orch(config.dbkey);


/* GET home page. */
/*Currently, routes immediately to login screen, will change in the future to see home page if already logged in
with use of cookies*/

//login routes
//this is the first thing that loads on our page.  In the future, we can use cookies to get the index page
//instead of the login page if user already signed in earlier (cookies...yum)
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Warbler' });
  console.log('routes/index.js/router.get');
});

//this is the route that occurs when user hits login button
router.post('/', function(req, res, next) {
  var userLogin = req.body;
  var name = userLogin.loginUserInput;
  var password = userLogin.loginPassInput;
//order
  db.get("users", name).then(function (reply) { //reply is return value of get
//eat
    var userDatabase = reply.body;
    console.log(userDatabase);
    var bio = userDatabase.bio;
    //if an object for this user's object is found in our database and password matches,
    //render the main page (index.hbs).  If this user's object is NOT found and/or enters an
    //incorrect password, then re-render the login.js page with an error that says their
    //username or password is incorrect.
    if (userDatabase !== undefined && password === userDatabase.password){
      res.render('index', { title: 'Warbler', intro: 'Welcome back', username: name, bio:bio });
    } else {
      res.render('login', { title: 'Warbler', errMsg: 'Incorrect username or password.' });
    }
  })
});
//register routes
//this route renders the register page when user clicks the Sign Up button on the login page.
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Warbler' });
});

//this is the route that occurs when user clicks the Register button on the register page
router.post('/users', function(req, res, next) {
  var userRegister = req.body;
  var name = userRegister.username;
  var allUsers = database.list("users");
  //if username is already in our database, console log a message saying the username is already taken.
  //if username is not already taken, save username and password to database and take user to main (index) page.
  if(name in allUsers) {
    res.redirect('/register');
    //right now we only console log this error message...not sure how to get it in browser yet.
    console.log('Username is already taken.')
  } else {
    database.post("users", userRegister);
    res.render('index', { title: 'Warbler', intro: "Welcome to Warbler", username: name });
  }

})

module.exports = router;
