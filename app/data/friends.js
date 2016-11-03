var firebase = require("firebase");
var dotenv = require("dotenv");

var fbData = function(email, password) {
	this.email = email;
	this.password = password;
	this.registered = registered;
	this.uid = uid;
	this.createuser = function() {

		firebase.auth().createUserWithEmailAndPassword(this.email, this.password);

		createuser.then(function() {
			this.uid = firebase.auth().currentUser.uid;

			firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
				    // User is signed in.
				    user.updateProfile({
				    	displayName: rusername
				    }).then(function() {
				    	console.log("username updated");
				        // Update successful.
				    }, function(error) {
				        // An error happened.
				    });

				} else {
				    // No user is signed in.
				}
			});
		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;

		}); // Firebase create user function
	};
};

var config = {
  apiKey: process.env.FB_APIKEY,
  authDomain: process.env.FB_AUTHDOMAIN,
  databaseURL: process.env.FB_DATABASEURL,
  storageBucket: process.env.FB_STORAGEBUCKET,
};

firebase.initializeApp(config);

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = firebase.database();
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
module.exports = fbData;
