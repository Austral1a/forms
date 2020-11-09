import {inputValidator} from '../firstForm/inputValidator'
import expiryDayValidation from './expiryDayValidation'
import switchToNextForm from '../switchToNextForm'
import {errors} from '../index'

const validationErrors = {
    card: 'Card number must contain 16 numbers, not less, not more',
    expirationDate: 'Expiration date must be bigger than today',
    cvv: 'CVV code must contain only 3 numbers'
}


const thirdFormHandler = () => {
    const thirdForm = document.querySelector('#third-form')
    const successPayment = document.querySelector('#success-payment')
    const errorsContainer = document.querySelector('header')

    thirdForm.addEventListener('submit', (e) => {
        e.preventDefault()
        errorsContainer.innerHTML = ''
        errors.clear()

        const card = document.querySelector('#card').value
        const expirationDate =document.querySelector('#expiration-date').value
        const cvv = document.querySelector('#cvv').value

        const expiryYear = expirationDate.replace(/\d+\//, '')
        const expiryMonth = expirationDate.replace(/\/\d+/, '')

        inputValidator(card, /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'card', validationErrors.card)
        expiryDayValidation(expiryYear, expiryMonth, 'expiration-date', validationErrors.expirationDate)
        inputValidator(cvv, /^\d{3}$/, 'cvv', validationErrors.cvv)

        switchToNextForm(thirdForm, successPayment, e, true)
    })
}

export default thirdFormHandler