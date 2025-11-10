function passwordValidator(password) {
    return password.length < 5 ? false : true
}


module.exports = passwordValidator;

// password.length < 5 → rejects short passwords.

// Returns true only if the password passes all checks.