$(function() {
	$(".modal").modal();	
	$("#quiz").on("submit", function(event) {
  		event.preventDefault();
	 	var results = $(this).serializeArray();
		$.post("/api/survey", results)
		.done(function(data) {
			$("#match-name").text(data.name);
			$("#match-image").attr("src", data.image);
			$("#quiz")[0].reset();
			$("#match").modal("open");
		});
	});
});