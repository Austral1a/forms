import {errors} from '../index';

const expiryDayValidation = (year, month, inputName, errorText) => {
    const currentDay = new Date();
    const expiryDay = new Date(+year, +month - 1, 1);

    const inputError = document.querySelector(`.form__${inputName}-error`)

    // if expiry date has arrived
    if(
        (month > 12 || month < 1)
        ||
        (currentDay > expiryDay)
    ) {
        errors.set(inputName, errorText);

        // if input is not valid, render an error
        inputError.innerText = errorText;
    } else {
        //if input is valid, remove error
        inputError.innerText = '';
    }
};

export default expiryDayValidation;
