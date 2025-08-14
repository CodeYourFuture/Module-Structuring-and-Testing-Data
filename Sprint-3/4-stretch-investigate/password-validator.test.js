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
const passwordValidator = require("./password-validator");

test("password must be at least 5 characters", () => {
  expect(passwordValidator("Ab1!")).toBe(false);
  expect(passwordValidator("Abc1!")).toBe(true);
});

test("password must contain uppercase, lowercase, number, and special character", () => {
  expect(passwordValidator("abcd1")).toBe(false);
  expect(passwordValidator("ABCD1!")).toBe(false);
  expect(passwordValidator("abcD!")).toBe(false);
  expect(passwordValidator("abcD1!")).toBe(true);
});

test("password should not be previously used", () => {
  expect(passwordValidator("Pass123!")).toBe(false);
  expect(passwordValidator("NewPass1!")).toBe(true);
});
