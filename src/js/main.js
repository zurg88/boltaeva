import mobileMenu from "./mobile-menu";
mobileMenu();

// Swiper 
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
	speed: 600,
 	autoplay: {
 		delay: 4000,
 	},
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
});


const productGallery = new Swiper('.product-gallery', {
	speed: 600,
	loop: true,
	grabCursor: true,
	freeMode: true,
    watchSlidesProgress: true,

	thumbs: {
		swiper: {
			el: '.product-gallery__thumbs',
			slidesPerView: "auto",
		}
	}
});

const otherProductsSlider = new Swiper('.other-products__slider', {
	speed: 600,
	grabCursor: true,
	autoplay: {
 		delay: 4000,
 	},
	slidesPerView: "auto",
       spaceBetween: 30,
	navigation: {
         nextEl: ".other-products__next",
         prevEl: ".other-products__prev",
    },
	breakpoints: {
  	  320: {
  	    slidesPerView: 1,
		spaceBetween: 10,
  	  },
  	  480: {
  	    slidesPerView: 1,
		spaceBetween: 10,
  	  },
  	  640: {
  	    slidesPerView: 1,
  	    spaceBetween: 10
  	  }
  	}
});


