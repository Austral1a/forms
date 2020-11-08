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

})