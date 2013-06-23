jQuery ->
	containerHeight = $('.container').css
	'height': -> $(window).height() * 0.9
	commandsHeight = $('.Q, .W, .E, .A, .S, .D').css
	'height': -> $('#commands').height()*0.4
	commandsWidth = $('#commands').css
	'width': -> $('.container').width() * 0.6
	buttonSize = $('#commands').css
	'height': -> ($('.container').height() * 0.2)
	iframe = $('iframe').css
	'height': -> ($('.container').height() * 0.6)

	$(window).resize -> 
		containerHeight()
	# 	commandsHeight()
	# 	commandsWidth()
	# 	buttonSize()
	# 	iframe()

# $('.container').css('height', $(window).height() * 0.9);
# 	  		$('.Q, .W, .E, .A, .S, .D').css('height', function() {
# 	  			return ($('#commands').height()*0.4);
# 	  		});
# 	  		$('#commands').css('width', function() {
# 	  			return ($('.container').width() * 0.6);
# 	  		});
# 	  		$('#commands').css('height', function() {
# 	  			return ($('.container').height() * 0.2);
# 	  		});
# 	  		$('iframe').css('height', function() {
# 	  			return ($('.container').height() * 0.6);
# 	  		});
	  
# 	  	$(window).resize(function() {
# 	  		$('.container').css('height', $(window).height() * 0.9);
# 	  		$('.Q, .W, .E, .A, .S, .D').css('height', function() {
# 	  			return ($('#commands').height()*0.6);
# 	  		});
# 	  		$('#commands').css('width', function() {
# 	  			return ($('.container').width() * 0.6);
# 	  		});
# 	  		$('#commands').css('height', function() {
# 	  			return ($('.container').height() * 0.2);
# 	  		});
# 	  		$('iframe').css('height', function() {
# 	  			return ($('.container').height() * 0.6);
# 	  		});
# 	  	});