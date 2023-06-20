import './modules/functions.js';

const swiper = new Swiper('.result__swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });

const swiper2 = new Swiper('.reviews__slider', {
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

const swiper3 = new Swiper('.masters__swiper', {
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 40
        },

        1200: {
            slidesPerView: 3,
            spaceBetween: 40
          }
      },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
  

window.addEventListener('load', (evt) => {
    const popup = document.querySelector('.popup');

    setTimeout(() => {
        popup.classList.remove('popup--closed');
        document.body.classList.add('no-scrolling');
    }, 10000)
});