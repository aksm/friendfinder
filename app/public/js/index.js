// Switch for login/registration
var gateway = function() {
	$(document).on("click", "#register", function() {
		var login = $("#login-button").text();
		var register = $("#register").text();
		if(login == "Login") {
			$("#login-button").text("Register");
			$("#register").text("Login");
		} else {
			$("#login-button").text("Login");
			$("#register").text("Register Now!");			
		}
	});	
};

var login = function() {
	$("#login-form").on("submit", function() {
		var user = $(this).serializeArray();
		var entryType = $("#login-button").text();
		switch(entryType) {
			case "Login":
				$.get("/api/auth", user).
				done(function(data) {
					console.log("yay");
					window.location = data.redirect;
				});
				break;
			case "Register":
				$.post("/api/auth", user).
				done(function(data) {
					console.log("yay");
				});
				break;
			default:
				console.log("WTF");
		}
	});
};

$(function() {
	$(".modal").modal();
	gateway();
	login();
});