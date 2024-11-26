function isValidPassword(password, passwords) {
    // Condition 1: Minimum 5 characters
    if (password.length < 5) return false;

    // Condition 2: At least one uppercase letter (A-Z)
    if (!/[A-Z]/.test(password)) return false;

    // Condition 3: At least one lowercase letter (a-z)
    if (!/[a-z]/.test(password)) return false;

    // Condition 4: At least one digit (0-9)
    if (!/[0-9]/.test(password)) return false;

    // Condition 5: At least one special character
    if (!/[!#$%.*&]/.test(password)) return false;

    // Condition 6: Password must not be in the previous passwords array
    if (passwords.includes(password)) return false;

    // If all conditions are met, return true
    return true;
}
module.exports = isValidPassword