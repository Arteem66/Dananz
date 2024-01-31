const form = document.querySelector('.feedback__form')
const formButton = document.querySelector('.person__form-button')
const popup = document.querySelector('.popup__wrapper')
const popupExit = document.querySelector('.popup__exit')
const popupText = document.querySelector('.popup__text')
const body = document.body

form.onsubmit = (e) => {
  e.preventDefault()

  let backUrl = ''

  let personFeedback = {
    firstName: form.firstName.value,
    secondName: form.secondName.value,
    email: form.email.value,
    phoneNumber: form.phone.value,
    message: form.message.value,
  }

  console.log(personFeedback)

  let personFeedbackJSON = JSON.stringify(personFeedback)

	fetch(
		`backUrl`,
		{
			method: 'POST', // POST нужен для сохранения и записи данных
			body: personFeedbackJSON, // Тело запроса в JSON-формате
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		}
	)
		.then(response => response.json())
		.then(data => {
			console.log(data)
      popupText.innerHTML = 'Ваши данные отправлены'
      popup.classList.remove('hidden')
      body.classList.add('noscroll')
      form.classList.add('noevent')
		})
		.catch(error => {
			console.log(error)
      popup.classList.remove('hidden')
      body.classList.add('noscroll')
      form.classList.add('noevent')
      popupText.innerHTML = 'Ваши данные не дошли до нас'
		})
    .finally(form.reset())
}

popupExit.addEventListener('click', () => {
  popup.classList.add('hidden')
  body.classList.remove('noscroll')
  form.classList.remove('noevent')
})




