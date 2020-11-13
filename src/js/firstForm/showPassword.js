import visibility_on from '../../assets/visibility_on.svg';
import visibility_off from '../../assets/visibility_off.svg';

const showPassword = () => {
    const password = document.querySelector('#password');
    const button = document.querySelector('.form__password-show');

    if(!password) return
    if(!button) return

    // set visibility off as default
    button.style.backgroundImage = `url('${visibility_off}')`;

    button.addEventListener('mousedown', () => {
        password.setAttribute('type', 'text');

        button.style.backgroundImage = `url('${visibility_on}')`;
    });

    button.addEventListener('mouseup', () => {
        password.setAttribute('type', 'password');

        button.style.backgroundImage = `url('${visibility_off}')`;
    });
};

export default showPassword;
