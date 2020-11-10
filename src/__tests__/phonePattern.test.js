import phonePattern from '../js/firstForm/phonePattern'

describe('function phonePattern must return certain pattern', () => {
    it('phone pattern', () => {
        expect(phonePattern()).toStrictEqual(/^\(\d{3}\)\s\d{3}\s-\s\d{4}$/)
    })
})