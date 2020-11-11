import patterns from '../js/common/patterns'

describe('object with reg exp patterns', () => {
    it('must return name pattern', () => {
        expect(patterns.name).toStrictEqual(/^[a-zA-Z]+$/)
    })

    it('must return email pattern', () => {
        expect(patterns.email).toStrictEqual(/^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/)
    })

    it('must return phone pattern', () => {
        expect(patterns.phone).toStrictEqual(/^\(\d{3}\)\s\d{3}\s-\s\d{4}$/)
    })

    it('must return username pattern', () => {
        expect(patterns.username).toStrictEqual(/\w+/i)
    })

    it('must return password pattern', () => {
        expect(patterns.password).toStrictEqual(/\w{6,}/)
    })

    it('must return card number pattern', () => {
        expect(patterns.card).toStrictEqual(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/)
    })

    it('must return cvv pattern', () => {
        expect(patterns.cvv).toStrictEqual(/^\d{3}$/)
    })
})