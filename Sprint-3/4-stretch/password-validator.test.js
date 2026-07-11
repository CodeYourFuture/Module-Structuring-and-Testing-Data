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
  const password = "12345cA!";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(true);
});

test("password with less than 5 characters is invalid", () => {
  // Arrange
  const password = "1Aa%";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("password with no uppercase letters is invalid", () => {
  // Arrange
  const password = "1234ab$";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("password with no lowercase letters is invalid", () => {
  // Arrange
  const password = "1234AB$";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("password with no numbers is invalid", () => {
  // Arrange
  const password = "passWord!";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("password with non-alphanumeric symbols is invalid", () => {
  // Arrange
  const password = "1234aAv";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("previous passwords in the passwords array are invalid", () => {
  // Arrange
  const password = "Qwerty1#";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});
