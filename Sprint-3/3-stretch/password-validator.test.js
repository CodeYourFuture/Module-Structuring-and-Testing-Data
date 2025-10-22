const isValidPassword = require("./password-validator");

// Test 1: Password has at least 5 characters and is valid
test("password has at least 5 characters", () => {
  const password = "Abc1!";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

// Test 2: Password too short
test("password shorter than 5 characters is invalid", () => {
  const password = "A1!a";
  expect(isValidPassword(password)).toEqual(false);
});

// Test 3: Missing uppercase
test("password without uppercase letter is invalid", () => {
  const password = "abc1!";
  expect(isValidPassword(password)).toEqual(false);
});

// Test 4: Missing lowercase
test("password without lowercase letter is invalid", () => {
  const password = "ABC1!";
  expect(isValidPassword(password)).toEqual(false);
});

// Test 5: Missing number
test("password without number is invalid", () => {
  const password = "Abcde!";
  expect(isValidPassword(password)).toEqual(false);
});

// Test 6: Missing special character
test("password without special character is invalid", () => {
  const password = "Abcde1";
  expect(isValidPassword(password)).toEqual(false);
});

// Test 7: Password already used
test("password that is already used is invalid", () => {
  const password = "Password1!";
  expect(isValidPassword(password)).toEqual(false);
});
