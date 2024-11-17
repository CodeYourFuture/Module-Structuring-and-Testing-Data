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
const isValidPassword=require(./isValidPassword)
const passwords = ['Hello123!', 'Password1$', 'Admin#22'];

describe('isValidPassword', () => {
  test('returns true for a valid password', () => {
    expect(isValidPassword('Valid1!', passwords)).toBe(true);
  });

  test('returns false for a password shorter than 5 characters', () => {
    expect(isValidPassword('Ab1!', passwords)).toBe(false);
  });

  test('returns false for a password without uppercase letters', () => {
    expect(isValidPassword('valid1!', passwords)).toBe(false);
  });

  test('returns false for a password without lowercase letters', () => {
    expect(isValidPassword('VALID1!', passwords)).toBe(false);
  });

  test('returns false for a password without numbers', () => {
    expect(isValidPassword('Valid!', passwords)).toBe(false);
  });

  test('returns false for a password without symbols', () => {
    expect(isValidPassword('Valid12', passwords)).toBe(false);
  });

  test('returns false for a password that is not unique', () => {
    expect(isValidPassword('Hello123!', passwords)).toBe(false);
  });
});
