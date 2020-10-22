$('#main-contact-form').submit(function(event)
	{$("#myModal").modal().fadeOut();});

$('.slider').slick({
		infinite: true,
		slideToShow: 1,
		slideToScroll: 1,
		autoplay: true,
	  autoplaySpeed: 2000,
	});
	$('.slider1').slick({
		infinite: true,
		slideToShow: 1,
		slideToScroll: 1,
		autoplay: true,
	  autoplaySpeed: 3000,
	});

	$(document).on('click', '[data-toggle="lightbox"]', function(event){
    event.preventDefault();
    $(this).ekkoLightbox();
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

