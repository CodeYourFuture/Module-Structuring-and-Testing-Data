/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/

function isValidPassword(password, previousPasswords) {
 
  if (password.length < 5) {
    return false;
  }

  if (!/[A-Z]/.test(password)) {
    return false;
  }

  if (!/[a-z]/.test(password)) {
    return false;
  }

  if (!/\d/.test(password)) {
    return false;
  }

  if (!/[!#$%.&*]/.test(password)) {
    return false;
  }

  if (previousPasswords.includes(password)) {
    return false;
  }

  return true;
}


describe('isValidPassword', () => {

  const previousPasswords = ["Danial$1", "helloWorld1", "Test@123"];

  test('should return false if password is less than 5 characters', () => {
    expect(isValidPassword('1234', previousPasswords)).toBe(false);
  });

  test('should return false if password has no uppercase letter', () => {
    expect(isValidPassword("danial$1", previousPasswords)).toBe(false);
  });

  test('should return false if password has no lowercase letter', () => {
    expect(isValidPassword("DANIAL$1", previousPasswords)).toBe(false);
  });

  test('should return false if password has no digit', () => {
    expect(isValidPassword('Danial?', previousPasswords)).toBe(false);
  });

  test('should return false if password has no special symbol', () => {
    expect(isValidPassword("Danial1", previousPasswords)).toBe(false);
  });

  test('should return false if password is a previous password', () => {
    expect(isValidPassword("Danial$1", previousPasswords)).toBe(false);
  });

  test('should return true if password meets all requirements', () => {
    expect(isValidPassword("Danial$2", previousPasswords)).toBe(true);
  });
})