// ;(() => {
//     function showMenu(event) {
//         this.classList.toggle("_hamburger-open");
//         this.parentNode.classList.toggle("_header__menu-open");
//     }
//     document.addEventListener('DOMContentLoaded',() => {
//         document.querySelector('#hamburger').addEventListener('click', showMenu)
//     });
// })();


$(document).ready(function() {

    $("#hamburger, .header__link").click(function() {
        $(".header__menu").toggleClass("_header__menu-open");
        $("#hamburger").toggleClass("_hamburger-open");
    });

    // $(".header__link").click(function() {
    //     $(".header__menu").toggleClass("_header__menu-open");
    //     $("#hamburger").toggleClass("_hamburger-open");
    // });
});


// jQuery(function($)
//     $(document).ready(function(){
//         var HeaderTop = $('.header__nav').offset().top;

//         $(window).scroll(function(){
//                 if( $(window).scrollTop() > HeaderTop ) {
//                         $('.header__nav').addClass('fixed');
//                 } else {
//                         $('.header__nav').removeClass('fixed');
//                 }
//         });
// });


jQuery(function($) {
  $(window).scroll(function(){
      if($(this).scrollTop() > 46){
          $('#nav').addClass('fixed');
      }
      else {
          $('#nav').removeClass('fixed');
      }
  });
});

// $(window).scroll(function() {
//     var $nav = $('header__nav'); // ID шапки

//     if($(window).scrollTop() > $nav.offset().top) { // Тут идея в том, что блок привязывается к верху, как только "прилипает" к верху окна браузера. Замените $block.offset().top на любое значение и получится, что когда вы проскроллили на большее кол-во пиксейлей, чем указали, добавиться класс к шапке.
//         $nav.addClass('fixed'); // Добавляем класс fixed. В стилях указываем для него position:fixed, height и прочее, чтобы сделать шапку фиксированной.
//     } else {
//         $nav.removeClass('fixed'); // удаляем класс
//     }
// });



   //  document.addEventListener("DOMContentLoaded", function(event) {
   //  document.querySelector('#hamburger').addEventListener('click', showMenu)
  	// });

// $(document).ready(function() {
//   $('.header_buttons a').click(function() {
//       elementClick = $(this).attr("href");
//       destination = $(elementClick).offset().top; {
//           $('html,body').animate({ scrollTop: destination }, 2000);
//       }
//       return false;
//   })
//   $buttons = $('#hamburger');
//   $('.header_buttons, .header_buttonsmobile').click(function() {
//     $buttons.toggleClass('active');
//   })
// });

// $(document).ready(function() {
//     $(document).delegate('.open', 'click', function(event) {
//         $(this).addClass('oppenned');
//         event.stopPropagation();
//     })
//     $(document).delegate('body', 'click', function(event) {
//         $('.open').removeClass('oppenned');
//     })
//     $(document).delegate('.cls', 'click', function(event) {
//         $('.open').removeClass('oppenned');
//         event.stopPropagation();
//     });
// })

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtZW51IOKAlCDQutC+0L/QuNGPLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIDsoKCkgPT4ge1xyXG4vLyAgICAgZnVuY3Rpb24gc2hvd01lbnUoZXZlbnQpIHtcclxuLy8gICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJfaGFtYnVyZ2VyLW9wZW5cIik7XHJcbi8vICAgICAgICAgdGhpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJfaGVhZGVyX19tZW51LW9wZW5cIik7XHJcbi8vICAgICB9XHJcbi8vICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywoKSA9PiB7XHJcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hhbWJ1cmdlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01lbnUpXHJcbi8vICAgICB9KTtcclxuLy8gfSkoKTtcclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAkKFwiI2hhbWJ1cmdlciwgLmhlYWRlcl9fbGlua1wiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiLmhlYWRlcl9fbWVudVwiKS50b2dnbGVDbGFzcyhcIl9oZWFkZXJfX21lbnUtb3BlblwiKTtcclxuICAgICAgICAkKFwiI2hhbWJ1cmdlclwiKS50b2dnbGVDbGFzcyhcIl9oYW1idXJnZXItb3BlblwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vICQoXCIuaGVhZGVyX19saW5rXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICQoXCIuaGVhZGVyX19tZW51XCIpLnRvZ2dsZUNsYXNzKFwiX2hlYWRlcl9fbWVudS1vcGVuXCIpO1xyXG4gICAgLy8gICAgICQoXCIjaGFtYnVyZ2VyXCIpLnRvZ2dsZUNsYXNzKFwiX2hhbWJ1cmdlci1vcGVuXCIpO1xyXG4gICAgLy8gfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIGpRdWVyeShmdW5jdGlvbigkKVxyXG4vLyAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuLy8gICAgICAgICB2YXIgSGVhZGVyVG9wID0gJCgnLmhlYWRlcl9fbmF2Jykub2Zmc2V0KCkudG9wO1xyXG5cclxuLy8gICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgICAgICAgICAgICBpZiggJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gSGVhZGVyVG9wICkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuaGVhZGVyX19uYXYnKS5hZGRDbGFzcygnZml4ZWQnKTtcclxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5oZWFkZXJfX25hdicpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyB9KTtcclxuXHJcblxyXG5qUXVlcnkoZnVuY3Rpb24oJCkge1xyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgaWYoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDQ2KXtcclxuICAgICAgICAgICQoJyNuYXYnKS5hZGRDbGFzcygnZml4ZWQnKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgICQoJyNuYXYnKS5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbi8vICAgICB2YXIgJG5hdiA9ICQoJ2hlYWRlcl9fbmF2Jyk7IC8vIElEINGI0LDQv9C60LhcclxuXHJcbi8vICAgICBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAkbmF2Lm9mZnNldCgpLnRvcCkgeyAvLyDQotGD0YIg0LjQtNC10Y8g0LIg0YLQvtC8LCDRh9GC0L4g0LHQu9C+0Log0L/RgNC40LLRj9C30YvQstCw0LXRgtGB0Y8g0Log0LLQtdGA0YXRgywg0LrQsNC6INGC0L7Qu9GM0LrQviBcItC/0YDQuNC70LjQv9Cw0LXRglwiINC6INCy0LXRgNGF0YMg0L7QutC90LAg0LHRgNCw0YPQt9C10YDQsC4g0JfQsNC80LXQvdC40YLQtSAkYmxvY2sub2Zmc2V0KCkudG9wINC90LAg0LvRjtCx0L7QtSDQt9C90LDRh9C10L3QuNC1INC4INC/0L7Qu9GD0YfQuNGC0YHRjywg0YfRgtC+INC60L7Qs9C00LAg0LLRiyDQv9GA0L7RgdC60YDQvtC70LvQuNC70Lgg0L3QsCDQsdC+0LvRjNGI0LXQtSDQutC+0Lst0LLQviDQv9C40LrRgdC10LnQu9C10LksINGH0LXQvCDRg9C60LDQt9Cw0LvQuCwg0LTQvtCx0LDQstC40YLRjNGB0Y8g0LrQu9Cw0YHRgSDQuiDRiNCw0L/QutC1LlxyXG4vLyAgICAgICAgICRuYXYuYWRkQ2xhc3MoJ2ZpeGVkJyk7IC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBIGZpeGVkLiDQkiDRgdGC0LjQu9GP0YUg0YPQutCw0LfRi9Cy0LDQtdC8INC00LvRjyDQvdC10LPQviBwb3NpdGlvbjpmaXhlZCwgaGVpZ2h0INC4INC/0YDQvtGH0LXQtSwg0YfRgtC+0LHRiyDRgdC00LXQu9Cw0YLRjCDRiNCw0L/QutGDINGE0LjQutGB0LjRgNC+0LLQsNC90L3QvtC5LlxyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAkbmF2LnJlbW92ZUNsYXNzKCdmaXhlZCcpOyAvLyDRg9C00LDQu9GP0LXQvCDQutC70LDRgdGBXHJcbi8vICAgICB9XHJcbi8vIH0pO1xyXG5cclxuXHJcblxyXG4gICAvLyAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgLy8gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYW1idXJnZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNZW51KVxyXG4gIFx0Ly8gfSk7XHJcblxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuLy8gICAkKCcuaGVhZGVyX2J1dHRvbnMgYScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICBlbGVtZW50Q2xpY2sgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xyXG4vLyAgICAgICBkZXN0aW5hdGlvbiA9ICQoZWxlbWVudENsaWNrKS5vZmZzZXQoKS50b3A7IHtcclxuLy8gICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IGRlc3RpbmF0aW9uIH0sIDIwMDApO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIHJldHVybiBmYWxzZTtcclxuLy8gICB9KVxyXG4vLyAgICRidXR0b25zID0gJCgnI2hhbWJ1cmdlcicpO1xyXG4vLyAgICQoJy5oZWFkZXJfYnV0dG9ucywgLmhlYWRlcl9idXR0b25zbW9iaWxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbi8vICAgICAkYnV0dG9ucy50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbi8vICAgfSlcclxuLy8gfSk7XHJcblxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuLy8gICAgICQoZG9jdW1lbnQpLmRlbGVnYXRlKCcub3BlbicsICdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbi8vICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnb3BwZW5uZWQnKTtcclxuLy8gICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuLy8gICAgIH0pXHJcbi8vICAgICAkKGRvY3VtZW50KS5kZWxlZ2F0ZSgnYm9keScsICdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbi8vICAgICAgICAgJCgnLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BwZW5uZWQnKTtcclxuLy8gICAgIH0pXHJcbi8vICAgICAkKGRvY3VtZW50KS5kZWxlZ2F0ZSgnLmNscycsICdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbi8vICAgICAgICAgJCgnLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BwZW5uZWQnKTtcclxuLy8gICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuLy8gICAgIH0pO1xyXG4vLyB9KVxyXG4iXSwiZmlsZSI6Im1lbnUg4oCUINC60L7Qv9C40Y8uanMifQ==
