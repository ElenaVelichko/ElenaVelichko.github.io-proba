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








//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiOyhmdW5jdGlvbigkKXtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHQkKHdpbmRvdykub24oXCJsb2FkXCIsIChmdW5jdGlvbihlKXtcclxuXHRcdHZhciBtYXA7XHJcblx0XHR2YXIgbWFwQ29udGFpbmVyID0gJCgnI21hcCcpWzBdO1xyXG5cdFx0dmFyIG1hcENlbnRlciA9IHtsYXQ6IDQ3LjgzNzMwMDUsIGxuZzogMzUuMjAyMjg4M307XHJcblx0XHR2YXIgbWFwQ2VudGVyX2NhcnQgPSB7bGF0OiA0Ny44MzYzMDA1LCBsbmc6IDM1LjIwMjI4ODN9O1xyXG5cclxuXHRcdG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwQ29udGFpbmVyLCB7XHJcblx0XHRcdGNlbnRlcjogbWFwQ2VudGVyX2NhcnQsXHJcblx0XHRcdHpvb206IDE1LFxyXG5cdFx0XHRkZXNhYmxlRGVmYXVsdFVJOnRydWVcclxuXHRcdH0pO1xyXG5cdFx0dmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG5cdFx0XHRwb3NpdGlvbjogbWFwQ2VudGVyLFxyXG5cdFx0XHRtYXA6IG1hcCxcclxuXHRcdFx0aWNvbjogXCJpbWcvcGluLnBuZ1wiXHJcblx0XHR9KTtcclxuXHJcblx0XHRtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGluZm93aW5kb3cub3BlbihtYXAsbWFya2VyKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBjZW50ZXIgPSBtYXAuZ2V0Q2VudGVyKCk7XHJcbiAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobWFwLCBcInJlc2l6ZVwiKTtcclxuICAgICAgICAgICAgbWFwLnNldENlbnRlcihjZW50ZXIpO1xyXG4gICAgICAgIH0pXHJcblx0fSkpO1xyXG5cclxufSkoalF1ZXJ5KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJmaWxlIjoibWFwLmpzIn0=
