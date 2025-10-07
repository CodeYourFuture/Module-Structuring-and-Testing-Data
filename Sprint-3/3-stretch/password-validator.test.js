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

describe("passwordValidator", () => {
  const validPassword = "123Ab*";

  test("returns true for passwords with at least 5 characters", () => {
    expect(isValidPassword(validPassword)).toBe(true);
  });

  test("return true for passwords with at least one uppercase letter", () => {
    expect(isValidPassword(validPassword)).toBe(true);
  });

  test("return true for passwords with at least one lowercase letter", () => {
    expect(isValidPassword(validPassword)).toBe(true);
  });

  test("return true for passwords with at least one number", () => {
    expect(isValidPassword(validPassword)).toBe(true);
  });

  test("return true for passwords with at least one non-alphanumeric symbol", () => {
    expect(isValidPassword(validPassword)).toBe(true);
  });

  test("return true for passwords that are not in the previous passwords array", () => {
    expect(isValidPassword(validPassword)).toBe(true);
  });

  // tests for false cases

  test("returns false for passwords with less than 5 characters", () => {
    expect(isValidPassword("1234")).toBe(false);
  });

  test("returns false for passwords without an uppercase letter", () => {
    expect(isValidPassword("123ab*")).toBe(false);
  });

  test("returns false for passwords without a lowercase letter", () => {
    expect(isValidPassword("123AB*")).toBe(false);
  });

  test("returns false for passwords without a number", () => {
    expect(isValidPassword("abAB*")).toBe(false);
  });

  test("returns false for passwords without a non-alphanumeric symbol", () => {
    expect(isValidPassword("123Abc")).toBe(false);
  });

  test("returns false for passwords that are in the previous passwords array", () => {
    expect(isValidPassword("123Ab!")).toBe(false);
  });
});
