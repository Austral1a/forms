import {errors} from '../js/index';

const switchToNextForm = (fromForm, toForm, formEvent, isLastForm) => {

    if(errors.size) {
        formEvent.preventDefault();

    } else {
        if(isLastForm) {
            alert('success');
            return;
        }
        formEvent.preventDefault();

        fromForm.style.display = 'none';

        toForm.style.display = 'grid';
    }
};

export default switchToNextForm;
