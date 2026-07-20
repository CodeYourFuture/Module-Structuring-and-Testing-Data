const { passwordValidator, previousPasswords } = require("./password-validator");

test("should return false when password has fewer than 5 characters", () => {
  expect(passwordValidator("Ab1!")).toEqual(false);
});

test("should return false when password has no uppercase letter", () => {
  expect(passwordValidator("hello1!")).toEqual(false);
});

test("should return false when password has no lowercase letter", () => {
  expect(passwordValidator("HELLO1!")).toEqual(false);
});

test("should return false when password has no number", () => {
  expect(passwordValidator("Hello!")).toEqual(false);
});

test("should return false when password has no special character", () => {
  expect(passwordValidator("Hello1")).toEqual(false);
});

test("should return false when password is a previous password", () => {
  expect(passwordValidator("Pass1!")).toEqual(false);
});

test("should return true for a valid password meeting all criteria", () => {
  expect(passwordValidator("Valid1!")).toEqual(true);
  expect(passwordValidator("MyP@ss1")).toEqual(false); // @ not in allowed symbols
  expect(passwordValidator("MyPass1$")).toEqual(true);
});

test("should return false for password with exactly 5 chars but missing a required type", () => {
  expect(passwordValidator("ab1!A")).toEqual(true);  // valid: 5 chars, all types present
  expect(passwordValidator("ab1!!")).toEqual(false); // no uppercase
});