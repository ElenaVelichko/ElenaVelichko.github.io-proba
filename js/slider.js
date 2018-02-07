$('.works-slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    //fade: true,
});


$('.team-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 715,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

