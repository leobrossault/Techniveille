"use strict";


$(window).ready(function() {
	$( '.newContent' ).css( 'width',  $('.oldContent').width()) ;
	function start() {
		var hPreHome = '-'+$('#pre-home').height();
		$( '#pre-home' ).animate({
		    marginTop: hPreHome
		  }, 700 );
		$('#menu').addClass('appear');
	}
	/* PRE-HOME */
	var arrow = $('#pre-home a');
	arrow.on('click', start);

	/* MENU */
	var nav = $('#menu ul li a');
	nav.click(function() {
		nav.removeClass('active');
		$(this).addClass('active');
	});



	/* NAVIGATION */
	//var xStart = 0;
	var hDesktop = window.innerHeight;
	var section = $('.section');
	var wSection = $('.section').width();
	var wayH = 2*window.innerWidth;
	var wayV =0;
	
	section.css('height', hDesktop);

	window.onmousewheel = document.onmousewheel = function(e) {
		e = e || window.event;
		if (e.preventDefault) {
			e.preventDefault();
			e.returnValue = false;
		}
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


	

	/** OLD/NEW Navigation **/

	$( '.separator' ).draggable({
		axis: 'x',
		containment: 'parent',
		scroll: false,
 		 drag: function( event, ui ) {
 		 	$('.new').width(ui.position.left);
 		 	$('.separator').css( 'left', ui.position.left + 'px');
 		 },
 		 dragstop: function( event, ui ) {
 		 	$('.new').width(ui.position.left);
 		 	$('.separator').css( 'left', ui.position.left + 'px');
 		 }

	});

window.addEventListener('keydown', function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
	/* NAVIGATION CLAVIER */
$(document).keydown(function(e) {

	if(wayH<0){
		wayH =0;
	}
	
	if(wayV<0){
		wayV =0;
	}
	
	
    switch (e.which) {
     case 40:
		down();
       break;
     case 39:
    	 right();
       break;
     case 38:
        up();
        break;
     case 37:
     	left();
     	break;
    }
    //console.log('Vertical : ' + wayV +'\n Horizontal : ' + wayH);
});
function left() {
	wayH -= window.innerWidth;
	$('html, body').animate({
	    scrollLeft: wayH
	}, 500);
	return false;	
}
function down() {
	if(wayV<4*window.innerHeight){

	
	wayV += window.innerHeight;
	$('html, body').animate({
	    scrollTop: wayV
	}, 500);
	return false;	
	}
}
function right() {
	if(wayH <4*window.innerWidth){
		wayH += window.innerWidth;
		$('html, body').animate({
		    scrollLeft: wayH
		}, 500);
		return false;	
	}
}
function up() {
	wayV -= window.innerHeight;
	$('html, body').animate({
	    scrollTop: wayV
	}, 500);
	return false;
}

	/* CENTRER IMAGE */

	$('.chapitre img').each(function(){
		var imgWidth = $(this).width();
		$(this).css({
			width: imgWidth
		});
	});

	$('.chapitre .newImgContainer').each(function(){
		$(this).css({
			width: wSection
		});
	});

	
});