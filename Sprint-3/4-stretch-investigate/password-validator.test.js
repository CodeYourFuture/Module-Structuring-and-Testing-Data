const passwordValidator = require("./password-validator");

test("should return true for password with at least 5 characters and all conditions met", () => {
  expect(passwordValidator("Abc1!")).toEqual(true);
});

test("should return false if password has less than 5 characters", () => {
  expect(passwordValidator("A1!")).toEqual(false);
});

test("should return false if password lacks uppercase letter", () => {
  expect(passwordValidator("abc1!")).toEqual(false);
});

test("should return false if password lacks lowercase letter", () => {
  expect(passwordValidator("ABC1!")).toEqual(false);
});

test("should return false if password lacks a number", () => {
  expect(passwordValidator("Abcde!")).toEqual(false);
});

test("should return false if password lacks required symbol", () => {
  expect(passwordValidator("Abc12")).toEqual(false);
});

test("should return false if password was used before", () => {
  expect(passwordValidator("Pass123!")).toEqual(false);
});
