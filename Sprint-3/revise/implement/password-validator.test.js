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

function isPasswordValid(password, previousPasswords) {
    // Check password length
    if (password.length < 5) {
        return false; // Password must be at least 5 characters long
    }

    // Flags to check each condition
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
    let hasSpecialChar = false;

    // Define the set of allowed special characters
    const specialChars = ['!', '#', '$', '%', '.', '*', '&'];

    // Iterate through each character in the password
    for (let i = 0; i < password.length; i++) {
        // Current character
        const char = password[i];

        // Check if the character is uppercase
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        }
        // Check if the character is lowercase
        else if (char >= 'a' && char <= 'z') {
            hasLowerCase = true;
        }
        // Check if the character is a number
        else if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
        // Check if the character is a special character
        else if (specialChars.includes(char)) {
            hasSpecialChar = true;
        }
    }

    // Ensure all conditions are met
    const isValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;

    // Check against previous passwords
    if (isValid && !previousPasswords.includes(password)) {
        return true; // Password is valid and not previously used
    }

    return false; // Password is invalid or previously used
}

// Test cases
const previousPasswords = ['Password1!', 'Test123!', 'Aa4!4'];
console.log(isPasswordValid('Aa4!4', previousPasswords)); // false (already used)
console.log(isPasswordValid('Aa4!5', previousPasswords)); // true (valid new password)
console.log(isPasswordValid('aaa!5', previousPasswords));  // false (no uppercase letter)
console.log(isPasswordValid('Aaa5!', previousPasswords));   // true (valid)
console.log(isPasswordValid('12345', previousPasswords));   // false (no letters or special chars)
