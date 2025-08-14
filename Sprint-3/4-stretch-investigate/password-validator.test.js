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
test("valid password should contain at least one English uppercase and lower case letter, number, symbol and not be one of the previous passwords", () => {
  // Arrange
  const password = "Bender1!";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(true);
});

test("should not be one of the previous passwords", () => {
  const password = "Qwerty12345$";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("invalid password without number should return false", () => {
  // Arrange
  const password = "Bender!";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("invalid password without symbol should return false", () => {
  // Arrange
  const password = "Hamburger3";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("password with at least 5 characters and 1 uppercase, but without symbol and number should return false", () => {
  const password = "bearA";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});
