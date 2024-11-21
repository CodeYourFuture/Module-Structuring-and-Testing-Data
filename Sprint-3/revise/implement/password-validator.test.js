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
//Answer:
const isValidPassword = require('./password-validator'); // Updated path

describe('Password Validation', () => {
    const previousPasswords = ['Password1!', '12345$', 'HelloWorld123'];

    test('Valid password', () => {
        expect(isValidPassword('Valid1!', previousPasswords)).toBe(true);
    });

    test('Password too short', () => {
        expect(isValidPassword('Pa1!', previousPasswords)).toBe(false);
    });

    test('Missing uppercase letter', () => {
        expect(isValidPassword('valid1!', previousPasswords)).toBe(false);
    });

    test('Missing lowercase letter', () => {
        expect(isValidPassword('VALID1!', previousPasswords)).toBe(false);
    });

    test('Missing number', () => {
        expect(isValidPassword('Pass!', previousPasswords)).toBe(false);
    });

    test('Missing special character', () => {
        expect(isValidPassword('Valid12', previousPasswords)).toBe(false);
    });

    test('Already used password', () => {
        expect(isValidPassword('Password1!', previousPasswords)).toBe(false);
    });
});

