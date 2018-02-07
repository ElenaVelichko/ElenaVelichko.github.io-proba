;(function($){
	"use strict";
	$(window).on("load", (function(e){
		var map;
		var mapContainer = $('#map')[0];
		var mapCenter = {lat: 47.8373005, lng: 35.2022883};
		var mapCenter_cart = {lat: 47.8363005, lng: 35.2022883};

		map = new google.maps.Map(mapContainer, {
			center: mapCenter_cart,
			zoom: 15,
			desableDefaultUI:true
		});
		var marker = new google.maps.Marker({
			position: mapCenter,
			map: map,
			icon: "img/pin.png"
		});

		marker.addListener('click', function() {
			infowindow.open(map,marker);
		});

		google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        })
	}));

})(jQuery);







