function passwordValidator(password, previousPasswords = []) {
    if (password.length < 5) return false;

    const passwordUpper = /[A-Z]/.test(password);
    const passWordLower = /[a-z]/.test(password);
    const passwordNumber =/[0-9]/.test(password);
    const passwordSpecial =/[!#$%.&*]/.test(password);
    const notPreviousPassword = !previousPasswords.includes(password);

    return passwordUpper && passWordLower && passwordNumber && passwordSpecial && notPreviousPassword
}


module.exports = passwordValidator;