import isInputValid from '../js/common/isInputValid'

describe('isInputValid', () => {
    describe("with '/[a-zA-Z]+/' re pattern for first name and last name", () => {
        const re = /^[a-zA-Z]+$/ // matches first name, last name
        it("'Kyle222' must return false", () => {
            const text = 'Kyle22'
            expect(isInputValid(re, text)).toBeFalsy()
        })

        it("KyellEEE must return true", () => {
            const text = 'KyellEEE'
            expect(isInputValid(re, text)).toBeTruthy()
        })

        it("Kyl3iee must return false", () => {
            const text = 'Kyl3iee'
            expect(isInputValid(re, text)).toBeFalsy()
        })

        it("empty string must return false", () => {
            const text = ''
            expect(isInputValid(re, text)).toBeFalsy()
        })
    })

    describe("with '/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/g' re pattern for email", () => {
        const re = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/g // matches email

        it("example@e.com must return true", () => {
            const text = 'example@e.com'
            expect(isInputValid(re, text)).toBeTruthy()
        })

        it("exam1e@e.com must return false", () => {
            const text = 'exam1e@e.com'
            expect(isInputValid(re, text)).toBeFalsy()
        })

        it("example.com must return false", () => {
            const text = 'example.com'
            expect(isInputValid(re, text)).toBeFalsy()
        })

        it("example@com must return false", () => {
            const text = 'example@com'
            expect(isInputValid(re, text)).toBeFalsy()
        })

        it("'ex@.com' must return false", () => {
            const text = 'ex@.com'
            expect(isInputValid(re, text)).toBeFalsy()
        })

        it("'@ex.com' must return false", () => {
            const text = '@ex.com'
            expect(isInputValid(re, text)).toBeFalsy()
        })

        it("'ex@co.' must return false", () => {
            const text = 'ex@co.'
            expect(isInputValid(re, text)).toBeFalsy()
        })
    })

    describe("with '^\(\d{3}\)\s\d{3}\s-\s\d{4}$' re pattern for phone", () => {
        const re = /^\(\d{3}\)\s\d{3}\s-\s\d{4}$/ // matches phone

        it('012 142 - 1221 must return false', () => {
            const text = '012 142 - 1221'
            expect(isInputValid(re, text)).toBeFalsy()
        })

        it('(041)142 1212 must return false', () => {
            const text = '(041)142 1212'
            expect(isInputValid(re, text)).toBeFalsy()
        })

        it('(123) 111 -7777 must return false', () => {
            const text = '(123) 111 -7777'
            expect(isInputValid(re, text)).toBeFalsy()
        })

        it('(123) 123-12 must return false', () => {
            const text = '(123) 123-12'
            expect(isInputValid(re, text)).toBeFalsy()
        })

        it('(111) 222 - 3333 must return true', () => {
            const text = '(111) 222 - 3333'
            expect(isInputValid(re, text)).toBeTruthy()
        })
    })
})