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
const isValidPassword = require('./password-validator');  // Import the function

describe('Password Validation Tests', () => {
    
    // Set of previously used passwords
    const passwords = ["Password123!", "abcDE123"];
    
    test('valid password', () => {
        const result = isValidPassword("Abcde1!", passwords);
        expect(result).toBe(true); // Expected to be valid
    });
    test('missing uppercase letter', () => {
        const result = isValidPassword("abcde1!", passwords);
        expect(result).toBe(false); // Expected to be invalid because no uppercase letter
    });

    test('missing lowercase letter', () => {
        const result = isValidPassword("ABCDE1!", passwords);
        expect(result).toBe(false); // Expected to be invalid because no lowercase letter
    });

    test('missing digit', () => {
        const result = isValidPassword("Abcde!", passwords);
        expect(result).toBe(false); // Expected to be invalid because no digit
    });

    test('missing special character', () => {
        const result = isValidPassword("Abcde1234", passwords);
        expect(result).toBe(false); // Expected to be invalid because no special character
    });

    test('password already used', () => {
        const result = isValidPassword("Password123!", passwords);
        expect(result).toBe(false); // Expected to be invalid because it's already in the passwords list
    });

    test('password valid and unique', () => {
        const result = isValidPassword("NewPass1@", passwords);
        expect(result).toBe(true); // Expected to be valid and unique
    });
});
