$(function() {
	$("#quiz").on("submit", function(event) {
	 	console.log($(this).serializeArray());
	 	var results = $(this).serializeArray();
		$.post("/api/survey", results)
		.done(function() {
			console.log("yay");
			// $.get("/api/survey", );
		});
  		event.preventDefault();
	});
});