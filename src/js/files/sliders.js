export default function sliders() {
  const cooperationSlider = document.querySelector(".cooperation__slider");

  if (cooperationSlider) {
    const initialSlide = cooperationSlider.querySelectorAll(".swiper-slide").length / 2;

    const slider = new Swiper(cooperationSlider, {
      speed: 800,
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: initialSlide,
      autoplay: {
        delay: 2500
      },
      breakpoints: {
        768: {
          slidesPerView: "auto",
          spaceBetween: 40,
        }
      }
    })
  }
  const singleSlider = document.querySelector(".single__slider");

  if (singleSlider) {
    const slider = new Swiper(singleSlider, {
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 3500
      },
      navigation: {
        prevEl: ".single .slider-btn._prev",
        nextEl: ".single .slider-btn._next"
      },
      pagination: {
        el: ".single .slider-pagination",
        clickable: true
      }
    })
  }
  const portfolioSlider = document.querySelector(".portfolioSlider");

  if (portfolioSlider) {
    const slider = new Swiper(portfolioSlider, {
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
        delay: 3500
      },
      navigation: {
        prevEl: ".portfolio .navArrow._prev",
        nextEl: ".portfolio .navArrow._next"
      },
      pagination: {
        el: ".portfolio .slider-pagination",
        clickable: true
      }
    })
  }

  const partnersSlider = document.querySelector(".partnersSlider");

  if (partnersSlider) {
    const slider = new Swiper(partnersSlider, {
      loop: true,
      allowTouchMove: false, // Отключаем перетаскивание мышкой, чтобы не ломать плавность
      speed: 3000,           // Скорость движения в миллисекундах (чем больше, тем медленнее)
      slidesPerView: 'auto', // Или укажите фиксированное число слайдов, например: 5
      spaceBetween: 0,      // Расстояние между логотипами
      autoplay: {
        delay: 0,            // Задержка 0 для непрерывного движения
        disableOnInteraction: false,
      },
      freeMode: {
        enabled: true,
        momentum: false,     // Отключаем инерцию
      },
    })
  }

  const protectTechSlider = document.querySelector(".protect-tech-slider");

  if (protectTechSlider) {
    const slider = new Swiper(protectTechSlider, {
      loop: true,
      speed: 800,           // Скорость движения в миллисекундах (чем больше, тем медленнее)
      slidesPerView: 'auto', // Или укажите фиксированное число слайдов, например: 5
      spaceBetween: 20,      // Расстояние между логотипами
      autoplay: {
        delay: 4000,
        disableOnInteraction: false, // Не останавливать после клика
      },
    })
  }

}

// Настройки для верхнего слайдера (едет влево)
const blagSwiperTop = new Swiper('.blagSlider:not(.blagSlider--reverse)', {
  loop: true,
  spaceBetween: 4,       // Расстояние между карточками в px
  slidesPerView: 'auto',   // Автоматическая ширина слайдов по размеру картинок
  speed: 4000,            // Скорость движения (чем больше число, тем медленнее и плавнее)
  allowTouchMove: false,   // Отключаем перетаскивание мышкой, чтобы не ломать плавность
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

// Настройки для нижнего слайдера (едет вправо)
const blagSwiperBottom = new Swiper('.blagSlider--reverse', {
  loop: true,
  spaceBetween: 4,
  slidesPerView: 'auto',
  speed: 4000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true, // Включает движение в противоположную сторону
  },
});