const isInputNotValid = (validator, inputText) => {
    return !validator.test(inputText);
};

export default isInputNotValid;
