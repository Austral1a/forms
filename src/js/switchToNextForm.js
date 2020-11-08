const switchToNextForm = (fromForm, toForm, formEvent) => {
    const errors = Object.values(JSON.parse(sessionStorage.getItem('errors')))
    const errorsContainer = document.querySelector('header')
    // if there are errors it will show it on a screen
    if(errors.length > 0) {
        e.preventDefault()

        errorsContainer.innerHTML = errors.join(',  <br>')
        // otherwise, show next form
    } else {
        formEvent.preventDefault()
        // clean up errors
        errorsContainer.innerHTML = ''
        // hide first form
        fromForm.style.display = 'none'

        // show next form
        toForm.style.display = 'flex'

    }
}

export default switchToNextForm