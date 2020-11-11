import {errors} from '../js/index';

const switchToNextForm = (fromForm, toForm, formEvent, lastForm) => {

    // if there are no errors, show next form
    if(errors.size) {
        formEvent.preventDefault();

    } else {
        if(lastForm) {
            alert('success');
            return;
        }
        formEvent.preventDefault();
        // hide first form
        fromForm.style.display = 'none';

        // show next form
        toForm.style.display = 'grid';
    }
};

export default switchToNextForm;
