$(function() {
	$(".modal").modal();
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
});