import namePattern from '../js/secondForm/namePattern'

describe('first/last names function must return certain pattern', () => {
    it('first/last names pattern', () => {
        expect(namePattern()).toStrictEqual(/^[a-zA-Z]+$/)
    })
})
