function passwordValidator(password, previousPasswords = []) {
    // Check if password is a string and at least 5 characters
    if (typeof password !== 'string' || password.length < 5) return false;

    // Check for uppercase, lowercase, number, and special character
    if (!/[A-Z]/.test(password)) return false;
    if (!/[a-z]/.test(password)) return false;
    if (!/[0-9]/.test(password)) return false;
    if (!/[!#$%.&*]/.test(password)) return false;

    // Check if password was previously used
    if (previousPasswords.includes(password)) return false;

    return true;
}

module.exports = passwordValidator;