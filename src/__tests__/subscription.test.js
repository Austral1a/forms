import {subscriptions as sub} from '../js/common/subscriptions'

describe('subscription must return accurate value', () => {
    describe('country - us', () => {
        const us = 'us'
        it('free plan, must return 0$', () => {
            expect(sub[us]['free']).toBe('0$')
        })

        it('basic plan, must return 20$', () => {
            expect(sub[us]['basic']).toBe('20$')
        })

        it('premium plan, must return 60$', () => {
            expect(sub[us]['premium']).toBe('60$')
        })
    })

    describe('country - ua', () => {
        const ua = 'ua'
        it('free plan, must return 0₴', () => {
            expect(sub[ua]['free']).toBe('0₴')
        })

        it('basic plan, must return 560₴', () => {
            expect(sub[ua]['basic']).toBe('560₴')
        })

        it('premium plan, must return 1680₴', () => {
            expect(sub[ua]['premium']).toBe('1680₴')
        })

    })

})