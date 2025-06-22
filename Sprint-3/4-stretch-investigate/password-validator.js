const previousPasswords = ["Letmein!", "Pass12", "Passw0rd!"];

function passwordValidator(password) {
    // Checks whether the password variable is a string
    if (typeof password !== 'string') return false;

    // Check length is at least a minimum of 5 characters long
    if (password.length < 5) return false;

    // Check for at least one uppercase letter A-Z
    if (!/[A-Z]/.test(password)) return false;

    // Check for at least one lowercase letter a-z
    if (!/[a-z]/.test(password)) return false;

    // Check for at least one number 0-9
    if (!/[0-9]/.test(password)) return false;

    // Check for at least one non-alphanumeric symbol: ("!", "#", "$", "%", ".", "*", "&") using regex
    if (!/[!#$%.*&]/.test(password)) return false;

    // Check that password is not in previousPasswords array 
    if (previousPasswords.includes(password)) return false;

    // If all checks pass, return true
    return true;
}

module.exports = passwordValidator;