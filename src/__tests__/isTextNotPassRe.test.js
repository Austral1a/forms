import {isTextNotPassRe} from '../js/firstForm/inputValidator'

describe('isTextNotPassRe', () => {
    describe("with '/[a-zA-Z]/' re pattern for first name and last name", () => {
        const re = /^[a-zA-Z]+$/ // matches first name, last name

        it("'Kyle222' must return false", () => {
            const text = 'Kyle22'
            expect(isTextNotPassRe(re, text)).not.toBeFalsy()
        })

        it("KyellEEE must return true", () => {
            const text = 'KyellEEE'
            expect(isTextNotPassRe(re, text)).toBeFalsy()
        })

        it("Kyl3iee must return false", () => {
            const text = 'Kyl3iee'
            expect(isTextNotPassRe(re, text)).not.toBeFalsy()
        })
    })
})