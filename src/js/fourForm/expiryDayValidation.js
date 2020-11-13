import {errors} from '../index';

const expiryDayValidation = (year, month, inputName, errorText) => {
    const currentDay = new Date();
    const expiryDay = new Date(+year, +month - 1, 1);

    const inputError = document.querySelector(`.form__${inputName}-error`)

    if(!inputError) return;

    if(
        (month > 12 || month < 1)
        ||
        (currentDay > expiryDay)
    ) {
        errors.set(inputName, errorText);

        inputError.innerText = errorText;
    } else {
        inputError.innerText = '';
    }
};

export default expiryDayValidation;
