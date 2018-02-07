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
