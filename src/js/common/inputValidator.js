import {errors} from '../index.js';
import isInputNotValid from '../common/isInputNotValid'

// saving errors needs to allow user switch to the next form
export const saveError = (validator, inputText, inputName, errorText) => {
    const inputError = document.querySelector(`.form__${inputName}-error`);
    const input = document.querySelector(`#${inputName}`);
    if(isInputNotValid(validator, inputText)) {
        errors.set(inputName, errorText);

        input.style.marginBottom = '5px';
        // if input is not valid, render an error
        inputError.innerText = errorText;
        inputError.style.marginBottom = '5px';
    } else {
        //if input is valid, remove error
        inputError.innerText = '';
    }
};
export const inputValidator = (inputText, rePattern, inputName, errorText) => {
    const validator = new RegExp(rePattern);
    saveError(validator, inputText, inputName, errorText);
};
