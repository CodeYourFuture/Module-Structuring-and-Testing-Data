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
  const password = "12345";

  const result = isValidPassword(password);

  expect(result).toEqual(false);
});

test("valid password meets all criteria", () => {
  const password = "A1b#2";

  const result = isValidPassword(password);

  expect(result).toEqual(true);
});

test("password is invalid if missing an uppercase letter", () => {
  const password = "abc123!";

  const result = isValidPassword(password);

  expect(result).toEqual(false);
});

test("password is invalid if missing a lowercase letter", () => {
  const password = "ABC123!";

  const result = isValidPassword(password);

  expect(result).toEqual(false);
});

test("password is invalid if missing a number", () => {
  const password = "Abcdef!";

  const result = isValidPassword(password);

  expect(result).toEqual(false);
});

test("password is invalid if missing a special character", () => {
  const password = "Abc123";

  const result = isValidPassword(password);

  expect(result).toEqual(false);
});

test("password is invalid if it was used before", () => {
  const password = "Abc1!";
  const previousPasswords = ["Abc1!"];

  const result = isValidPassword(password, previousPasswords);

  expect(result).toEqual(false);
});
