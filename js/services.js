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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI7KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIHNob3dDb250ZW50KGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlcnZpY2VzJyk7XHJcblxyXG4gICAgICAgIGxldCBjb250ZW50Q29vcmRzID0gY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgLSBjb250ZW50Lm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgbGV0IGN1cnJlbnRTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsID4gY29udGVudENvb3Jkcykge1xyXG4gICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3NlcnZpY2VzX3Zpc2libGUnKTtcclxuICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZCcpO1xyXG4gICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3pvb21JbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGwgPCBjb250ZW50Q29vcmRzKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VydmljZXNfdmlzaWJsZScpO1xyXG4gICAgICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVkJyk7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnem9vbUluJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNob3dDb250ZW50KVxyXG5cclxuICAgIH0pO1xyXG59KSgpO1xyXG5cclxuIl0sImZpbGUiOiJzZXJ2aWNlcy5qcyJ9
