export default class Slider {
	constructor(...params) {
		const defaults = {
			dataName: '[data-modal]',
         overlayClass: 'modal-overlay',
			activeClass: 'modal-active',
		}

      this.modalLinks = document.querySelectorAll(params.dataName) || document.querySelectorAll(defaults.dataName)
      this.modalOverlays = document.querySelectorAll(params.dataName) || document.querySelectorAll(defaults.dataName)

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
         })
      });
   }
}