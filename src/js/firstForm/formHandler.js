import {errors} from '../index';
import {inputValidator, patterns, validationErrors} from './index'
import switchToNextForm from '../switchToNextForm'

const firstFormHandler = () => {
    const firstForm = document.querySelector('.form-first');
    const secondForm = document.querySelector('.form-second');

    firstForm.addEventListener('submit', (e) => {
        e.preventDefault();
        errors.clear();

        const usernameVal = document.querySelector('#username').value;
        const passwordVal = document.querySelector('#password').value;

        inputValidator(usernameVal, patterns.username, 'username', validationErrors.username);
        inputValidator(passwordVal, patterns.password, 'password', validationErrors.password);

        switchToNextForm(firstForm, secondForm, e);
    });
};

export default firstFormHandler;
