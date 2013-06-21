$(document).ready(function() {
	$(document).keydown(function(e) {
		switch (e.which) {
			// user presses the "Q" STRAFE LEFT
			case 81:
				$(".Q").addClass("active");
				$.ajax({
					url: "http://192.168.0.105:8071/motion-control/update",
					data: {
						strafe: 1
					},
					dataType: "jsonp"
				});
				break;

				// user presses the "W" key FORWARD
			case 87:
				$(".W").addClass("active");
				$.ajax({
					url: "http://192.168.0.105:8071/motion-control/update",
					data: {
						forward: 1
					},
					dataType: "jsonp"
				});
				break;

				// user presses the "E" key STRAFE RIGHT
			case 69:
				$(".E").addClass("active");
				$.ajax({
					url: "http://192.168.0.105:8071/motion-control/update",
					data: {
						strafe: -1
					},
					dataType: "jsonp"
				});
				break;

				// user presses the "A" key LEFT 
			case 65:
				$(".A").addClass("active");
				$.ajax({
					url: "http://192.168.0.105:8071/motion-control/update",
					data: {
						turn: -1
					},
					dataType: "jsonp"
				});
				break;

				// user presses the "S" key REVERSE 
			case 83:
				$(".S").addClass("active");
				$.ajax({
					url: "http://192.168.0.105:8071/motion-control/update",
					data: {
						forward: -1
					},
					dataType: "jsonp"
				});
				break;

				// user presses the "D" key RIGHT
			case 68:
				$(".D").addClass("active");
				$.ajax({
					url: "http://192.168.0.105:8071/motion-control/update",
					data: {
						turn: 1
					},
					dataType: "jsonp"
				});
				break;
		}
	})
	$(document).keyup(function(e) {

		switch (e.which) {

			case 81:
				$(".Q").removeClass("active");
				$.ajax({
					url: "http://192.168.0.105:8071/motion-control/update",
					data: {
						strafe: 0
					},
					dataType: "jsonp"
				});
				break;

				// user presses the "W" key FORWARD
			case 87:
				$(".W").removeClass("active");
				$.ajax({
					url: "http://192.168.0.105:8071/motion-control/update",
					data: {
						forward: 0
					},
					dataType: "jsonp"
				});
				break;

				// user presses the "E" key STRAFE RIGHT
			case 69:
				$(".E").removeClass("active");
				$.ajax({
					url: "http://192.168.0.105:8071/motion-control/update",
					data: {
						strafe: 0
					},
					dataType: "jsonp"
				});
				break;

				// user presses the "A" key LEFT 
			case 65:
				$(".A").removeClass("active");
				$.ajax({
					url: "http://192.168.0.105:8071/motion-control/update",
					data: {
						forward: 0
					},
					dataType: "jsonp"
				});
				break;

				// user presses the "S" key REVERSE 
			case 83:
				$(".S").removeClass("active");
				$.ajax({
					url: "http://192.168.0.105:8071/motion-control/update",
					data: {
						strafe: 0
					},
					dataType: "jsonp"
				});
				break;

				// user presses the "D" key RIGHT
			case 68:
				$(".D").removeClass("active");
				$.ajax({
					url: "http://192.168.0.105:8071/motion-control/update",
					data: {
						turn: 0
					},
					dataType: "jsonp"
				});
				break;
		}
	})
});


// http://d2o0t5hpnwv4c1.cloudfront.net/013_keypress/demo/demo.html
// http://net.tutsplus.com/tutorials/javascript-ajax/how-to-create-a-keypress-navigation-using-jquery/