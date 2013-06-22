$ document.ready ->
	$ document.keydown = (e) ->
		adress = "http://192.168.0.105:8071/motion-control/update"
		key = e.which
		if key is 81
			$(".Q").addClass('active')
			$.ajax 
				url: adress
				data:
					strafe: 1
				dataType: "jsonp"
		if key is 87
			$(".W").addClass('active')
			$.ajax 
				url: adress
				data:
					forward: 1
				dataType: "jsonp"
		if key is 69
			$(".E").addClass('active')
			$.ajax 
				url: adress
				data:
					strafe: -1
				dataType: "jsonp"
		if key is 65
			$(".A").addClass('active')
			$.ajax 
				url: adress
				data:
					turn: -1
				dataType: "jsonp"
		if key is 83
			$(".S").addClass('active')
			$.ajax 
				url: adress
				data:
					forward: -1
				dataType: "jsonp"
		if key is 68
			$(".D").addClass('active')
			$.ajax 
				url: adress
				data:
					turn: 1
				dataType: "jsonp"
	$ document.keyup = (e) ->
			$(".Q,.S,.D,.A,.E,.W").removeClass('active')
			$.ajax 
				url: adress
				data:
					forward: 0
				dataType: "jsonp"
		

