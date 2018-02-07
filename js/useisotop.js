;(() => {
    function useIsotope(event) {
        var grid = document.querySelector('.grid');
        var iso = new Isotope( grid, {
            itemSelector: '.grid-item',

            masonry: {
                columnWidth: 30.5,
                gutter: 10,
                horizontalOrder: true,
                fitWidth: true
            }
        });

        var applyFilterFromLink = (linkObject) => {
            var filterValue = linkObject.dataset.filter;
            iso.arrange({ filter: filterValue });
        };

        var filterGrid = function( event ) {

            applyFilterFromLink(this);

            var activeBtn = document.querySelector('.gallery__item-active');
            if (activeBtn) {
                activeBtn.classList.remove('gallery__item-active');
            }
            this.classList.add('gallery__item-active');
        };



        var resizeItem = function (event) {

            this.classList.add('grid-item--gigante');
            iso.layout();
            setTimeout(normalItem, 1000, this);
        };

        var normalItem = function (image) {
            image.classList.remove('grid-item--gigante');
        };

        document.querySelectorAll('.grid-item').forEach(item => {
            item.addEventListener('click', resizeItem);
        });


        document.querySelectorAll('.gallery__item').forEach(filterBtn => {
            filterBtn.addEventListener( 'click', filterGrid);
        });

        var activeBtn = document.querySelector('.gallery__item-active');

        applyFilterFromLink(activeBtn);

    }


    document.addEventListener('DOMContentLoaded', useIsotope);
})();
