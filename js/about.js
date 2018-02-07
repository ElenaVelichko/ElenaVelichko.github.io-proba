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



