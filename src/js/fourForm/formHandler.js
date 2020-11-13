import expiryDayValidation from './expiryDayValidation';
import switchToNextForm from '../switchToNextForm';
import {errors} from '../index';
import{inputValidator, patterns, validationErrors} from './index';

export const fourFormHandler = () => {
    const fourForm = document.querySelector('.form-four');

    if(!fourForm) return;

    fourForm.addEventListener('submit', (e) => {
        e.preventDefault();
        errors.clear();

        const card = document.querySelector('#card');
        const expirationDate = document.querySelector('#expiration-date');
        const cvv = document.querySelector('#cvv');

        if(!card) return;
        if(!expirationDate) return;
        if(!cvv) return;

        const expiryYear = expirationDate.value.replace(/\d+\//, '');
        const expiryMonth = expirationDate.value.replace(/\/\d+/, '');

        inputValidator(card.value, patterns.card, 'card', validationErrors.card);
        expiryDayValidation(expiryYear, expiryMonth, 'expiration-date', validationErrors.expirationDate);
        inputValidator(cvv.value, patterns.cvv, 'cvv', validationErrors.cvv);

        switchToNextForm(fourForm, null, e, true);
    });
};
