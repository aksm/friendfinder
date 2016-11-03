var firebase = require("firebase");
// var dotenv = require("dotenv");
var config = require("../../config.js");

firebase.initializeApp(config);
var db = firebase.database();

var fbData = function(email, password) {
	this.email = email;
	this.password = password;
	this.uid = "";
	this.registeruser = function() {

		var createuser = firebase.auth().createUserWithEmailAndPassword(this.email, this.password);

		createuser.then(function() {
			this.uid = firebase.auth().currentUser.uid;
			console.log(this.uid);
		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;

		}); // Firebase create user function
	};
	this.loginuser = function() {

		var loginuser = firebase.auth().signInWithEmailAndPassword(this.email, this.password);

		loginuser.then(function() {
			this.uid = firebase.auth().currentUser.uid;
			console.log(this.uid);
		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;

		}); // Firebase login user function
	};
	this.addsurvey = function(user) {
		db.ref(this.uid).update({

		});
	};
};

module.exports = fbData;
