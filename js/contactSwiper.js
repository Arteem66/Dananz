const swiperWrapper = document.querySelector('.swiper-wrapper')
const pageWidth = document.documentElement.scrollWidth

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

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
		750: {
			enabled: false,
		},
		300: {
			slidesPerView: 1,
			enabled: true,
		},
	},
})

if (pageWidth <= 750) {
	swiperWrapper.classList.remove('location__body-right')
} else {
	swiperWrapper.classList.add('location__body-right')
}

window.addEventListener('resize', function () {
	if (window.matchMedia('(min-width: 750px)').matches) {
		swiperWrapper.classList.add('location__body-right')
	} else {
		swiperWrapper.classList.remove('location__body-right')
	}
})
