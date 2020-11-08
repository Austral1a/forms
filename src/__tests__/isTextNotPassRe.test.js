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

    describe("with '/^[a-zA-Z]*@[a-zA-Z]*\.[a-zA-Z]*$/g' re pattern for email", () => {
        const re = /^[a-zA-Z]*@[a-zA-Z]*\.[a-zA-Z]*$/g // matches email

        it("example@e.com must return false", () => {
            const text = 'example@e.com'
            expect(isTextNotPassRe(re, text)).toBeFalsy()
        })

        it("exam1e@e.com must return true", () => {
            const text = 'exam1e@e.com'
            expect(isTextNotPassRe(re, text)).not.toBeFalsy()
        })

        it("example.com must return true", () => {
            const text = 'example.com'
            expect(isTextNotPassRe(re, text)).not.toBeFalsy()
        })

        it("example@com must return true", () => {
            const text = 'example@com'
            expect(isTextNotPassRe(re, text)).not.toBeFalsy()
        })
    })
})