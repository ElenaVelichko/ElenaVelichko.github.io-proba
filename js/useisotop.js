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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ1c2Vpc290b3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsiOygoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiB1c2VJc290b3BlKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCcpO1xyXG4gICAgICAgIHZhciBpc28gPSBuZXcgSXNvdG9wZSggZ3JpZCwge1xyXG4gICAgICAgICAgICBpdGVtU2VsZWN0b3I6ICcuZ3JpZC1pdGVtJyxcclxuXHJcbiAgICAgICAgICAgIG1hc29ucnk6IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbldpZHRoOiAzMC41LFxyXG4gICAgICAgICAgICAgICAgZ3V0dGVyOiAxMCxcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWxPcmRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGZpdFdpZHRoOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGFwcGx5RmlsdGVyRnJvbUxpbmsgPSAobGlua09iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgZmlsdGVyVmFsdWUgPSBsaW5rT2JqZWN0LmRhdGFzZXQuZmlsdGVyO1xyXG4gICAgICAgICAgICBpc28uYXJyYW5nZSh7IGZpbHRlcjogZmlsdGVyVmFsdWUgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGZpbHRlckdyaWQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBhcHBseUZpbHRlckZyb21MaW5rKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFjdGl2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X19pdGVtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICBpZiAoYWN0aXZlQnRuKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZ2FsbGVyeV9faXRlbS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnlfX2l0ZW0tYWN0aXZlJyk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICB2YXIgcmVzaXplSXRlbSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdncmlkLWl0ZW0tLWdpZ2FudGUnKTtcclxuICAgICAgICAgICAgaXNvLmxheW91dCgpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KG5vcm1hbEl0ZW0sIDEwMDAsIHRoaXMpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBub3JtYWxJdGVtID0gZnVuY3Rpb24gKGltYWdlKSB7XHJcbiAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2dyaWQtaXRlbS0tZ2lnYW50ZScpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWl0ZW0nKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzaXplSXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FsbGVyeV9faXRlbScpLmZvckVhY2goZmlsdGVyQnRuID0+IHtcclxuICAgICAgICAgICAgZmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZpbHRlckdyaWQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgYWN0aXZlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnlfX2l0ZW0tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGFwcGx5RmlsdGVyRnJvbUxpbmsoYWN0aXZlQnRuKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB1c2VJc290b3BlKTtcclxufSkoKTtcclxuIl0sImZpbGUiOiJ1c2Vpc290b3AuanMifQ==
