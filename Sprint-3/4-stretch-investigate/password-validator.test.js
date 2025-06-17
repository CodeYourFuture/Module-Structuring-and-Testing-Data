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
  const password = "Pass1!";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(true);
});

test("password has at least one uppercase letter", () => {
  // Arrange
  const password = "Password1!";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(true);
});

test("password has at least one lowercase letter", () => {
  // Arrange
  const password = "PASSWORD1!";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("password has at least one number", () => {
  // Arrange
  const password = "Password!";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("password has at least one special character", () => {
  // Arrange
  const password = "Password1";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("password is not in the previous passwords array", () => {
  // Arrange
  const password = "Password1!";
  const previousPasswords = ["OldPassword1!", "AnotherPassword2!"];
  // Act
  const result = isValidPassword(password, previousPasswords);
  // Assert
  expect(result).toEqual(true);
});

test("password is in the previous passwords array", () => {
  // Arrange
  const password = "OldPassword1!";
  const previousPasswords = ["OldPassword1!", "AnotherPassword2!"];
  // Act
  const result = isValidPassword(password, previousPasswords);
  // Assert
  expect(result).toEqual(false);
});
