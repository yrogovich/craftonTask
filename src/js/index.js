import Slider from './slider'
import StickyNav from './sticky-navbar'
import Modal from './modal'
import { enableValidation, enableFormHandler } from './forms'

document.addEventListener('DOMContentLoaded', function () {
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
	enableValidation();
	enableFormHandler();

	// Menu toggle
	const menuBurger = document.querySelector(".menu-icon")
	const mobileMenu = document.querySelector('.mobile-menu')

	menuBurger.addEventListener("click", function () {
		this.classList.toggle("active")
		mobileMenu.classList.toggle("active")
	})
})

// Google Map
window.initMap = () => {
	const image = '../img/icons/map-pin.png'
	const point = { lat: 52.40315998103853, lng: 16.90997132280444 }

	const map = new google.maps.Map(document.getElementById('map'), {
		center: point,
		zoom: 17,
		disableDefaultUI: true,
		mapId: '6cb29367d6c907ca',
	})

	const mapMarker = new google.maps.Marker({
		position: point,
		map,
		icon: image,
	})
}
