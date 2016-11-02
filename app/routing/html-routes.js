var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({extended: false});

router.route("/")
	.all(function(req, res) {
		// res.send("home.html");
	})
	.get(function(req, res) {
		// res.send("home.html");

	});

module.exports = router;