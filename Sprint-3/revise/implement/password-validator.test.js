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
function validate(password, previousPasswords = []) {
  // Check if password is in previous passwords
  if (previousPasswords.includes(password)) {
    return false;
  }

  // Check length
  if (password.length < 5) {
    return false;
  }

  // Check for uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Check for lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Check for number
  if (!/[0-9]/.test(password)) {
    return false;
  }

  // Check for non-alphanumeric symbol
  if (!/[!#$%.*&]/.test(password)) {
    return false;
  }

  // If all checks pass
  return true;
}


  // Valid password scenarios
  test('valid password should return true', () => {
    expect(validate('Pass1!', [])).toBe(true);
  });

  // Length validation
  test('password less than 5 characters should return false', () => {
    expect(validate('Pa1!', [])).toBe(false);
  });

  // Uppercase validation
  test('password without uppercase letter should return false', () => {
    expect(validate('pass1!', [])).toBe(false);
  });

  // Lowercase validation
  test('password without lowercase letter should return false', () => {
    expect(validate('PASS1!', [])).toBe(false);
  });

  // Number validation
  test('password without number should return false', () => {
    expect(validate('PassWord!', [])).toBe(false);
  });

  // Symbol validation
  test('password without symbol should return false', () => {
    expect(validate('Pass123', [])).toBe(false);
  });

 