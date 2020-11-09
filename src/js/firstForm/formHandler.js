import {inputValidator} from './inputValidator'
import switchToNextForm from '../switchToNextForm'
import {errors} from '../index'

const validationErrors = {
    first_name: 'First name must contain only letters and not to be empty',
    last_name: 'Last name must contain only letters and not to be empty',
    email: "Email must be appropriate to 'email@example.com'",
    phone: "Phone must be appropriate to '(123) 456 - 7890'"
}

const namePattern = () => {
    return /^[a-zA-Z]+$/
}

const emailPattern = () => {
    return /^[a-zA-Z]+@[a-zA-Z]\.[a-zA-Z]+$/
}

const phonePattern = () => {
    return /^\(\d{3}\)\s\d{3}\s-\s\d{4}$/
}

const firstFormHandler = () => {
    const firstForm = document.querySelector('#first-form')
    const secondForm = document.querySelector('#second-form')
    const errorsContainer = document.querySelector('header')

    firstForm.addEventListener('submit', (e) => {
        e.preventDefault()
        errorsContainer.innerHTML = ''
        errors.clear()

        const firstNameVal = document.querySelector('#first-name').value
        const lastNameVal = document.querySelector('#last-name').value
        const emailVal = document.querySelector('#email').value
        const phoneVal = document.querySelector('#phone').value

        inputValidator(firstNameVal, namePattern(), 'first-name', validationErrors.first_name)
        inputValidator(lastNameVal, namePattern(), 'last-name', validationErrors.last_name)
        inputValidator(emailVal, emailPattern(), 'email', validationErrors.email)
        inputValidator(phoneVal, phonePattern(), 'phone', validationErrors.phone)

        switchToNextForm(firstForm, secondForm, e)
    })
}

export default firstFormHandler
