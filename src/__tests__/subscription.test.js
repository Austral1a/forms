import {subscriptions as sub} from '../js/secondForm/showAppropriateSubscription'

describe('subscription must return accurate value', () => {
    describe('country - us', () => {
        const us = 'us'
        it('us -> free, must return 0$', () => {
            expect(sub[us]['free']).toBe('0$')
        })

        it('us -> basic, must return 20$', () => {
            expect(sub[us]['basic']).toBe('20$')
        })

        it('us -> premium, must return 60$', () => {
            expect(sub[us]['premium']).toBe('60$')
        })
    })

    describe('country - ua', () => {
        const ua = 'ua'
        it('us -> free, must return 0₴', () => {
            expect(sub[ua]['free']).toBe('0₴')
        })

        it('us -> basic, must return 560₴', () => {
            expect(sub[ua]['basic']).toBe('560₴')
        })

        it('us -> premium, must return 1680₴', () => {
            expect(sub[ua]['premium']).toBe('1680₴')
        })

    })

})