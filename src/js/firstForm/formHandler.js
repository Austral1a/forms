import {inputValidator} from '../common/inputValidator'
import {errors} from '../index';
import patterns from '../common/patterns'
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

        inputValidator(usernameVal, patterns.username, 'username', validationErrors.username);
        inputValidator(passwordVal, patterns.password, 'password', validationErrors.password);

        switchToNextForm(firstForm, secondForm, e);
    });
};

export default firstFormHandler;
