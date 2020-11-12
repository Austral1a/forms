import {errors} from '../index';
import {inputValidator, patterns, validationErrors} from './index'
import switchToNextForm from '../switchToNextForm'

const firstFormHandler = () => {
    const firstForm = document.querySelector('.form-first');
    const secondForm = document.querySelector('.form-second');

    firstForm.addEventListener('submit', (e) => {
        e.preventDefault();
        errors.clear();

        let username = document.querySelector('#username');
        let password = document.querySelector('#password');

        if(!username) return
        if(!password) return

        inputValidator(username.value, patterns.username, 'username', validationErrors.username);
        inputValidator(password.value, patterns.password, 'password', validationErrors.password);

        switchToNextForm(firstForm, secondForm, e);
    });
};

export default firstFormHandler;
