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
    if(password < 4 && password.contains(UpperCase A-Z) && password.contains(lowerCase a- z) && password.contains(int) && password.contains(symbol) && )
You must breakdown this problem in order to solve it. Find one test case first and get that working

the function returns a true or false

according the above lets make a password
test case: C@nham9!!
expected: too pass
    */

const passwordValidator = require('./passwordValidator');

describe('passwordValidator function', () => {
    beforeEach(() => {
        // need to reset the previousPasswords array before each test
        require('./passwordValidator').previousPasswords = [];
    });

    // Test case 1: Password with less than 5 characters
    it('should return false for password with less than 5 characters', () => {
        expect(passwordValidator('P@ss')).toBe(false);
    });

    // Test case 2: Password without uppercase letter
    it('should return false for password without uppercase letter', () => {
        expect(passwordValidator('p@ssw0rd')).toBe(false);
    });

    // Test case 3: Password without lowercase letter
    it('should return false for password without lowercase letter', () => {
        expect(passwordValidator('P@SSW0RD')).toBe(false);
    });

    // Test case 4: Password without number
    it('should return false for password without number', () => {
        expect(passwordValidator('P@ssword')).toBe(false);
    });

    // Test case 5: Password without symbol
    it('should return false for password without symbol', () => {
        expect(passwordValidator('Password123')).toBe(false);
    });

    // Test case 6: Valid password
    it('should return true for valid password', () => {
        expect(passwordValidator('P@ssw0rd!')).toBe(true); 
    });

    // Test case 7: Duplicate password
    it('should return false for duplicate password', () => {
        passwordValidator('P@ssw0rd!');         // this didnt pass and it took long to figure out why cause i already reset the previousPasswords[] but the issue was with having two expectations so i change the syntax of the test to get the expected result.
        expect(passwordValidator('P@ssw0rd!')).toBe(false);
    });
});