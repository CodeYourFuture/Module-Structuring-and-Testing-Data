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
const isValidPassword = require("./password-validator");
test("password has at least 5 characters", () => {
  // Arrange
  const password = "12345";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

// TEST 4: Missing symbol
// Should fail because there is no special character
test("fails if missing symbol", () => {
  const password = "Hello123";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});
// TEST 6: Common/reused password (if your logic rejects common ones)
// Should fail because the password is too common (if that rule is included)
test("fails if reused/common password", () => {
  const password = "Password123!";
  const result = isValidPassword(password);
  expect(result).toEqual(false); // Update this only if your validator handles common passwords
});