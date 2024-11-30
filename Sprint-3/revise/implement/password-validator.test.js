/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/


/**
 * Validates a password based on given criteria.
 * @param {string} password - The password to validate.
 * @param {Array<string>} passwordsArray - Array of previous passwords.
 * @returns {boolean} True if the password is valid, false otherwise.
 */
function isPasswordValid(password, passwordsArray) {
    // Check if password has at least 5 characters
    if (password.length < 5) {
        return false;
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // Check for at least one number
    if (!/[0-9]/.test(password)) {
        return false;
    }

    // Check for at least one special character
    if (!/[!#$%.*&]/.test(password)) {
        return false;
    }

    // Check if the password is not in the previous passwords array
    if (passwordsArray.includes(password)) {
        return false;
    }

    // If all checks pass, the password is valid
    return true;
}

// Example Usage
const passwordsArray = ["Pass123!", "Welcome2021#", "Admin@123"];
console.log(isPasswordValid("Pass123!", passwordsArray)); // Output: false (already used)
console.log(isPasswordValid("Strong$Pass1", passwordsArray)); // Output: true
console.log(isPasswordValid("weak", passwordsArray)); // Output: false (too short)
