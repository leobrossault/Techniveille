$(document).ready(function() {
	/* PRE-HOME */
	var arrow = $('#pre-home a');
	arrow.on('click', start);

	/* MENU */

	var nav = $('#menu ul li a');
	nav.click(function() {
		nav.removeClass('active');
		$(this).addClass('active');
	})


	/* NAVIGATION */
	var xStart = 0;
	var hDesktop = window.innerHeight;
	var section = $('.section')
	section.css('height', hDesktop);

	window.onmousewheel = document.onmousewheel = function(e) {
		e = e || window.event;
		if (e.preventDefault)
			e.preventDefault();
		e.returnValue = false;
	};

	$('.chapitre a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});

	$('#menu a').click(function(){
		$('html, body').animate({
	       	scrollLeft: $( $.attr(this, 'href') ).offset().left
		   }, 500);
		return false;
	});


	function start() {
		var hPreHome = $('#pre-home').height();
		$('#pre-home').addClass('translateTop');
		$('#menu').addClass('appear');
	}
});