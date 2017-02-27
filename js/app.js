$(document).ready(function() {

Pace.on("done", function() {
    $('body').css('visibility','visible').hide().fadeIn('slow');
});
	// Initialize collapse button
	$(".button-collapse").sideNav();

	// Initialize slider
	$('.slider').slider({
		height: "100%"
	});
	$(".slider").css("height", $(window).height());

	$('.scrollspy').scrollSpy();

	$(".networking, .hw_sw, .support, .cctv, .contact").css("height", $(window).height());
});