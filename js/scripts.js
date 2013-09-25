/* -------------- document ---------------- */	

$(document).ready(function() {

	/* -------------- shadowbox ---------------- */
	
	Shadowbox.init({
		overlayColor		: '#000',	
		overlayOpacity		: 0.7,
		counterLimit		: '60'
	});
	
	/* -------------- tooltips dot-navigation ---------------- */	
	
	$('#intro-dot').tipsy({html: true, gravity: 'e'});
	$('#tecno-dot').tipsy({html: true, gravity: 'e'});
	$('#news-dot').tipsy({html: true, gravity: 'e'});
	$('#contact-dot').tipsy({html: true, gravity: 'e'});
	
			
	
	/* -------------- scrollTo dot-navigation ---------------- */
	
	$('#nav-section').localScroll({hash : 'true'});
	$('#nav-contact').localScroll({hash : 'true'});
	$('#dot-nav').localScroll({hash : 'true'});
	
	
	
	/* -------------- keyboard navigation ---------------- */
	
	function scrollToNew () {
		var scroll_position = $(window).scrollTop();
	  	$('.text-container').each(function(i, div){ 
			div_top = $(div).offset().top; 
			if (scroll_position < div_top) { 
		  		anchor_hash = $(this).attr("id")
		  		$.scrollTo(div, 800, {onAfter:function(){ 
		  			document.location.hash = anchor_hash;
				}}); 
		 		return false; 
			}
		});
	}
	
	function scrollToLast () {
		var scroll_position = $(window).scrollTop();
		var scrollToThis = null;
	  	$('.text-container').each(function(i, div) {
			div_top = $(div).offset().top;
			if (scroll_position > div_top) {
		  		scrollToThis = div;
				anchor_hash = $(this).attr("id");
		  	} else {
		  		return false;
		  	}
	  	});
		if(scrollToThis != null) {
			$.scrollTo(scrollToThis, 800, {onAfter:function(){ 
		  		document.location.hash = anchor_hash;
			}}); 
	  	}
	}
	
	$(document).keydown(function (evt) {
		if (evt.keyCode == 40) { 
			//evt.preventDefault();
			scrollToNew(); 
	  	} else if (evt.keyCode == 38) {
			//evt.preventDefault();
			scrollToLast();
	  	}
	});
	
			
});

	
/* -------------- parallax scroll ---------------- */	

$(window).scroll(function(e) {
	
	var delay = 0;
	var bg_speed = 0.9;
	var object_speed = 0.6; 			 		
	var container_offset = 0;
	
	var scroll_position = $(window).scrollTop();
	
	$("#main-content").stop().animate({ top : 0 - scroll_position}, delay);
			
	/* -------------- active position in dot navigation ---------------- */			
	var active_position = scroll_position;		
	$("#dot-nav li a.dot-orange-active").removeClass("dot-orange-active");	
	
	if (active_position <= 500 ) {$("#intro-dot").addClass("dot-orange-active");}			
	else if (active_position <= 1500) {$("#tecno-dot").addClass("dot-orange-active");}
	else if (active_position <= 2500) {$("#news-dot").addClass("dot-orange-active");}
	else {$("#contact-dot").addClass("dot-orange-active");}
			
	
});

/* -------------- input placeholder fix ---------------- */


$(function(){   
	if (!(Modernizr.input.placeholder)) {  
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function() {
			var input = $(this);
			if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			})
		});
	}
});