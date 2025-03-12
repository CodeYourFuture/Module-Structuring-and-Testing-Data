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

test("Valid password, meets all requirements", () => {
  const passwords = [];
  const password ="Test1!";
  const result = passwordValidator(password, passwords);
  expect(result).toBe(true);
});

test(" Invalid password, has no English uppercase letter (A-Z)", () => {
  const passwords = [];
  const password = "test2!";
  const result = passwordValidator(password, passwords);
  expect(result).toBe(false);
});

test("Invalid password has no English lowercase letter (a-z)", () => {
  const passwords = [];
  const password = "TEST3!";
  const result = passwordValidator(password, passwords);
  expect(result).toBe(false);
});

test("Invalid password has no number (0-9)", () => {
  const passwords = [];
  const password = "Test!";
  const result = passwordValidator(password, passwords);
  expect(result).toBe(false);
});

test("Invalid password has no non-alphanumeric symbols", () => {
  const passwords = [];
  const password = "Test5";
  const result = passwordValidator(password, passwords);
  expect(result).toBe(false);
});

test("password must not be any previous password in the passwords array", () => {
  const passwords = ["Test5!"];
  const password = "Test6!";  
  const result = passwordValidator(password, passwords);
  expect(result).toBe(true);
});

// Test case to check if the function correctly returns false for duplicate passwords
test("should return false if the password already exists in the passwords array", () => {
  const passwords = ["Test1!", "Password123$", "HelloWorld5&"];
  const password = "Test1!";
  const result = passwordValidator(password, passwords);
  expect(result).toBe(false); 
});