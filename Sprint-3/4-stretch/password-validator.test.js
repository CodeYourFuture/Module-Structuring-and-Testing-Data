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
  const password = "A1b2";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("password is not previously used", () => {
  // Arrange
  const password = "5B43n21";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("password contains at least one uppercase English letter", () => {
  // Arrange
  const password = "1a2345";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("password contains at least one uppercase English letter", () => {
  // Arrange
  const password = "1B2345";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("password contains at least one number(0-9)", () => {
  // Arrange
  const password = "sdkerjJNGk";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test('password contains at least one of "!", "#", "$", "%", ".", "*", "&"', () => {
  // Arrange
  const password = "sdkerjJNG23k";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("password meets all the condition for a valid password and passwordValidator returns true", () => {
  // Arrange
  const password = "sdkerjJNG23k&";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(true);
});
