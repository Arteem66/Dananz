const burger = document.querySelector('.burger')
const navList = document.querySelector('.navigation__list')
const wrapper = document.querySelector('.wrapper')
const headerAbsolute = document.querySelector('.header')
const headerWrapper = document.querySelector('.header__wrapper')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
	navList.classList.toggle('active__list')
	headerWrapper.classList.toggle('active__list')
	wrapper.classList.toggle('wrapper__active')
	headerAbsolute.classList.toggle('header__absolute')
	body.classList.toggle('noscroll')
})

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

  slidesPerView: 2,
})



