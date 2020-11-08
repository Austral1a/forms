import {inputValidator} from './inputValidator'
import switchToNextForm from '../switchToNextForm'

const validationErrors = {
    first_name: 'First name must contain only letters and not to be empty',
    last_name: 'Last name must contain only letters and not to be empty',
    email: "Email must be appropriate to 'email@example.com'",
    phone: "Phone must be appropriate to '(123) 456 - 7890'"
}

const firstFormHandler = () => {
    const firstForm = document.querySelector('#first-form')
    const secondForm = document.querySelector('#second-form')

    firstForm.addEventListener('submit', (e) => {
        sessionStorage.setItem('errors', "{}")

        const firstNameVal = document.querySelector('#first-name').value
        const lastNameVal = document.querySelector('#last-name').value
        const emailVal = document.querySelector('#email').value
        const phoneVal = document.querySelector('#phone').value

        inputValidator(firstNameVal, /^[a-zA-Z]+$/g, 'first-name', validationErrors.first_name)
        inputValidator(lastNameVal, /^[a-zA-Z]+$/g, 'last-name', validationErrors.last_name)
        inputValidator(emailVal, /^[a-zA-Z]*@[a-zA-Z]*\.[a-zA-Z]*$/g, 'email', validationErrors.email)
        inputValidator(phoneVal, /^\(\d{3}\)\s\d{3}\s-\s\d{4}$/g, 'phone', validationErrors.phone)

        switchToNextForm(firstForm, secondForm, e)
    })
}

export default firstFormHandler
