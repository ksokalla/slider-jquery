'use strict';

$(function() {
	var slider = $('#slider');
	var slideshow = $('.slide-show');
	var slideCount = $('.slide-show').children().length;
	var slideWidth = (100/slideCount);
	var slideIndex = $('.single-slide').index('.single-slide');
	
	$('.slide-show').css({'width': slideCount*100 + '%'});
						  
	$('.slide-show').find('.single-slide').each(function(slideIndex) {
		console.log(slideWidth);
		$(this).css({'left': slideWidth*slideIndex + '%' });
		$(this).css({'width': slideWidth+'%'});
	});
//	function slide(newSlideIndex) {
		
	
});
console.log(slider);