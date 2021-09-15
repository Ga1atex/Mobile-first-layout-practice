$('.top-slider').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="top-slider__arrow top-slider__arrow-prev button"> <img class="top-slider__arrow-prev-img" src="images/arrow-prev.svg" alt="slider arrow-previous"></button>',
  nextArrow: '<button type="button" class="top-slider__arrow top-slider__arrow-next button"> <img class="top-slider__arrow-next-img" src="images/arrow-next.svg" alt="slider arrow-next"></button>',
  responsive: [
    {
      breakpoint: 640,
      settings: {
        arrows: false,
      }
    },
  ]
});


$('.quote-slider__items').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
});