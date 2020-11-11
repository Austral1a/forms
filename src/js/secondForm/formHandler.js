import {inputValidator} from './inputValidator';
import switchToNextForm from '../switchToNextForm';
import {errors} from '../index';
import namePattern from './namePattern';
import emailPattern from './emailPattern';
import phonePattern from './phonePattern';

const validationErrors = {
    first_name: 'First name must contain only letters and not to be empty',
    last_name: 'Last name must contain only letters and not to be empty',
    email: "Email must be appropriate to 'email@example.com'",
    phone: "Phone must be appropriate to '(123) 456 - 7890'"
};

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

        inputValidator(firstNameVal, namePattern(), 'first-name', validationErrors.first_name);
        inputValidator(lastNameVal, namePattern(), 'last-name', validationErrors.last_name);
        inputValidator(emailVal, emailPattern(), 'email', validationErrors.email);
        inputValidator(phoneVal, phonePattern(), 'phone', validationErrors.phone);

        switchToNextForm(secondForm, thirdForm, e);
    });
};

export default secondFormHandler;
