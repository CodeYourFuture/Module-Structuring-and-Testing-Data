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
const previousPasswords = ["OldPass1!", "Previous2#"];

// Test 1: Minimum length requirement
test("password has at least 5 characters", () => {
  // Arrange
  const validPassword = "Aa#12"; // Exactly 5 chars (minimum)
  const invalidPassword = "Aa#1"; // 4 chars (too short)

  // Act (valid case)
  const validResult = isValidPassword(validPassword, previousPasswords);
  // Assert
  expect(validResult).toEqual(true);

  // Act (invalid case)
  const invalidResult = isValidPassword(invalidPassword, previousPasswords);
  // Assert
  expect(invalidResult).toEqual(false);
});

// Test 2: Uppercase letter requirement
test("password has at least one English uppercase letter (A-Z)", () => {
  // Arrange
  const validPassword = "Aa#123"; // Contains 'A'
  const invalidPassword = "aa#123"; // No uppercase

  // Act
  const validResult = isValidPassword(validPassword, previousPasswords);
  const invalidResult = isValidPassword(invalidPassword, previousPasswords);

  // Assert
  expect(validResult).toEqual(true);
  expect(invalidResult).toEqual(false);
});

// Test 3: Lowercase letter requirement
test("password has at least one English lowercase letter (a-z)", () => {
  // Arrange
  const validPassword = "Aa#123"; // Contains 'a'
  const invalidPassword = "AA#123"; // No lowercase

  // Act
  const validResult = isValidPassword(validPassword, previousPasswords);
  const invalidResult = isValidPassword(invalidPassword, previousPasswords);

  // Assert
  expect(validResult).toEqual(true);
  expect(invalidResult).toEqual(false);
});

// Test 4: Number requirement
test("password has at least one number (0-9)", () => {
  // Arrange
  const validPassword = "Aa#123"; // Contains '1'
  const invalidPassword = "Aa#abc"; // No numbers

  // Act
  const validResult = isValidPassword(validPassword, previousPasswords);
  const invalidResult = isValidPassword(invalidPassword, previousPasswords);

  // Assert
  expect(validResult).toEqual(true);
  expect(invalidResult).toEqual(false);
});

// Test 5: Special character requirement
test('password has at least one non-alphanumeric symbol: "!", "#", "$", "%", ".", "*", "&"', () => {
  // Arrange
  const validPassword = "Aa#123"; // Contains '#'
  const invalidPassword = "Aa1234"; // No special chars

  // Act
  const validResult = isValidPassword(validPassword, previousPasswords);
  const invalidResult = isValidPassword(invalidPassword, previousPasswords);

  // Assert
  expect(validResult).toEqual(true);
  expect(invalidResult).toEqual(false);
});

// Test 6: Previous password check
test("password must not be in previous passwords list", () => {
  // Arrange
  const newPassword = "NewPass1!";
  const oldPassword = "OldPass1!";

  // Act
  const newResult = isValidPassword(newPassword, previousPasswords);
  const oldResult = isValidPassword(oldPassword, previousPasswords);

  // Assert
  expect(newResult).toEqual(true);
  expect(oldResult).toEqual(false);
});

  

