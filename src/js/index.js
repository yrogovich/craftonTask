import LazyLoad from 'vanilla-lazyload'
import Slider from './slider'
import StickyNav from './sticky-navbar'
import Modal from './modal'
import { enableValidation, enableFormHandler } from './forms'
import { mapLoad } from './googleMap'

document.addEventListener('DOMContentLoaded', function () {
	// Lazyload
	const myLazyLoad = new LazyLoad()


	// Slider
	const slider1 = new Slider('#slider-main', {
		btnPrev: '.slider-prev',
		btnNext: '.slider-next',
		pagination: '.slider-pagination',
		autoplay: true,
		speed: 8000,
	})


	// Sticky
	const stickyNav = new StickyNav('.navbar')


	// Modal
	const modal = new Modal()


	//Forms & inputs
	let url = `${window.location.protocol}//${window.location.hostname}/mail.php`
	enableValidation()
	enableFormHandler(url)


	// Menu toggle
	const menuBurger = document.querySelector('.menu-icon')
	const mobileMenu = document.querySelector('.mobile-menu')

	menuBurger.addEventListener('click', function () {
		this.classList.toggle('active')
		mobileMenu.classList.toggle('active')
	})


	// Google Map
	setTimeout(() => {
		mapLoad('AIzaSyC8T55DW35WsFxxlILs16KDo_yo2vAarBw');
	}, 1500);
})

// Youtube
;(function () {
	let youtube = document.querySelectorAll('.youtube')
	for (let i = 0; i < youtube.length; i++) {
		let source =
			'https://img.youtube.com/vi/' +
			youtube[i].dataset.embed +
			'/hqdefault.jpg'
		let image = new Image()
		image.src = source
		image.addEventListener(
			'load',
			(function () {
				youtube[i].appendChild(image)
			})(i)
		)

		youtube[i].addEventListener('click', function () {
			let iframe = document.createElement('iframe')
			iframe.setAttribute('frameborder', '0')
			iframe.setAttribute('allowfullscreen', '')
			iframe.setAttribute(
				'src',
				'https://www.youtube.com/embed/' +
					this.dataset.embed +
					'?rel=0&showinfo=0&autoplay=1'
			)
			this.innerHTML = ''
			this.appendChild(iframe)
		})
	}
})()
