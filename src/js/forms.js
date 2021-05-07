// Form validation
export function enableValidation() {
	const inputs = document.querySelectorAll('input[data-rule]')
	inputs.forEach((input) => {
		input.addEventListener('blur', function (event) {
			checkInputValidation(event.target)
		})
	})
}

// Form handler
export function enableFormHandler(url) {
	let forms = document.querySelectorAll('form')

	forms.forEach((form) => {
		form.addEventListener('submit', function (event) {
			event.preventDefault
				? event.preventDefault()
				: (event.returnValue = false)

			// Check validation
			let isValid = true
			const inputs = event.target.querySelectorAll('input[data-rule]')
			inputs.forEach((input) => {
				if (!checkInputValidation(input)) {
					isValid = false
				}
			})
			if(!isValid) return false

         // Send request
         let req = new XMLHttpRequest()
         req.open('POST', url, true)
         req.onload = function () {
            if (req.status >= 200 && req.status < 400) {
               let json = JSON.parse(this.response)

               if (json.send) {
                  console.log('Form sended')
               } else {
                  console.log('Form error JSON')
               }
            } else {
               console.log('Form error', req.status)
            }
         }

         req.onerror = () => console.log('Form hosting error')
         req.send(new FormData(event.target))
		})
	})
}

function checkInputValidation(input) {
	const rule = input.dataset.rule
	const value = input.value
	let check

	switch (rule) {
		case 'name':
			check = /^([a-z]+)(\s)?([a-z]*)/i.test(value)
			break
		case 'email':
			check = /.+\@.+\..+/.test(value)
			break
	}

	input.closest('label').classList.remove('invalid')

	if (!check) {
		input.closest('label').classList.add('invalid')
		return false
	} 
   
	return true
}