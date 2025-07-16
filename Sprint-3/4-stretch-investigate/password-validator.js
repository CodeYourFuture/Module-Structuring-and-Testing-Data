function passwordValidator(password) {
    return password.length < 5 ? false : true
}


module.exports = passwordValidator;

// List of previously used passwords that are no longer allowed
const oldPasswords = ["Password1!", "12345aA!", "Admin123!"]; 

function passwordValidator(password) {
    // Rule 1: Password must be at least 5 characters long
    if (password.length < 5) return false;

    // Rule 2: Must have at least one uppercase letter (A–Z)
    const hasUpperCase = /[A-Z]/.test(password);

    // Rule 3: Must have at least one lowercase letter (a–z)
    const hasLowerCase = /[a-z]/.test(password);

    // Rule 4: Must include at least one number (0–9)
    const hasNumber = /[0-9]/.test(password);

    // Rule 5: Must include at least one special symbol from the list: !, #, $, %, ., *, &
    const hasSymbol = /[!#$%.*&]/.test(password);

    // Rule 6: Password must NOT match any in the list of old passwords
    const isNotOldPassword = !oldPasswords.includes(password);

    // Final check: return true only if all rules are passed
    return hasUpperCase && hasLowerCase && hasNumber && hasSymbol && isNotOldPassword;
}

module.exports = passwordValidator;