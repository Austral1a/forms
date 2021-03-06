import {errors} from '../index.js';
import isInputValid from './isInputValid';

// saving errors needs to allow user switch to the next form
export const saveError = (validator, inputText, inputName, errorText) => {
    const inputError = document.querySelector(`.form__${inputName}-error`);
    if(!isInputValid(validator, inputText)) {
        errors.set(inputName, errorText);

        inputError.innerText = errorText;
    } else {

        inputError.innerText = '';
    }
};
export const inputValidator = (inputText, rePattern, inputName, errorText) => {
    const validator = new RegExp(rePattern);
    saveError(validator, inputText, inputName, errorText);
};
