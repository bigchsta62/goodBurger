// once everything is fully loaded...
$(function() {
	// upon clicking the submit button...
	$("#submit").on("click", function(event) {
		// prevents default event upon submission
		event.preventDefault();
		// grabs user input
		const burgerName = $("#bname").val().trim();
		console.log(burgerName);
		console.log("clicky working");

		if (burgerName == "") {
			// if the user does not enter a name, display error message
			alert("Welcome to Good Burger, home of the Good Burger! Can I take your order?");
		} else {
			$.ajax("/api/burgers", {
	      		type: "POST",
	      		data: {
	      			burgerName: burgerName
	      		}
	    	}).then(function(res) {
				
	        	// reload the page to display new burger
	        	location.reload();
	      	});
		}
	});

	// eating a burger
	$(".btn").on("click", function() {
		var id = $(this).data("id");

		$.ajax("/api/burgers/" + id, {
      		type: "PUT",
      		data: {
      			devoured: true
      		}
    	}).then(function() {
       		// reload the page to display changes
	        location.reload();
      	});
	});

	// ordering another burger
	$(".btn").on("click", function() {
		var id = $(this).data("id");

		$.ajax("/api/burgers/" + id, {
      		type: "PUT",
      		data: {
      			devoured: false
      		}
    	}).then(function() {
       		// reload the page to display changes
	        location.reload();
      	});
	});
});
