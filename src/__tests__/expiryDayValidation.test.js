import expiryDayValidation from '../js/thirdForm/expiryDayValidation'

describe('save error occurred at expiry day validation', () => {
    beforeEach(() => {
        sessionStorage.setItem('errors', '{}')
    })

    afterAll(() => {
        sessionStorage.clear()
    })
})