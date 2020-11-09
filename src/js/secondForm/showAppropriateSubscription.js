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

export const listener = (country, plan, result) => {
    result.textContent = subscriptions[country.value][plan.value]
}

export const showAppropriateSubscription = () => {
    const subscriptionCountry = document.querySelector('#subscription-country')
    const subscriptionPlan = document.querySelector('#subscription-plan')
    const subscriptionResult = document.querySelector('#subscription-result')

    subscriptionCountry.addEventListener('change', () => listener(
        subscriptionCountry,
        subscriptionPlan,
        subscriptionResult
    ))

    subscriptionPlan.addEventListener('change', () => listener(
        subscriptionCountry,
        subscriptionPlan,
        subscriptionResult
    ))
}
