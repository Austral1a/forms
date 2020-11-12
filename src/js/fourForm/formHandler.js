import {inputValidator} from '../common/inputValidator'
import expiryDayValidation from './expiryDayValidation';
import switchToNextForm from '../switchToNextForm';
import {errors} from '../index';
import patterns from '../common/patterns'
import validationErrors from '../common/validationErrors'

export const fourFormHandler = () => {
    const fourForm = document.querySelector('.form-four');
    const successPayment = document.querySelector('#success-payment');

    if(!fourForm) return
    if(!successPayment) return

    fourForm.addEventListener('submit', (e) => {
        e.preventDefault();
        errors.clear();

        const card = document.querySelector('#card');
        const expirationDate =document.querySelector('#expiration-date');
        const cvv = document.querySelector('#cvv');

        if(!card) return
        if(!expirationDate) return
        if(!cvv) return

        const expiryYear = expirationDate.replace(/\d+\//, '');
        const expiryMonth = expirationDate.replace(/\/\d+/, '');

        inputValidator(card, patterns.card, 'card', validationErrors.card);
        expiryDayValidation(expiryYear, expiryMonth, 'expiration-date', validationErrors.expirationDate);
        inputValidator(cvv, patterns.cvv, 'cvv', validationErrors.cvv);

        switchToNextForm(fourForm, successPayment, e, true);
    });
};
