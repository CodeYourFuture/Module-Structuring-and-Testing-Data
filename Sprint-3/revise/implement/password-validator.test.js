/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean :true/false

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const validatePassword = require('./password-validator.js');

describe('Password Validation', () => {

    const previousPasswords = ["Password1!", "Test123@", "MySecret$"];

    test('should return false for passwords less than 5 characters', () => {
        expect(validatePassword("1234", previousPasswords)).toBe(false);
        expect(validatePassword("abc", previousPasswords)).toBe(false);
    });

    test('should return false if password does not contain an uppercase letter', () => {
        expect(validatePassword("abcde1!", previousPasswords)).toBe(false);
    });

    test('should return false if password does not contain a lowercase letter', () => {
        expect(validatePassword("ABCDE1!", previousPasswords)).toBe(false);
    });

    test('should return false if password does not contain a digit', () => {
        expect(validatePassword("Abcde!", previousPasswords)).toBe(false);
    });

    test('should return false if password does not contain a special character', () => {
        expect(validatePassword("Abcde1", previousPasswords)).toBe(false);
    });

    test('should return false if password matches a previously used password', () => {
        expect(validatePassword("Password1!", previousPasswords)).toBe(false);
        expect(validatePassword("Test123@", previousPasswords)).toBe(false);
        expect(validatePassword("MySecret$", previousPasswords)).toBe(false);
    });

    test('should return true if password is valid and unique', () => {
        expect(validatePassword("NewPassword1!", previousPasswords)).toBe(true);
        expect(validatePassword("Unique123$", previousPasswords)).toBe(true);
    });

});
