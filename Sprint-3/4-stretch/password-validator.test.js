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
test("should return false if password has fewer than 5 characters", () => {
  // Arrange
  const password = "A1b&";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("should return false if password was previously used", () => {
  // Arrange
  const password = "5B43n21!";
  // Act
  const result = isValidPassword(password, "5B43n21!");
  // Assert
  expect(result).toEqual(false);
});

test("should return false if password does not contain an uppercase English letter", () => {
  // Arrange
  const password = "1a2345&";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("should return false if password does not contain an lowercase English letter", () => {
  // Arrange
  const password = "1B2345%";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("should return false if password has no digit", () => {
  // Arrange
  const password = "se!rjJN%Gk";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test('should return false if password has no special characters including "!", "#", "$", "%", ".", "*", "&"', () => {
  // Arrange
  const password = "sdkerjJNG23k";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("should return true if password meets all validation rules", () => {
  // Arrange
  const password = "sdkerj!JNG23k&";
  // Act
  const result = isValidPassword(password, ["se!rjJN%G6k", "1B2h345%a"]);
  // Assert
  expect(result).toEqual(true);
});
