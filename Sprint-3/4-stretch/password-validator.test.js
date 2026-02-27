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
test("valid password passes validation", () => {
  const password = "Abc1!"; // meets all rules
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

test("password too short fails", () => {
  expect(isValidPassword("A1!b")).toBe(false);
});

test("password without uppercase fails", () => {
  expect(isValidPassword("abc1!")).toBe(false);
});

test("password without lowercase fails", () => {
  expect(isValidPassword("ABC1!")).toBe(false);
});

test("password without number fails", () => {
  expect(isValidPassword("Abcde!")).toBe(false);
});

test("password without special char fails", () => {
  expect(isValidPassword("Abcde1")).toBe(false);
});

test("password previously used fails", () => {
  expect(isValidPassword("Password1!")).toBe(false);
});
