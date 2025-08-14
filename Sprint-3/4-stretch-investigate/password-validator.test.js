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
const isValidPassword = require("./password-validator.js");
test("password has at least 5 characters", () => {
    // Arrange
    const password = "Abc1!";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);

test("password has at least an English uppercase letter (A-Z)", () => {
  const password = "Team1!";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});


test("password has at least an English lowercase letter(a-z)", () => {
  const password = "Access1!";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});


test("password must have at least a number (0-9)", () => {
  const password = "Happy1!";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

test("password must have at least one non-alphanumeric symbols: ('!', '#', '$', '%', '.', '*', '&')", () => {
  const password = "Life1!";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

test("password must not be any previous password in the passwords array", ()=> {
  const password = "PasswordAccess1!";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("fails when password is less than 5 characters", () => {
  const password = "A1!a";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("fails when password has no uppercase letter", () => {
  const password = "abc1!";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("fails when password has no lowercase letter", () => {
  const password = "ABC1!";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("fails when password has no number", () => {
  const password = "Abc!";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("fails when password has no special character", () => {
  const password = "Abc1";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});
