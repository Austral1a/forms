import switchToNextForm from '../switchToNextForm';

const thirdFormHandler = () => {
    const thirdForm = document.querySelector('.form-third');
    const fourForm = document.querySelector('.form-four');

    if(!thirdForm) return;
    if(!fourForm) return;

    thirdForm.addEventListener('submit', (e) => {
        e.preventDefault();

        switchToNextForm(thirdForm, fourForm, e);
    });

};

export default thirdFormHandler;
