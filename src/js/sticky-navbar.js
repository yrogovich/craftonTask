export default class Slider {
	constructor(...args) {
		let el
		let params
		;[el, params] = args

		if (!params) params = null
		if (!el) throw new Error('Error! Pass the ID argument or DOM object')

		this.navbar = typeof el === 'string' ? document.querySelector(el) : el

		const defaults = {
			topOffset: 1000, //px - offset to switch of fixed position
			stickyClass: 'is-fixed',
		}

		this.topOffset = defaults.topOffset
		this.stickyClass = defaults.stickyClass
		this.isFixed = false

		window.addEventListener('scroll', this.onScroll)
	}

	onScroll = () => {
		this.navbar.classList.toggle(
			this.stickyClass,
			window.scrollY > this.topOffset
		)
	}
}
