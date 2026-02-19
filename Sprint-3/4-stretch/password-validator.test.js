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

describe("Valid passwords", () => {
  test("should return true for a valid password with all rules met", () => {
    const password = "12345Dpw%";
    const result = isValidPassword(password);
    expect(result).toEqual(true);
  });

  test("should return true for another valid password", () => {
    const password = "Abc123!";
    const result = isValidPassword(password);
    expect(result).toEqual(true);
  });

  test("should return true for a valid password with different special symbol", () => {
    const password = "MyPass#1";
    const result = isValidPassword(password);
    expect(result).toEqual(true);
  });
});

describe("Invalid passwords - each breaks one rule", () => {
  test("should reject password with less than 5 characters", () => {
    const password = "1aS!";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
  });

  test("should reject password without an uppercase letter", () => {
    const password = "abcde1!";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
  });

  test("should reject password without a lowercase letter", () => {
    const password = "ABCDE1!";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
  });

  test("should reject password without a number", () => {
    const password = "abcdeFg!";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
  });

  test("should reject password without a special symbol", () => {
    const password = "abcde1FG";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
  });

  test("should reject password if it was used before", () => {
    const password = "12345Dpw%";
    const oldPasswords = ["12345Dpw%"];
    const result = isValidPassword(password, oldPasswords);
    expect(result).toEqual(false);
  });
});
