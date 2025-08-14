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
  // Arrange
  const password = "12345Aa*";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(true);
});

test("password must have at least one uppercase letter", () => {
  expect(isValidPassword("abc1!")).toBe(false);
  expect(isValidPassword("Abc1!")).toBe(true);
});

test("password must have at least one lowercase letter", () => {
  expect(isValidPassword("ABC1!")).toBe(false);
  expect(isValidPassword("AbC1!")).toBe(true);
});

test("password must have at least one number", () => {
  expect(isValidPassword("Fdeg!")).toBe(false);
  expect(isValidPassword("Fdeg1!")).toBe(true);
});

test("password must have at least one special character (!#$%.*&)", () => {
  expect(isValidPassword("Abc12")).toBe(false);
  expect(isValidPassword("Abc1!")).toBe(true);
});

test("password must not be in previousPasswords", () => {
  const prev = ["passWord123!", "Hello123!"];
  expect(isValidPassword("passWord123!", prev)).toBe(false);
  expect(isValidPassword("ffDe12!", prev)).toBe(true);
});
