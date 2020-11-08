export const isTextNotPassRe = (validator, inputText) => {
    return !validator.test(inputText)
}

export const saveErrorInStorage = (validator, inputText, inputName, errorText) => {
    let errorsObject = JSON.parse(sessionStorage.getItem('errors'))
    if(isTextNotPassRe(validator, inputText)) {
        errorsObject[inputName] = errorText
    }
    sessionStorage.setItem('errors', JSON.stringify(errorsObject))
}
