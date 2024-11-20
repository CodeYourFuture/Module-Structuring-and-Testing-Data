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

function isValidPassword(password, passwords) {
    // Check if the password has at least 5 characters
    if (password.length < 5) {
        return false;
    }

    // Check if the password has at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Check if the password has at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // Check if the password has at least one digit
    if (!/[0-9]/.test(password)) {
        return false;
    }

    // Check if the password has at least one special character
    const specialCharacters = /[!#$%.*&]/;
    if (!specialCharacters.test(password)) {
        return false;
    }

    // Check if the password is unique in the passwords array
    if (passwords.includes(password)) {
        return false;
    }

    // If all checks pass, the password is valid
    return true;
}

describe('Password Validator', () => {
    const previousPasswords = ["Password1!", "HelloWorld123*", "Test1234#"];

    test('Valid password', () => {
        const password = "Valid1&";
        expect(isValidPassword(password, previousPasswords)).toBe(true);
    });

    test('Too short password', () => {
        const password = "Va1&";
        expect(isValidPassword(password, previousPasswords)).toBe(false);
    });

    test('No uppercase letter', () => {
        const password = "valid1&";
        expect(isValidPassword(password, previousPasswords)).toBe(false);
    });

    test('No lowercase letter', () => {
        const password = "VALID1&";
        expect(isValidPassword(password, previousPasswords)).toBe(false);
    });

    test('No digit', () => {
        const password = "Valid&";
        expect(isValidPassword(password, previousPasswords)).toBe(false);
    });

    test('No special character', () => {
        const password = "Valid123";
        expect(isValidPassword(password, previousPasswords)).toBe(false);
    });

    test('Password already used', () => {
        const password = "Password1!";
        expect(isValidPassword(password, previousPasswords)).toBe(false);
    });
});