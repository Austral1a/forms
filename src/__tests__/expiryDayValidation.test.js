import expiryDayValidation from '../js/thirdForm/expiryDayValidation'

describe('save error occurred at expiry day validation', () => {
    beforeEach(() => {
        sessionStorage.setItem('errors', '{}')
    })

    afterAll(() => {
        sessionStorage.clear()
    })

    it('current day - is today, expiry day - 12/2020 must not save error', () => {
        expiryDayValidation(2020,
            12,
            'expiration-day',
            'error at expiry day')
        expect(sessionStorage.getItem('errors')).toStrictEqual("{}")
    })

    it('current day - is today, expiry day - 11/2020 must save error', () => {
        expiryDayValidation(2020,
            11,
            'expiration-day',
            'error at expiry day')
        expect(sessionStorage.getItem('errors')).toStrictEqual("{\"expiration-day\":\"error at expiry day\"}")
    })

    it('current day - is today, expiry day - 05/2020 must save error', () => {
        expiryDayValidation(2020,
            5,
            'expiration-day',
            'error at expiry day')
        expect(sessionStorage.getItem('errors')).toStrictEqual("{\"expiration-day\":\"error at expiry day\"}")
    })

    it('current day - is today, expiry day - 0/2020 must save error', () => {
        expiryDayValidation(2020,
            0,
            'expiration-day',
            'error at expiry day')
        expect(sessionStorage.getItem('errors')).toStrictEqual("{\"expiration-day\":\"error at expiry day\"}")
    })

    it('current day - is today, expiry day - 13/2020 must save error', () => {
        expiryDayValidation(2020,
            13,
            'expiration-day',
            'error at expiry day')
        expect(sessionStorage.getItem('errors')).toStrictEqual("{\"expiration-day\":\"error at expiry day\"}")
    })
})