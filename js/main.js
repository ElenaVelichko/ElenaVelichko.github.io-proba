;(function($){
	"use strict";

	smoothScroll.init({
	       selector: '[data-scroll]',
	       selectorHeader: null,
	       speed: 700,
	       easing: 'ease',
	       offset: 0
	});

    $('.header__link').click(function() {
    $(".header__link").removeClass("header__link-active");
    $(this).addClass("header__link-active");
    });

})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24oJCl7XHJcblx0XCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdHNtb290aFNjcm9sbC5pbml0KHtcclxuXHQgICAgICAgc2VsZWN0b3I6ICdbZGF0YS1zY3JvbGxdJyxcclxuXHQgICAgICAgc2VsZWN0b3JIZWFkZXI6IG51bGwsXHJcblx0ICAgICAgIHNwZWVkOiA3MDAsXHJcblx0ICAgICAgIGVhc2luZzogJ2Vhc2UnLFxyXG5cdCAgICAgICBvZmZzZXQ6IDBcclxuXHR9KTtcclxuXHJcbiAgICAkKCcuaGVhZGVyX19saW5rJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLmhlYWRlcl9fbGlua1wiKS5yZW1vdmVDbGFzcyhcImhlYWRlcl9fbGluay1hY3RpdmVcIik7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKFwiaGVhZGVyX19saW5rLWFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxufSkoalF1ZXJ5KTtcclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
