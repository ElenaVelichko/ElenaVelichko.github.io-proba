$(document).ready(function() {

    $("#hamburger, .header__link").click(function() {
        $(".header__menu").toggleClass("_header__menu-open");
        $("#hamburger").toggleClass("_hamburger-open");
    });
 });

jQuery(function($) {
  $(window).scroll(function(){
      if($(this).scrollTop() > 36){
          $('#nav').addClass('fixed');
      }
      else {
          $('#nav').removeClass('fixed');
      }
  });
});
