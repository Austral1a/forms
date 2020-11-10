import emailPattern from '../js/firstForm/emailPattern'

describe('function emailPattern must return certain pattern', () => {
    it('email pattern', () => {
        expect(emailPattern()).toStrictEqual(/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/)
    })
})