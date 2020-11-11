import {inputValidator} from '../secondForm/inputValidator';
import {errors} from '../index';
import usernamePattern from './usernamePattern';
import passwordPattern from './passwordPattern';
import switchToNextForm from '../switchToNextForm';

const validationErrors = {
    username: 'Username must contain only letters and numbers and not to be empty',
    password: 'Password must contain at least 6 characters'
};

const firstFormHandler = () => {
    const firstForm = document.querySelector('.form-first');
    const secondForm = document.querySelector('.form-second');

    firstForm.addEventListener('submit', (e) => {
        e.preventDefault();
        errors.clear();

        const usernameVal = document.querySelector('#username').value;
        const passwordVal = document.querySelector('#password').value;

        inputValidator(usernameVal, usernamePattern(), 'username', validationErrors.username);
        inputValidator(passwordVal, passwordPattern(), 'password', validationErrors.password);

        switchToNextForm(firstForm, secondForm, e);
    });
};

export default firstFormHandler;
