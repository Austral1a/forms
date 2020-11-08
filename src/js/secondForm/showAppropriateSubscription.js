export const subscriptions = {
    us: {
        free: '0$',
        basic: '20$',
        premium: '60$'
    },
    ua: {
        free: '0₴',
        // imagine that price of each plan got from some resource
        basic: `${20 * 28}₴`,
        premium: `${60 * 28}₴`
    }
}

export const showAppropriateSubscription = () => {
    const subscriptionCountry = document.querySelector('#subscription-country')
    const subscriptionPlan = document.querySelector('#subscription-plan')
    const subscriptionResult = document.querySelector('#subscription-result')

    const listener = () => {
        subscriptionResult.textContent = subscriptions[subscriptionCountry.value][subscriptionPlan.value]
    }

    subscriptionCountry.addEventListener('change', listener)

    subscriptionPlan.addEventListener('change', listener)
}
