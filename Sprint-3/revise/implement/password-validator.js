function isValidPassword(password, passwords) {
    // Check password length, uppercase, lowercase, number, special character, and uniqueness
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecial = /[^a-zA-Z0-9]/.test(password);
    
    // Return true only if all conditions are met
    return password.length >= 5 && hasUpper && hasLower && hasDigit && hasSpecial && !passwords.includes(password);
}

module.exports = isValidPassword;
