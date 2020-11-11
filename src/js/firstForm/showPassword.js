const showPassword = () => {
    const password = document.querySelector('#password')
    const button = document.querySelector('.form__password-show')

    button.addEventListener('mousedown', () => {
        password.setAttribute('type', 'text')
    })

    button.addEventListener('mouseup', () => {
        password.setAttribute('type', 'password')
    })
}

export default showPassword
