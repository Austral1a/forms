import subscriptions from '../common/subscriptions';

export const listener = (country, plan, result) => {
    result.textContent = subscriptions[country.value][plan.value];
};

export const showAppropriateSubscription = () => {
    const subscriptionCountry = document.querySelector('#subscription-country');
    const subscriptionPlan = document.querySelector('#subscription-plan');
    const subscriptionResult = document.querySelector('#subscription-result');

    if(!subscriptionCountry) return;
    if(!subscriptionPlan) return;
    if(!subscriptionResult) return;

    subscriptionCountry.addEventListener('change', () => listener(
        subscriptionCountry,
        subscriptionPlan,
        subscriptionResult
    ));

    subscriptionPlan.addEventListener('change', () => listener(
        subscriptionCountry,
        subscriptionPlan,
        subscriptionResult
    ));

    // render default subscription plan
    subscriptionPlan.value = 'free';
    subscriptionPlan.dispatchEvent(new Event('change'));

};
