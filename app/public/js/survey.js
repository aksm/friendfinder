$(function() {
	$("#quiz").on("submit", function(event) {
	 	var results = $(this).serializeArray();
		$.post("/api/survey", results)
		.done(function(data) {
			console.log("yay");
			// $.get("/api/survey", results);
		});
  		event.preventDefault();
	});
});