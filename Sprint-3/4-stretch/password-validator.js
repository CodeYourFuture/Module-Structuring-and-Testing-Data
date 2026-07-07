function passwordValidator(password) {
    // Rule: Must be at least 8 characters
    if (password.length < 8) return false;

    // Rule: Must contain at least one number
    const hasNumber = /\d/.test(password);
    if (!hasNumber) return false;

    // Rule: Must contain at least one uppercase letter
    const hasUpperCase = /[A-Z]/.test(password);
    if (!hasUpperCase) return false;

    return true;
}

module.exports = passwordValidator;