import mobileMenu from "./mobile-menu";
mobileMenu();

// Swiper 
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
	speed: 600,
 	// autoplay: {
 	// 	delay: 4000,
 	// },
	navigation: {
    	nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
  },
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	loop: true,
	grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
});

