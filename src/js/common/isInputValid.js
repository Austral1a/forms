const isInputValid = (validator, inputText) => {
    return validator.test(inputText);
};

export default isInputValid;
