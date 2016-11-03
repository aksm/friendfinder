var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var path = require("path");

router.route("/")
	.all(function(req, res) {
		res.sendFile(path.join(__dirname, "../public","index.html"));
	});
router.route("/survey")
	.get(function(req, res) {
		res.sendFile(path.join(__dirname, "../public","survey.html"));
	});

module.exports = router;