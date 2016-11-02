// Import node packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var dotenv = require("dotenv");
var firebase = require("firebase");
var app = express();
// dotenv.load();

// Set port
app.set("port", process.env.PORT || 8080);
// var port = app.get("port");

// Set static
app.use("/",express.static(__dirname + '/app/public'));

//Routing
// var html = require("./app/routing/html-routes");
// var api = require("./app/routing/api-routes");

// app.use("/", html);
// app.use("/api-routes", api);

var config = {
  apiKey: process.env.FB_APIKEY,
  authDomain: process.env.FB_AUTHDOMAIN,
  databaseURL: process.env.FB_DATABASEURL,
  storageBucket: process.env.FB_STORAGEBUCKET,
};

firebase.initializeApp(config);

// As an admin, the app has access to read and write all data, regardless of Security Rules
// var db = firebase.database();
// var ref = db.ref();
// var usersRef = ref.child("users");
// usersRef.set({
//   alanisawesome: {
//     date_of_birth: "June 23, 1912",
//     full_name: "Alan Turing"
//   },
//   gracehop: {
//     date_of_birth: "December 9, 1906",
//     full_name: "Grace Hopper"
//   }
// });

app.listen(app.get("port"), function() {console.log("Hollaback on port: "+app.get("port"));});