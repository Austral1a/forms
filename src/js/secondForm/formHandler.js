import switchToNextForm from '../switchToNextForm';
import {errors} from '../index';
import {inputValidator, patterns, validationErrors} from './index'

const secondFormHandler = () => {
    const secondForm = document.querySelector('.form-second');
    const thirdForm = document.querySelector('.form-third');

    secondForm.addEventListener('submit', (e) => {
        e.preventDefault();
        errors.clear();

        const firstName = document.querySelector('#first-name');
        const lastName = document.querySelector('#last-name');
        const email = document.querySelector('#email');
        const phone = document.querySelector('#phone');

        if(!firstName) return
        if(!lastName) return
        if(!email) return
        if(!phone) return

        inputValidator(firstName.value, patterns.name, 'first-name', validationErrors.first_name);
        inputValidator(lastName.value, patterns.name, 'last-name', validationErrors.last_name);
        inputValidator(email.value, patterns.email, 'email', validationErrors.email);
        inputValidator(phone.value, patterns.phone, 'phone', validationErrors.phone);

        switchToNextForm(secondForm, thirdForm, e);
    });
};

export default secondFormHandler;
