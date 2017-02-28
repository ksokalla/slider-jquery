'use strict';

$(function() {
	var slider = $('#slider');
	var slideshow = $('.slide-show');
	var slideCount = $('.slide-show').children().length;
	var slideWidth = (100/slideCount);
	var slideIndex = $('.single-slide').index();
	
	$('.slide-show').css({'width': slideCount*100 + '%'});
						  
	$('.slide-show').find('.single-slide').each(function(slideIndex) {
		
		$(this).css({'left': slideWidth*slideIndex + '%' });
		$(this).css({'width': slideWidth+'%'});
	});
	
    document.getElementsByClassName('.slider-click').addEventListener("click", slide())
		
	
			var slideCaption;

			$('.prev-slide').on("click", function() {
				if (slideIndex > 0) {
					slideIndex = (slideIndex - 1) && ("Slide nr" + slideIndex) } 
				else { 
					return
					}

			});			

			$('.next-slide').on("click", function() {
				if (slideIndex < 5) {
					slideIndex = (slideIndex + 1) && ("Slide nr" + slideIndex) } 
				else { 
					return
					}
		
	});			

});





