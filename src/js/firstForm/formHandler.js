import {inputValidator} from './inputValidator'

const validationErrors = {
    first_name: 'First name must contain only letters and not to be empty',
    last_name: 'Last name must contain only letters and not to be empty',
    email: "Email must be appropriate to 'email@example.com'",
    phone: "Phone must be appropriate to '(123) 456 - 7890'"
}

const firstFormHandler = () => {
    const firstForm = document.querySelector('#first-form')

    firstForm.addEventListener('submit', (e) => {
        sessionStorage.setItem('errors', "{}")

        const firstNameVal = document.querySelector('#first-name').value
        const lastNameVal = document.querySelector('#last-name').value
        const emailVal = document.querySelector('#email').value
        const phoneVal = document.querySelector('#phone').value

    })
}

export default firstFormHandler
