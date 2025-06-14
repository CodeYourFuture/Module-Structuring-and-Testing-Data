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
test("password contains at least 5 characters.", () => {
  // Arrange
  const password = "Aa1234&";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(true);
});

test("password has at least 1 uppercase [A-Z]", () => {
  // Arrange
  const password = "Va12345&";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(true);
});

test("password has at least 1 lowercase [a-z]", () => {
  // Arrange
  const password = "Adf12345&";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(true);
});

test("password has at least 1 symbol from [!#$%.*&]", () => {
  // Arrange
  const password = "Aa12345£&";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(true);
});

test("password is not be any previous password in the passwords array", () => {
  // Arrange
  const password = "Sunshine43";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("password has at least one number (0-9)", () => {
  // Arrange
  const password = "Aa12345&";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(true);
});
