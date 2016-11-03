var firebase = require("firebase");
var config = require("../../config.js");

var db, uid;

var fbData = {
	init: function() {
		firebase.initializeApp(config);
		db = firebase.database();
	},
	registeruser: function(email, password) {

		var createuser = firebase.auth().createUserWithEmailAndPassword(email, password);

		createuser.then(function() {
			uid = firebase.auth().currentUser.uid;
			console.log(uid);
		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;

		}); // Firebase create user function
	},
	loginuser: function(email, password) {

		var loginuser = firebase.auth().signInWithEmailAndPassword(email, password);

		loginuser.then(function() {
			uid = firebase.auth().currentUser.uid;
			// console.log(uid);
		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;

		}); // Firebase login user function
	},
	addsurvey: function(user) {
		db.ref(uid).update(user);
	},
	findmatch: function(user) {
		// console.log(user.body);
		db.ref().once("value")
		.then(function(snapshot) {
			var compare = {};
			snapshot.forEach(function(childSnapshot) {
				var key = childSnapshot.key;
				var childData = childSnapshot.val();
				// console.log(uid, key);
				if(uid !== key) {
					console.log(uid, key);
					var totalDiff = 0;
					for(var k in childData) {
						if(k !== "name" && k !== "curl") {
							console.log(k, user.body[k], childData[k]);
							totalDiff += Math.abs(parseInt(user.body[k]) - parseInt(childData[k]));
						}
					}
					compare[key] = totalDiff;
					console.log(totalDiff);
				}
				// console.log(key, childData);
			});
		});
	}
};

module.exports = fbData;
