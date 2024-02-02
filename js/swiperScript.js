const swiperWrapper = document.querySelector('.swiper-wrapper')
const pageWidth = document.documentElement.scrollWidth


const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop:true,
	
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
	
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
	breakpoints: {
		1230: {
			enabled: false,
		},
		1000: {
			slidesPerView: 3,
			enabled: true,
		},
		750: {
			slidesPerView: 2,
			enabled: true,
		},
		300: {
			slidesPerView: 1,
			enabled: true,
		},
	},
})

if (pageWidth <= 1230) {
	swiperWrapper.classList.remove('designers__list')
} else {
	swiperWrapper.classList.add('designers__list')
}

window.addEventListener('resize', function () {
	if (window.matchMedia('(min-width: 1230px)').matches) {
		swiperWrapper.classList.add('designers__list')
	} else {
		swiperWrapper.classList.remove('designers__list')
	}
})

