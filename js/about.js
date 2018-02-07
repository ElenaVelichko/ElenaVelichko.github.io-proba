;(() => {
    function showContent(event) {

        let content = document.querySelector('#about');

        let contentCoords = content.getBoundingClientRect().top + window.pageYOffset - content.offsetHeight;

        let banner = document.querySelector('.about__banner');
        let text = document.querySelector('.about__description');

        let currentScroll = window.pageYOffset;

        if (currentScroll > contentCoords) {
            banner.classList.add('about__banner_visible');
            banner.classList.add('bounceInLeft');
            banner.classList.add('animated');
            text.classList.add('animated');
            text.classList.add('bounceInRight');

        }

        if (currentScroll < contentCoords) {
            banner.classList.remove('about__banner_visible');
            banner.classList.remove('animated');
            banner.classList.remove('bounceInLeft');
            text.classList.remove('animated');
            text.classList.remove('bounceInRight');

        }
    }

    document.addEventListener('DOMContentLoaded',() => {
        document.addEventListener('scroll', showContent)

    });
})();




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhYm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI7KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIHNob3dDb250ZW50KGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0Jyk7XHJcblxyXG4gICAgICAgIGxldCBjb250ZW50Q29vcmRzID0gY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBjb250ZW50Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgbGV0IGJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fYmFubmVyJyk7XHJcbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfX2Rlc2NyaXB0aW9uJyk7XHJcblxyXG4gICAgICAgIGxldCBjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA+IGNvbnRlbnRDb29yZHMpIHtcclxuICAgICAgICAgICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0X19iYW5uZXJfdmlzaWJsZScpO1xyXG4gICAgICAgICAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYm91bmNlSW5MZWZ0Jyk7XHJcbiAgICAgICAgICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZCcpO1xyXG4gICAgICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJyk7XHJcbiAgICAgICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnYm91bmNlSW5SaWdodCcpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsIDwgY29udGVudENvb3Jkcykge1xyXG4gICAgICAgICAgICBiYW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWJvdXRfX2Jhbm5lcl92aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIGJhbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZCcpO1xyXG4gICAgICAgICAgICBiYW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnYm91bmNlSW5MZWZ0Jyk7XHJcbiAgICAgICAgICAgIHRleHQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQnKTtcclxuICAgICAgICAgICAgdGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdib3VuY2VJblJpZ2h0Jyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2hvd0NvbnRlbnQpXHJcblxyXG4gICAgfSk7XHJcbn0pKCk7XHJcblxyXG5cclxuXHJcbiJdLCJmaWxlIjoiYWJvdXQuanMifQ==
