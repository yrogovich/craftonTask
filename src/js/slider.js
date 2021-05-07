export default class Slider {
	constructor(...args) {
		let el
		let params
		;[el, params] = args

		if (!params) params = null
		if (!el) throw new Error('Error! Pass the ID argument or DOM object')

		this.slider = typeof el === 'string' ? document.querySelector(el) : el

		const defaults = {
			btnPrev: null,
			btnNext: null,
			autoplay: false,
			speed: 3000,
			currentSlide: 0,
			slides: 0,
			debug: false,
			pagination: false,
		}

		this.btnPrev = document.querySelector(params.btnPrev) || defaults.btnPrev
		this.btnNext = document.querySelector(params.btnNext) || defaults.btnNext
		this.autoplay = Boolean(params.autoplay) || defaults.autoplay
		this.speed = Number(params.speed) || defaults.speed
		this.currentSlide = Number(params.currentSlide) || defaults.currentSlide
		this.debug = params.debug || defaults.debug
		this.pagination = document.querySelector(params.pagination) || defaults.pagination

		this.sliderLine = this.slider.querySelector('.slider-wrapper')
		this.slides = this.slider.querySelectorAll('.slider-slide')
		this.width = this.slider.offsetWidth

		if (this.btnPrev) {
			this.btnPrev.onclick = this.prevSlide
		}

		if (this.btnNext) {
			this.btnNext.onclick = this.nextSlide
		}

		if (this.autoplay) {
			setInterval(this.nextSlide, this.speed)
		}

		if (this.pagination) {
			this.createPagination()
		}

		this.slides[this.currentSlide].classList.add('slider-active')
		this.resize()
		window.addEventListener('resize', this.resize)

		if (this.debug) this.log('constructor')
	}

	resize = () => {
		this.width = this.slider.offsetWidth

		this.sliderLine.style.width = `${this.width * this.slides.length}px`

		this.slides.forEach((slide) => {
			slide.style.width = `${this.width}px`
			slide.style.height = 'auto'
		})

		this.rollSlide()
	}

	prevSlide = () => {
		this.currentSlide--
		this.rollSlide()
		this.changePagination()

		if (this.debug) this.log('prevSlide')
	}

	nextSlide = () => {
		this.currentSlide++
		this.rollSlide()
		this.changePagination()

		if (this.debug) this.log('nextSlide')
	}

	createPagination = () => {
		for (let i = 0; i < this.slides.length; i++) {
			const element = document.createElement('div')
			element.classList.add('slider-pagination-bullet')
			element.setAttribute('data-slide', i)

			if (i === this.currentSlide) {
				element.classList.add('slider-pagination-bullet-active')
			}

			element.addEventListener('click', (event) => {
				this.currentSlide = Number(event.target.dataset.slide);
				this.rollSlide()
				this.changePagination()
			})

			this.pagination.append(element)
		}

		if (this.debug) this.log('createPagination')
	}

	changePagination = () => {
		let bullets = this.pagination.childNodes

		bullets.forEach((bullet, index) => {
			bullet.classList.remove('slider-pagination-bullet-active')

			if (index === this.currentSlide) {
				bullet.classList.add('slider-pagination-bullet-active')
			}
		})

		if (this.debug) this.log('changePagination')
	}

	rollSlide = () => {
		if (this.currentSlide < 0) {
			this.currentSlide = this.slides.length - 1
		}
		if (this.currentSlide >= this.slides.length) {
			this.currentSlide = 0
		}

		this.slides.forEach(slide => slide.classList.remove('slider-active'))
		this.slides[this.currentSlide].classList.add('slider-active')

		this.sliderLine.style.transform = `translate3d(-${
			this.currentSlide * this.width
		}px, 0px, 0px)`
	}

	log = (eventName) => {
		if (eventName) console.log('Event', eventName)
		console.log(this)
	}
}
