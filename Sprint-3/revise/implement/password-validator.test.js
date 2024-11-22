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
// password-validator.test.js
const passwordValidator = require("./password-validator");

describe("Password Validator Tests", () => {
  test("should return false for a password shorter than 5 characters", () => {
    expect(passwordValidator("1234")).toBe(false);
  });

  test("should return false for a password with no uppercase letter", () => {
    expect(passwordValidator("password1$")).toBe(false);
  });

  test("should return false for a password with no lowercase letter", () => {
    expect(passwordValidator("PASSWORD1$")).toBe(false);
  });

  test("should return false for a password with no number", () => {
    expect(passwordValidator("Password$")).toBe(false);
  });

  test("should return false for a password with no special character", () => {
    expect(passwordValidator("Password1")).toBe(false);
  });

  test("should return true for a valid password and add it to the password list", () => {
    expect(passwordValidator("Sajad1989$")).toBe(true);
    // Test that the password was added to the list
    expect(passwordValidator("Sajad1989$")).toBe(false); // Should fail because it's already used
  });

  test("should return false for a password that has been used previously", () => {
    passwordValidator("NewPass1$"); // Add this password
    expect(passwordValidator("NewPass1$")).toBe(false); // Should fail because it's already used
  });
});
