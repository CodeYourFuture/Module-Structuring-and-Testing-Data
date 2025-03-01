function passwordValidator(password) {
    if (password.length < 5) {
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    if (!/[a-z]/.test(password)) {
        return false;
    }
    if (!/[0-9]/.test(password)) {
        return false;
    }
    if (!/[!#$%.&*]/.test(password)) {
        return false;
    }
    return true;
}

// To be valid, a password must:
// - Have at least 5 characters.
// - Have at least one English uppercase letter (A-Z)
// - Have at least one English lowercase letter (a-z)
// - Have at least one number (0-9)
// - Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
// - Must not be any previous password in the passwords array. 

module.exports = passwordValidator;