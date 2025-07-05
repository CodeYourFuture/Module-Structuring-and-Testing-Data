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

const previousPasswords = ["Passw0rd!", "123Abc!", "Letmein!", "Pass12"];

test("password has at least 5 characters", () => {
  expect(isValidPassword("A1a!1!")).toBe(true);
});

test("password has at least one English uppercase letter (A-Z)", () => {
  expect(isValidPassword("letm3in!")).toBe(false);
});

test("password has at least one number (0-9)", () => {
  expect(isValidPassword("Pass!word")).toBe(false);
});

test("password has at least one non-alphanumeric symbol (!#$%.*&)", () => {
  expect(isValidPassword("L£tmein1")).toBe(false);
});

test("password is not one of the previous passwords", () => {
  expect(isValidPassword("Passw0rd!", previousPasswords)).toBe(false);
});
