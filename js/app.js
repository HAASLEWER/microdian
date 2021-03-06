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

	//$(".networking, .hw_sw, .support, .cctv, .contact").css("height", $(window).height());
	
	// Initialize google maps with dark red theme
	google.maps.event.addDomListener(window, 'load', init);
	        
	function init() {
	    var mapOptions = {
	        // How zoomed in you want the map to start at (always required)
	        zoom: 12,

	        // The latitude and longitude to center the map (always required)
	        center: new google.maps.LatLng(-25.791717, 28.2901669), 

	        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]
	    };
	        
	    // Get the HTML DOM element that will contain map
	    var mapElement = document.getElementById('map');

	    var map = new google.maps.Map(mapElement, mapOptions);

	    // Add Marker
	    var marker = new google.maps.Marker({
	        position: new google.maps.LatLng(-25.791717, 28.290166),
	        map: map
	    });	    
	}		
});