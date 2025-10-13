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
  const password = "12345";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

// 2. Password is too short
test("password must be at least 5 characters", () => {
  const password = "Ab1!";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

// 3. Password must contain at least one uppercase letter
test("password must contain at least one uppercase letter", () => {
  const password = "abc!1";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

// 4. Password must contain at least one lowercase letter
test("password must contain at least one lowercase letter", () => {
  const password = "ABC!1";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

// 5. Password must contain at least one number
test("password must contain at least one number", () => {
  const password = "Abc!@";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

// 6. Password must contain at least one symbol (! # $ % . * &)
test("password must contain at least one symbol", () => {
  const password = "Abc12";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

// 7. Password must not be a previously used password
test("password must not be in the previous passwords array", () => {
  const password = "Abc!1"; // this is in the passwords array inside the validator
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

// 8. Password is valid when all requirements are met
test("password is valid when it meets all requirements", () => {
  const password = "Abc!2";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});
