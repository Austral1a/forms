import {saveErrorInStorage} from "../js/firstForm/inputValidator";

describe('must save error into session storage occurred at inputs', () => {
    beforeEach(() => {
        sessionStorage.setItem('errors', '{}')
    })

    afterAll(() => {
        sessionStorage.clear()
    })

})