export default class Slider {
	constructor() {
		const defaults = {
			dataName: '[data-modal]',
         overlayClass: 'modal-overlay',
			activeClass: 'modal-active',
		}

      this.modalLinks = document.querySelectorAll(defaults.dataName)
      this.modalOverlays = document.querySelectorAll(`.${defaults.overlayClass}`)

      this.modalOverlays.forEach((modalOverlay) => {
         modalOverlay.addEventListener('click', function () {
            this.closest('.modal').classList.remove('modal-active')
         })
      });

      this.modalLinks.forEach((modalLink) => {
         modalLink.addEventListener('click', function () {
            const modal = document.querySelector(`#${this.dataset.modal}`)
   
            if(!modal) return
   
            modal.classList.add('modal-active')
            modal.querySelector('.youtube').click();
         })
      });
   }
}