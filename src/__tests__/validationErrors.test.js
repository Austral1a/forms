import validationErrors from '../js/common/validationErrors'

const errors = {
    username: 'Username must contain only letters and numbers and not to be empty',
    password: 'Password must contain at least 6 characters',
    first_name: 'First name must contain only letters and not to be empty',
    last_name: 'Last name must contain only letters and not to be empty',
    email: "Email must be appropriate to 'email@example.com'",
    phone: "Phone must be appropriate to '(123) 456 - 7890'",
    card: 'Card number must contain 16 numbers, not less, not more',
    expirationDate: 'Expiration date must be bigger than today',
    cvv: 'CVV code must contain only 3 numbers'
}

describe('validation errors must return proper text', () => {
    it('username error', () => {
        expect(validationErrors.username).toBe(errors.username)
    })

    it('password error', () => {
        expect(validationErrors.password).toBe(errors.password)
    })

    it('first name error', () => {
        expect(validationErrors.first_name).toBe(errors.first_name)
    })

    it('last name error', () => {
        expect(validationErrors.last_name).toBe(errors.last_name)
    })

    it('email error', () => {
        expect(validationErrors.email).toBe(errors.email)
    })

    it('phone error', () => {
        expect(validationErrors.phone).toBe(errors.phone)
    })

    it('card error', () => {
        expect(validationErrors.card).toBe(errors.card)
    })

    it('expiration date error', () => {
        expect(validationErrors.expirationDate).toBe(errors.expirationDate)
    })

    it('cvv error', () => {
        expect(validationErrors.cvv).toBe(errors.cvv)
    })

})