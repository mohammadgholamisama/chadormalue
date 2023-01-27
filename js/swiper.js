var swiper = new Swiper('#header-gallery', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },

});

// gallery

var swiper = new Swiper('#gallery-slider', {

  breakpoints: {
    576: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },

});