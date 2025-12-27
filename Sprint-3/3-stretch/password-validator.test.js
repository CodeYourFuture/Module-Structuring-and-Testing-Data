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
    const password = "As?123";
    // Act
    const result = isValidPassword(password);
    // Assert
    expect(result).toEqual(true);
}
);
test("password has at least 5 characters", () => {
  const password = "As?3"; 
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("password has at least one English uppercase letter (A-Z)", () => {
  const password = "As?123";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});
test("password has at least one English uppercase letter (A-Z)", () => {
  const password = "s?123";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("password has at least one English lowercase letter (a-z)", () => {
  const password = "'aK763";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});
test("password has at least one English lowercase letter (a-z)", () => {
  const password = "QWE<25365";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("password has at least one number 0-9", () => {
  const password = "QWE<25365";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});