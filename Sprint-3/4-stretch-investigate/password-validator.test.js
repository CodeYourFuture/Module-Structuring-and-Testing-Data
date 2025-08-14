/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
  if (password.length < 5) return false;

- Have at least one English uppercase letter (A-Z)
  const hasUppercase = /[A-Z]/.test(password);

- Have at least one English lowercase letter (a-z)
  const hasLowercase = /[a-z]/.test(password);

- Have at least one number (0-9)
  const hasNumber = /[0-9]/.test(password);

- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
  const hasSymbol = /[!#$%.*&]/.test(password);

- Must not be any previous password in the passwords array. 
  const notUsedBefore = !previousPasswords.includes(password);

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
// Case: Password with only 5 digits should be valid if it meets all rules

 const isValidPassword = require("./password-validator");

test("should validate a password of exactly 5 digits if valid", () => {
  const password = "12345";
  const result = isValidPassword(password);
  expect(result).toEqual(true); // Fix: This should be true because it meets the minimum length
});