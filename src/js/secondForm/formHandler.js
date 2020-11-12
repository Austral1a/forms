import switchToNextForm from '../switchToNextForm';
import {errors} from '../index';
import {inputValidator, patterns, validationErrors} from './index'

const secondFormHandler = () => {
    const secondForm = document.querySelector('.form-second');
    const thirdForm = document.querySelector('.form-third');

    secondForm.addEventListener('submit', (e) => {
        e.preventDefault();
        errors.clear();

        const firstNameVal = document.querySelector('#first-name').value;
        const lastNameVal = document.querySelector('#last-name').value;
        const emailVal = document.querySelector('#email').value;
        const phoneVal = document.querySelector('#phone').value;

        inputValidator(firstNameVal, patterns.name, 'first-name', validationErrors.first_name);
        inputValidator(lastNameVal, patterns.name, 'last-name', validationErrors.last_name);
        inputValidator(emailVal, patterns.email, 'email', validationErrors.email);
        inputValidator(phoneVal, patterns.phone, 'phone', validationErrors.phone);

        switchToNextForm(secondForm, thirdForm, e);
    });
};

export default secondFormHandler;
