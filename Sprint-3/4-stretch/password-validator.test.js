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
  expect(result).toEqual(true);
});

test("returns true for a valid password", () => {
  expect(isValidPassword("Pen5!")).toBe(true);
});

test("returns false for a short password", () => {
  expect(isValidPassword("Pen!")).toBe(false);
});

test("returns false if there is no uppercase English letter", () => {
  expect(isValidPassword("pen5!")).toBe(false);
});

test("returns false if there is no lowercase English letter", () => {
  expect(isValidPassword("PEN5!")).toBe(false);
});

test("returns false if there is no number", () => {
  expect(isValidPassword("PENf!")).toBe(false);
});

test("returns false if there is no symbol", () => {
  expect(isValidPassword("Pen5a")).toBe(false);
});

test("returns false if password is a previous password", () => {
  expect(isValidPassword("HeLlo5.")).toBe(false);
});
