import Swiper from 'swiper';
import 'swiper/css/bundle';

let advantagesSwiper;

advantagesSwiper = new Swiper('.advantages-swiper-container', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 32,
  grabCursor: false,
  allowTouchMove: false,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 3,
      grabCursor: true,
      allowTouchMove: true,
      spaceBetween: 32,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.advantages-swiper-container')
        .classList.add('show');
    },
  },
});
