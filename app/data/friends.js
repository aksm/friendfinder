var firebase = require("firebase");
var config = require("../../config.js");

// global variables to pass to api
var db, uid, matchName, matchImage;

var friends = {

	// Initialize database
	init: function() {
		firebase.initializeApp(config);
		db = firebase.database();
	},

	// Register user (still needs error handling for checking existing users)
	registeruser: function(email, password) {

		var createuser = firebase.auth().createUserWithEmailAndPassword(email, password);

		createuser.then(function() {
			uid = firebase.auth().currentUser.uid;
		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;

		}); // Firebase create user function
	},

	// Log in user (still needs error handling for users already logged in)
	loginuser: function(email, password) {

		var loginuser = firebase.auth().signInWithEmailAndPassword(email, password);

		loginuser.then(function() {
			uid = firebase.auth().currentUser.uid;
		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;

		}); // Firebase login user function
	},

	// Post survey data to firebase
	addsurvey: function(user) {
		db.ref(uid).update(user);
		return this;
	},

	// Get data from firebase and handle matching logic
	findmatch: function(user, cb) {
		db.ref().once("value")
		.then(function(snapshot) {
			var compare = {};
			var matchKey = "";
			var matchVal;
			snapshot.forEach(function(childSnapshot) {
				var key = childSnapshot.key;
				var childData = childSnapshot.val();

				// Matchy matchy here
				if(uid !== key) {
					var totalDiff = 0;
					for(var k in childData) {
						if(k !== "name" && k !== "curl") {
							totalDiff += Math.abs(parseInt(user.body[k]) - parseInt(childData[k]));
						}
					}
					if(matchKey === "") {
						matchKey = key;
						matchVal = totalDiff;
						matchName = childData.name;
						matchImage = childData.curl;
					} else if (totalDiff <= matchVal) {
						matchKey = key;
						matchVal = totalDiff;
						matchName = childData.name;
						matchImage = childData.curl;
					}
					compare[key] = totalDiff;
				}
			});

			// match object to pass back via api
			var match = {"name": matchName, "image": matchImage};
			// below two lines for adding matches to database later
			// match["match"] = matchKey;
			// db.ref(uid).update(match);
			cb(null, match);
		});
	}
};

module.exports = friends;
