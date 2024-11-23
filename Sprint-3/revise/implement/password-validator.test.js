/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/

const isValidPassword = require("./password-validator");

describe("Password Validation", () => {
  test("should return false if password length is less than 5 characters", () => {
    expect(isValidPassword("abc", [])).toBe(false);
  });

  test("should return true if password length is at least 5 characters", () => {
    expect(isValidPassword("abcde", [])).toBe(true);
  });
});
