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
	document.addEventListener("onclick", slide()); 
	
	function slide (newSlideIndex) {
		if (newSlideIndex == 0 || newSlideIndex == 5) {
			break;
	    } else {
			var slideCaption = ("Slide nr" + slideIndex);
			$(slideCaption).hide();
		}
	}  
	
});
