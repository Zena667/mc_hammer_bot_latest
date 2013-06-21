$(document).ready (function() {

// GavinThompson



	$(document).keydown(function(e) {

		// listens for any navigation keypress activity
			
				switch(e.which) {
					// user presses the "Q" STRAFE LEFT
					case 81: 	$(".Q").addClass("active");
						$(document).keyup(function(e){
						$.ajax({url: "http://localhost:8071/motion-control/update", data: {strafe: -1}, dataType: "jsonp"});
						});	
						$(".Q").removeClass("active");
						
						break; 
								
					// user presses the "W" key FORWARD
					case 87:	$(".W").addClass("active");
						$(document).keyup(function(e){
						$.ajax({url: "http://localhost:8071/motion-control/update", data: {forward: 1}, dataType: "jsonp"});
						});	
						$(".W").removeClass("active");
						
						break;
								
			 		// user presses the "E" key STRAFE RIGHT
					case 69:	$(".E").addClass("active");
						$(document).keyup(function(e){
						$.ajax({url: "http://localhost:8071/motion-control/update", data: {strafe: 1}, dataType: "jsonp"});
						});	
						$(".E").removeClass("active");
						
						break;
								
					// user presses the "A" key LEFT 
					case 65:	$(".A").addClass("active");
						$(document).keyup(function(e){
						$.ajax({url: "http://localhost:8071/motion-control/update", data: {forward: -1}, dataType: "jsonp"});
						});	
						$(".A").removeClass("active");

						break;
								
					// user presses the "S" key REVERSE 
					case 83:	$(".S").addClass("active");
						$(document).keyup(function(e){
						$.ajax({url: "http://localhost:8071/motion-control/update", data: {strafe: -1}, dataType: "jsonp"});
						});	
						$(".S").removeClass("active");
						
						break; 

					// user presses the "D" key RIGHT
					case 68:	$(".D").addClass("active");
						$(document).keyup(function(e){
						$.ajax({url: "http://localhost:8071/motion-control/update", data: {turn: 1}, dataType: "jsonp"});
						});	
						$(".D").removeClass("active");
						
						break;

								// user presses the "X" key STOP
					case 88:	$(".X").addClass("active");
						$(document).keyup(function(e){
						$(".X").removeClass("active");
						});
						
						break;
				}
	})
});

	


// var test = $.post("http://localhost:8071/motors", function() {
// 	alert("success");
// })
	




// http://d2o0t5hpnwv4c1.cloudfront.net/013_keypress/demo/demo.html
// http://net.tutsplus.com/tutorials/javascript-ajax/how-to-create-a-keypress-navigation-using-jquery/


