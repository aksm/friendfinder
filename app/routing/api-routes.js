var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var friends = require("../data/friends.js");
var path = require("path");

router.route("/auth")
	.get(function(req, res) {
		var email = req.query.email;
		var password = req.query.password;
		var friend = new friends(email, password);
		friend.loginuser();
		res.send({redirect: "/survey"});
	})
	.post(parseUrlencoded, function(req, res) {
		var email = req.body.email;
		var password = req.body.password;
		var friend = new friends(email, password);
		friend.registeruser();
		console.log(req.get("referer")+"survey");
		res.send({redirect: "/survey"});
	});
router.route("/survey")
	.post(parseUrlencoded, function(req, res) {
		var user = req.body;
		console.log(user);
		res.status(201).json(user.name);
	});
module.exports = router;