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
		var entryType = $("#login-button").text();
	});
};

$(function() {
	$(".modal").modal();
	gateway();
});