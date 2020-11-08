export const isTextNotPassRe = (validator, inputText) => {
    return !validator.test(inputText)
}
