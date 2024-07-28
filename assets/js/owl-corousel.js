(function($) {

	"use strict";

	// var fullHeight = function() {

	// 	$('.js-fullheight').css('height', $(window).height());
	// 	$(window).resize(function(){
	// 		$('.js-fullheight').css('height', $(window).height());
	// 	});

	// };
	// fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop:true,
	    autoplay: false,
	    autoHeight: false,
	    margin:30,
	    // animateOut: 'slideOutDown',
    	// animateIn: 'flipInX',
	    nav:true,
	    dots: false,
	    autoplayHoverPause: true,
	    items: 1,
	    // navText : ["<p><small>Prev</small><span class='ion-ios-arrow-round-back'></span></p>","<p><small>Next</small><span class='ion-ios-arrow-round-forward'></span></p>"],
	    navText : ["<p><span class='btn btn-primary'><i class='bi bi-arrow-left'></i></span></p>","<p><span class='btn btn-primary'><i class='bi bi-arrow-right'></i></span></p>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
	}
	);

	};
	carousel();

})(jQuery);