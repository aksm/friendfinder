// Import node packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var dotenv = require("dotenv");
var app = express();
// var friends = require("./app/data/friends.js");
dotenv.load();

// Set port
app.set("port", process.env.PORT || 8080);
// var port = app.get("port");

// Set static
app.use("/",express.static(__dirname + '/app/public'));

//Routing
var html = require("./app/routing/html-routes");
var api = require("./app/routing/api-routes");

app.use("/", html);
app.use("/api", api);




app.listen(app.get("port"), function() {console.log("Hollaback on port: "+app.get("port"));});