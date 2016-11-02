$(function() {
	$("#quiz").on("submit", function(event) {
	 	console.log( $(this).serializeArray()[2] );
		// $.post("/api/friends", function() {

		// });
  		event.preventDefault();
	});
});