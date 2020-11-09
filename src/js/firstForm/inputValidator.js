export const isInputValid = (validator, inputText) => {
    return !validator.test(inputText)
}

export const saveErrorInStorage = (validator, inputText, inputName, errorText) => {
    let errorsObject = JSON.parse(sessionStorage.getItem('errors'))
    if(isInputValid(validator, inputText)) {
        errorsObject[inputName] = errorText
    }
    sessionStorage.setItem('errors', JSON.stringify(errorsObject))
}
export const inputValidator = (inputText, rePattern, inputName, errorText) => {
    const validator = new RegExp(rePattern)
    saveErrorInStorage(validator, inputText, inputName, errorText)
}
