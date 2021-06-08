(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	// Slicknav
		$('.mobile-menu').slicknav({
	        closeOnClick: true,
	        label: '',
	        appendTo:'.mobile-menu-wrpr',
	    });

	    $(".slicknav_btn").on("click",function(){
	    	$(this).toggleClass("active");
	    	$("body").toggleClass("overlay");
	    	return false;
	    });

	    $(".header-menu li").has("ul").addClass("has-submenu");

	    $( "#newsletterInput" ).focus(function() {
		  	$("#social-subscribe-section").toggleClass("newsletterActive");
		});

		$("#newsletterInput").on('focus', function(){
		   $("body").addClass("overlay-2");
		}).on('blur', function(){
		   $("body").removeClass("overlay-2");
		});
        
    });


    jQuery(window).load(function(){

        
    });

	jQuery('.target').hide();
	jQuery('#div1').show();

	jQuery('.single').click(function(){
		$(".single").removeClass("active");
		$($(this)).addClass("active");
		jQuery('.target').hide();
		jQuery('#div'+$(this).attr('target')).show();

	});


}(jQuery));	