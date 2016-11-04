var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var friends = require("../data/friends.js");
var path = require("path");

// Initialize firebase
friends.init();

// Route for authentication
router.route("/auth")
	.get(function(req, res) {
		var email = req.query.email;
		var password = req.query.password;
		friends.loginuser(email, password);
		res.send({redirect: "/survey"});
	})
	.post(parseUrlencoded, function(req, res) {
		var email = req.body.email;
		var password = req.body.password;
		friends.registeruser(email, password);
		res.send({redirect: "/survey"});
	});

// Route for handling survey data
router.route("/survey")
	.post(parseUrlencoded, function(req, res) {
		var user = req.body;
		friends.addsurvey(user).findmatch(req, function(err, matchName) {
			res.status(201).json(matchName);			
		});
	});
module.exports = router;