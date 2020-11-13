export const expiryDayMask = () => {
    const expiryDay = document.querySelector('#expiration-date');

    if(!expiryDay) return

    expiryDay.addEventListener('input', (e) => {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : x[1] + '/' + x[2];
    });
};

export const cardMask = () => {
    const cardInputValue = document.querySelector('#card');

    if(!cardInputValue) return

    cardInputValue.addEventListener('input', (e) => {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : x[1] + ' ' + x[2] + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '');
    });
};

export let phoneMask = () => {
    const phoneInput = document.querySelector('#phone');

    if(!phoneInput) return

    phoneInput.addEventListener('input', (e) => {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? ' - ' + x[3] : '');
    });
};
