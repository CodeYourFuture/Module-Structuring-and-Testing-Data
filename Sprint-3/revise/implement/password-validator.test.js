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

const isPasswordValid = require('./password-validator'); // Adjust the import if needed

describe('isPasswordValid', () => {
  const previousPasswords = ["Passw0rd!", "Admin123$", "Hello*World1"];

  test('should return true for a valid password', () => {
    expect(isPasswordValid("New*Pass1", previousPasswords)).toBe(true);
  });

  test('should return false for a password that is too short', () => {
    expect(isPasswordValid("Sh1*", previousPasswords)).toBe(false); // A clearer and more accurate test
  });

  test('should return false for a password missing a number', () => {
    expect(isPasswordValid("NoNumber!", previousPasswords)).toBe(false);
  });

  test('should return false for a password missing an uppercase letter', () => {
    expect(isPasswordValid("noupper1*", previousPasswords)).toBe(false);
  });

  test('should return false for a password missing a lowercase letter', () => {
    expect(isPasswordValid("NOLOWER1*", previousPasswords)).toBe(false);
  });

  test('should return false for a password missing a symbol', () => {
    expect(isPasswordValid("NoSymbol1", previousPasswords)).toBe(false);
  });

  test('should return false for a password that is not unique', () => {
    expect(isPasswordValid("Admin123$", previousPasswords)).toBe(false);
  });

  test('should return true for a complex valid password', () => {
    expect(isPasswordValid("Complex*Password1", previousPasswords)).toBe(true);
  });
});