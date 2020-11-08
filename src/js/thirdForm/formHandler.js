import {inputValidator} from '../firstForm/inputValidator'
import expiryDayValidation from './expiryDayValidation'

const validationErrors = {
    card: 'Card number must contain 16 numbers, not less, not more',
    expirationDate: 'Expiration date must be bigger than today',
    cvv: 'CVV code must contain only 3 numbers'
}