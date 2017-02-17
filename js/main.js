'use strict';

$(function() {
	var slider = $('#slider');
	var slideshow = $('.slide-show');
	var slideCount = $('.slide-show').children().length;
	var slideWidth = $(100/slideCount);
	var slideIndex = $('.single-slide').index('.single-slide');
	
	$('.slide-show').css({'width': '500%'});
						  
	$('body').find('.single-slide').each(function() {
						  $('.single-slide').css({'margin-left': 'slideWidth*slideIndex',
												  'width': '20%'});
						 });
	function slide(newSlideIndex) {
		
	}
});
console.log(slider);