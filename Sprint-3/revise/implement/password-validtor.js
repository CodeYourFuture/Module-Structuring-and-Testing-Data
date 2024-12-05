function validatePassword(password, passwords) {

    if (password.length < 5) {
        return false;
    }


    const hasUpperCase = /[A-Z]/.test(password);
    if (!hasUpperCase) {
        return false;
    }


    const hasLowerCase = /[a-z]/.test(password);
    if (!hasLowerCase) {
        return false;
    }


    const hasDigit = /\d/.test(password);
    if (!hasDigit) {
        return false;
    }


    const hasSpecialChar = /[!#$%.&*]/.test(password);
    if (!hasSpecialChar) {
        return false;
    }


    if (passwords.includes(password)) {
        return false;
    }

    return true;
}

module.exports = validatePassword;