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
const isValidPassword = require('./password-validator');

describe('isValidPassword', () => {
    const previousPasswords = ['Password1!', 'Admin123#'];
 
      it('should return false for passwords with less than 5 characters', () => {
        expect(isValidPassword('P1a!', previousPasswords)).toBe(false);//
    });
//- Have at least one English uppercase letter (A-Z)

it('should return false if there is no uppercase letter', () => {
        expect(isValidPassword('password1!', previousPasswords)).toBe(false);
    });
//- Have at least one English lowercase letter (a-z)

 it('should return false if there is no lowercase letter', () => {
        expect(isValidPassword('PASSWORD1!', previousPasswords)).toBe(false);
    });
  //  - Have at least one number (0-9)

    it('should return false if there is no number', () => {
          expect(isValidPassword('Password!', previousPasswords)).toBe(false);
    });
//- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")

 it('should return false if there is no non-alphanumeric character', () => {
        expect(isValidPassword('Password1', previousPasswords)).toBe(false);
    });
  //  - Must not be any previous password in the passwords array. 

     it('should return false if the password is already used', () => {
        expect(isValidPassword('Password1!', previousPasswords)).toBe(false);
    });
//for valid
    it('should return true for a valid password', () => {
        expect(isValidPassword('NewPass1!', previousPasswords)).toBe(true);
    });
});
