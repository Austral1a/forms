import {errors} from '../js/index'

const switchToNextForm = (fromForm, toForm, formEvent, lastForm) => {
    const errorsContainer = document.querySelector('header')

    // if there are no errors, show next form
    if(errors.size) {
        formEvent.preventDefault()

    } else {
        if(lastForm) {
            alert('success')
            return
        }
        formEvent.preventDefault()
        // clean up errors
        errorsContainer.innerText = ''
        // hide first form
        fromForm.style.display = 'none'

        // show next form
        toForm.style.display = 'grid'
    }
}

export default switchToNextForm
