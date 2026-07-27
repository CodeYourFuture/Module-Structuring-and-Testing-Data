const { passwordValidator } = require("./password-validator");

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
  expect(passwordValidator("MyPass1$")).toEqual(true);
});
