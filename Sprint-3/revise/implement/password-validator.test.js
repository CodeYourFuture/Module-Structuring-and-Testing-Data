const isValidPassword = require('./password-validator'); // Adjust the path as needed

describe('isValidPassword', () => {
  // Sample list of previous passwords
  const previousPasswords = ["password123", "abc123", "welcome1"];

  test('returns false if the password is less than 5 characters long', () => {
    expect(isValidPassword('1234', previousPasswords)).toBe(false);
  });

  test('returns false if the password does not contain an uppercase letter', () => {
    expect(isValidPassword('password1!', previousPasswords)).toBe(false);
  });

  test('returns false if the password does not contain a lowercase letter', () => {
    expect(isValidPassword('PASSWORD1!', previousPasswords)).toBe(false);
  });

  test('returns false if the password does not contain a number', () => {
    expect(isValidPassword('Password!', previousPasswords)).toBe(false);
  });

  test('returns false if the password does not contain a special character', () => {
    expect(isValidPassword('Password1', previousPasswords)).toBe(false);
  });

  test('returns false if the password is in the list of previous passwords', () => {
    expect(isValidPassword('password123', previousPasswords)).toBe(false);
    expect(isValidPassword('abc123', previousPasswords)).toBe(false);
  });

  test('returns true for a valid password', () => {
    expect(isValidPassword('Password1!', previousPasswords)).toBe(true);
  });

  test('returns false for a valid password format but already used', () => {
    expect(isValidPassword('welcome1', previousPasswords)).toBe(false);
  });
});





