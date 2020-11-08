const expiryDayValidation = (year, month, inputName, errorText) => {
    const currentDay = new Date()
    const expiryDay = new Date(+year, +month - 1, 1)

    let errorsObject = JSON.parse(sessionStorage.getItem('errors'))

    // if expiry date has arrived
    if(month > 12 || month < 1) {
        errorsObject[inputName] = errorText
    }
    if(currentDay > expiryDay) {
        errorsObject[inputName] = errorText
    }

    sessionStorage.setItem('errors', JSON.stringify(errorsObject))
}

export default expiryDayValidation
