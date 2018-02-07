;(() => {
    function showContent(event) {

        let content = document.querySelector('#services');

        let contentCoords = content.getBoundingClientRect().top + window.pageYOffset - content.offsetHeight;

        let currentScroll = window.pageYOffset;

        if (currentScroll > contentCoords) {
            content.classList.add('services_visible');
            content.classList.add('animated');
            content.classList.add('zoomIn');
        }

        if (currentScroll < contentCoords) {
            content.classList.remove('services_visible');
            content.classList.remove('animated');
            content.classList.remove('zoomIn');
        }
    }
    document.addEventListener('DOMContentLoaded',() => {
        document.addEventListener('scroll', showContent)

    });
})();

