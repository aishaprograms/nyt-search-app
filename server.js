// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

// Using es6 promise
mongoose.Promise = Promise;

// Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Make public a static directory
app.use(express.static("public"));

// Require the routes in controllers
var routes = require("./controllers/articles_controller.js");
app.use('/', routes);

// Database configuration with mongoose
// heroku
mongoose.connect("mongodb://heroku_fqx5qqvd:54oahk6ul9l08rafjbsg5fmo0m@ds119370.mlab.com:19370/heroku_fqx5qqvd");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function () {
  console.log("Mongoose connection successful.");
});

// Listen on PORT
app.listen(PORT, function () {
  console.log("App running on port: " + PORT);
});