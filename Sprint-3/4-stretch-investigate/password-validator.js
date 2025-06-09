/*
Requirement:
Write a function that checks if a password is valid and returns a boolean.

To be valid, a password must:
1. Have at least 5 characters.
2. Have at least one English uppercase letter (A-Z).
3. Have at least one English lowercase letter (a-z).
4. Have at least one number (0-9).
5. Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&").
6. Must not be any previous password in the passwords array.
*/

const previousPasswords = ["Pass123!", "HelloWorld1$", "Admin2024#"];

function passwordValidator(password) {
    // Check if password length is at least 5
    if (password.length < 5) return false;

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) return false;

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) return false;

    // Check for at least one digit
    if (!/[0-9]/.test(password)) return false;

    // Check for at least one of the required symbols
    if (!/[!#$%.*&]/.test(password)) return false;

    // Check if password has been used before
    if (previousPasswords.includes(password)) return false;

    // If all checks pass, password is valid
    return true;
}

module.exports = passwordValidator;
