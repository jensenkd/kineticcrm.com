// jQuery for Katemi Landing Page
jQuery(document).ready(function($) {
    $('.annotation-link').tooltip();
	 
// jQuery OnePageNav ------------------------------------------------------ //	  
	  $('.katemi-nav').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 750,
			scrollOffset: 75,
			filter: ':not(.unscroll)'
		});
		
// jQuery Flexslider ------------------------------------------------------ //
	$('.flexslider-app-teaser').flexslider({
		animation: "fade",
		slideshowSpeed: 3000,
		animationSpeed: 500,
		controlNav: false,
		directionNav: false
	}); 	
	
	$('.flexslider-featurettes').flexslider({
		animation: "fade",
		slideshowSpeed: 3000,
		animationSpeed: 700,
		controlNav: false,
		directionNav: false
	});		 
	
	$('.flexslider-low-head-banner').flexslider({
		animationSpeed: 1000,
		directionNav: false
	});	 	

// jQuery Toggle ------------------------------------------------------ //	
	$('.toggle-button').on('click', function(e) {
		    e.preventDefault();
		    var $this = $(this);
		    var $collapse = $this.closest('.toggle-group').find('.toggle-inner');
		    $collapse.collapse('toggle');
		}); 
		
// jQuery PrettyPhoto ------------------------------------------------------ //	
	 $("a[rel^='prettyPhoto']").prettyPhoto();

// jQuery ToTop ------------------------------------------------------ //
	 $(".toTop").hide();
		
	 $(function () {
	 	$(window).scroll(function () {
		    if ($(this).scrollTop() > 200) {
		    	$('.toTop').fadeIn();
		        } else {
		        	$('.toTop').fadeOut();
		     }
		 });        
	 });        
		
	var easing, e, pos;
	    $(function(){
	      $(".toTop").on("click", function(){
	        pos= $(window).scrollTop();
	        $("body").css({
	          "margin-top": -pos+"px" 
	        });
	        $(window).scrollTop(0);
	        $("body").css("transition", "all 2s ease");
	        $("body").css("margin-top", "0");
	        $("body").on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", function(){
	          $("body").css("transition", "none");
	        });
	      });
		
	  });

}); // close	  