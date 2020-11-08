import switchToNextForm from '../switchToNextForm'

const secondFormHandler = () => {
    const secondForm = document.querySelector('#second-form')
    const thirdForm = document.querySelector('#third-form')
    secondForm.addEventListener('submit', (e) => {
        e.preventDefault()

        switchToNextForm(secondForm, thirdForm, e)
    })

}

export default secondFormHandler
