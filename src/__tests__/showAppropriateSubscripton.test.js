import {showAppropriateSubscription, subscriptions} from '../js/thirdForm/showAppropriateSubscription'
import {JSDOM} from 'jsdom'

describe('must render price chosen subscription', () => {
    const {document} = (new JSDOM(`
        <form id="second-form">
            <select id="subscription-country">
                <option selected value="us">United States</option>
                <option value="ua">Ukraine</option>
            </select>
            <select id="subscription-plan">
                <option selected value="free">Free</option>
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
            </select>
            <div id="subscription-result"></div>
            <div id="elem"></div>
        </form>
    `)).window
    const subscCountry = document.querySelector('#subscription-country')
    const subscPlan = document.querySelector('#subscription-plan')
    const subscResult = document.querySelector('#subscription-result')

    const mockListener = jest.fn(() => {
        subscResult.textContent = subscriptions[subscCountry.value][subscPlan.value]
    })
    describe('country -> us', () => {
        beforeEach(() => {
            subscCountry.selectedIndex = 0
        })

        afterAll(() => {
            // set tp default
            subscCountry.selectedIndex = 0
        })

        it('plan - free, must render price - 0$', () => {
            subscPlan.selectedIndex = 0

            mockListener()
            expect(subscResult.innerHTML).toEqual('0$')
        })

        it('plan - basic, must render price - 20$', () => {
            subscPlan.value = 'basic'

            mockListener()
            expect(subscResult.innerHTML).toEqual('20$')
        })

        it('plan - premium, must render price - 60$', () => {
            subscPlan.selectedIndex = 2

            mockListener()
            expect(subscResult.innerHTML).toEqual('60$')
        })
    })

    describe('country -> ua', () => {

        beforeEach(() => {
            // set country value as 'ua'
            subscCountry.selectedIndex = 1
        })

        afterAll(() => {
            // set tp default
            subscCountry.selectedIndex = 0
        })

        it('plan - free, must render price - 0₴', () => {
            subscPlan.selectedIndex = 0

            mockListener()

            expect(subscResult.innerHTML).toEqual('0₴')
        })

        it('plan - basic, must render price - 560₴', () => {
            subscPlan.selectedIndex = 1

            mockListener()

            expect(subscResult.innerHTML).toEqual('560₴')
        })

        it('plan - premium, must render price - 1680₴', () => {
            subscPlan.selectedIndex = 2

            mockListener()

            expect(subscResult.innerHTML).toEqual('1680₴')
        })

    })
})