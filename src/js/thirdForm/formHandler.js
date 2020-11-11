import switchToNextForm from '../switchToNextForm';

const thirdFormHandler = () => {
    const thirdForm = document.querySelector('.form-third');
    const fourForm = document.querySelector('.form-four');
    thirdForm.addEventListener('submit', (e) => {
        e.preventDefault();

        switchToNextForm(thirdForm, fourForm, e);
    });

};

export default thirdFormHandler;
