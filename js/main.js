'use strict';
var slider = $('#slider');
var slideshow = $('.slide-show');
var slideCount = $('.slide-show').children().length;
var slideWidth = (100 / slideCount);
var slideIndex = $('.single-slide').index();
var slideCaption = $('.slider-caption').text();
var marginLeft = (slideIndex * -100) + "%";
$('.slider-caption').hide('fast');


function slide(newSlideIndex) {
	function callback() {
		slideIndex = $(newSlideIndex);	
	}
	
	$('.slide-show').animate({'margin-left': marginLeft}, 2000, callback);
	console.log("dziala");
}

$('h3').click(function() {
		$(this).animate({'font-size': '3em', 'margin-left': '100px', 'color': 'blue'}, 2000, animacja);
	});

$(function () {
	$('.slide-show').css({
		'width': slideCount * 100 + '%'
	});
	$('.slide-show').find('.single-slide').each(function (slideIndex) {
		$(this).css({
			'left': slideWidth * slideIndex + '%'
		});
		$(this).css({
			'width': slideWidth + '%'
		});
	});
	$('.prev-slide').on('click', slide); {
		if (slideIndex > 0) {
			var slideIndex = slideIndex-1;
		}
	}
	$('.next-slide').on('click', slide); {
		if (slideIndex < 4) {
			var slideIndex = slideIndex+1;
		}
	}

	
});