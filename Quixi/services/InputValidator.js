exports.validateInput = (value, regex, errorSetter, errorMessage) => {
    if (!value) {
        errorSetter(errorMessage);
        return false;
    } else if (regex && !regex.test(value)) {
        errorSetter(`Please enter a valid ${errorMessage.toLowerCase()}`);
        return false;
    } else {
        errorSetter('');
        return true
    }
};