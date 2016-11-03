var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var parseUrlencoded = bodyParser.urlencoded({extended: false});

router.route("/")

	.post(parseUrlencoded, function(req, res) {
		var user = request.body;
		blocks[newBlock.name] = newBlock.description;
		response.status(201).json(newBlock.name);
	});
module.exports = router;