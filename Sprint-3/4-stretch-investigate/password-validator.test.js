/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
>>>>>- Have at least 5 characters.
>>>>> Have at least one English uppercase letter (A-Z)
>>>>> Have at least one English lowercase letter (a-z)
>>>>> Have at least one number (0-9)
>>>>>Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const isValidPassword = require("./password-validator");

// Have at least 5 characters.
test("1234 will be invalid or false", () => {
  const password = "1234";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

// Have at least one English uppercase letter (A-Z)
test("1234567a! will be invalid or false", () => {
  const password = "1234567a!";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});
test("1234567a!A will be invalid or true", () => {
  const password = "1234567a!A";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

// Have at least one English uppercase letter (a-z)
test("1234567!A will be invalid or false", () => {
  const password = "1234567!A";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});
test("1234567!Aa will be invalid or true", () => {
  const password = "1234567!Aa";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

// Have at least one number (0-9)
test("abcde!A will be invalid or false", () => {
  const password = "abcde!A";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});
test("abcde!A1 will be invalid or true", () => {
  const password = "abcde!A1";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

// Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
test("abcde7A will be invalid or false", () => {
  const password = "abcde7A";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});
test("abcde7A# will be invalid or true", () => {
  const password = "abcde7A#";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

// const usedPasswords = [
//   "B3a*fz9L",
//   "g7!Rk2Wq",
//   "Z#1dLp8v",
//   "M9.tAq3b",
//   "eV$7xGn2",
// ];

// - Must not be any previous password in the passwords array.
test("B3a*fz9L will be invalid or false", () => {
  const password = "B3a*fz9L";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});
test("B3a*fz9L# will be invalid or true", () => {
  const password = "B3a*fz9L#";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});
