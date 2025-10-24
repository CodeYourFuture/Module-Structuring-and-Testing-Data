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
  const password = "Abc1!";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(true);
});

test("password with less than 5 characters returns false", () => {
  expect(isValidPassword("Ab1!")).toEqual(false);
});

test("password without uppercase returns false", () => {
  expect(isValidPassword("abc1!")).toEqual(false);
});

test("password without lowercase returns false", () => {
  expect(isValidPassword("ABC1!")).toEqual(false);
});

test("password without number returns false", () => {
  expect(isValidPassword("Abcd!")).toEqual(false);
});

test("password without special symbol returns false", () => {
  expect(isValidPassword("Abcd1")).toEqual(false);
});

test("valid password with all requirements returns true", () => {
  expect(isValidPassword("Abc1!")).toEqual(true);
});