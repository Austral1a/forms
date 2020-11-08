import {saveErrorInStorage} from "../js/firstForm/inputValidator";

describe('must save error into session storage occurred at inputs', () => {
    beforeEach(() => {
        sessionStorage.setItem('errors', '{}')
    })

    afterAll(() => {
        sessionStorage.clear()
    })

    describe('first/last name', () => {
        const re = /^[a-zA-Z]+$/g
        it("'Kyl22' must save error into session storage", () => {
            saveErrorInStorage(re, 'Kyl22', 'first-name', 'error at first name')

            expect(sessionStorage.getItem('errors')).toStrictEqual("{\"first-name\":\"error at first name\"}")
        })

        it("'Kyle' must not save error into session storage", () => {
            saveErrorInStorage(re, 'Kyle', 'first-name', 'error at first name')

            expect(sessionStorage.getItem('errors')).toStrictEqual("{}")
        })

        it("'Br0wn' must save error into session storage", () => {
            saveErrorInStorage(re, 'Br0wn', 'last-name', 'error at last name')

            expect(sessionStorage.getItem('errors')).toStrictEqual("{\"last-name\":\"error at last name\"}")
        })

        it("'Br0wn' must save error into session storage", () => {
            saveErrorInStorage(re, 'Br0wn', 'last-name', 'error at last name')

            expect(sessionStorage.getItem('errors')).toStrictEqual("{\"last-name\":\"error at last name\"}")
        })
    })

    escribe('email', () => {
        const re = /^[a-zA-Z]*@[a-zA-Z]*\.[a-zA-Z]*$/g
        it("'example@e.com' must not save error into session storage", () => {
            saveErrorInStorage(
                re,
                'example@e.com',
                'email',
                'error at email')

            expect(sessionStorage.getItem('errors')).toStrictEqual("{}")
        })

        it("'23123aa@e.com' must save error into session storage", () => {
            saveErrorInStorage(
                re,
                '23123aa@e.com',
                'email',
                'error at email')

            expect(sessionStorage.getItem('errors')).toStrictEqual("{\"email\":\"error at email\"}")
        })

    })

    describe('phone', () => {
        const re = /^\(\d{3}\)\s\d{3}\s-\s\d{4}$/g

        it("'(123) 456 - 7890' must not save error into session storage", () => {
            saveErrorInStorage(
                re,
                '(123) 456 - 7890',
                'phone',
                'error at phone'
            )

            expect(sessionStorage.getItem('errors')).toStrictEqual("{}")
        })

        it("'(123) 456-7890' must save error into session storage", () => {
            saveErrorInStorage(
                re,
                '(123) 456-7890',
                'phone',
                'error at phone'
            )

            expect(sessionStorage.getItem('errors')).toStrictEqual("{\"phone\":\"error at phone\"}")
        })

        it("'(123)456 - 7890' must save error into session storage", () => {
            saveErrorInStorage(
                re,
                '(123)456 - 7890',
                'phone',
                'error at phone'
            )

            expect(sessionStorage.getItem('errors')).toStrictEqual("{\"phone\":\"error at phone\"}")
        })

        it("'(123) 456 - 78' must save error into session storage", () => {
            saveErrorInStorage(
                re,
                '(123) 456 - 78',
                'phone',
                'error at phone'
            )

            expect(sessionStorage.getItem('errors')).toStrictEqual("{\"phone\":\"error at phone\"}")
        })
    })

    describe('card', () => {
        const re = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/
        it("'1234 1234 1234 1234' must not save error into session storage", () => {
            saveErrorInStorage(
                re,
                '1234 1234 1234 1234',
                'phone',
                'error at card'
            )

            expect(sessionStorage.getItem('errors')).toStrictEqual("{}")
        })

        it("'1234123412341234' must save error into session storage", () => {
            saveErrorInStorage(
                re,
                '1234123412341234',
                'card',
                'error at card'
            )

            expect(sessionStorage.getItem('errors')).toStrictEqual("{\"card\":\"error at card\"}")
        })

        it("'1234 1234 1234 qwer' must save error into session storage", () => {
            saveErrorInStorage(
                re,
                '1234 1234 1234 qwer',
                'card',
                'error at card'
            )

            expect(sessionStorage.getItem('errors')).toStrictEqual("{\"card\":\"error at card\"}")
        })
    })

    describe('cvv', () => {
        const re = /^\d{3}$/
        it("'13' must save error into session storage", () => {
            saveErrorInStorage(
                re,
                '13',
                'cvv',
                'error at cvv'
            )

            expect(sessionStorage.getItem('errors')).toStrictEqual("{\"cvv\":\"error at cvv\"}")
        })

        it("'321' must not save error into session storage", () => {
            saveErrorInStorage(
                re,
                '321',
                'cvv',
                'error at cvv'
            )

            expect(sessionStorage.getItem('errors')).toStrictEqual("{}")
        })
    })

})