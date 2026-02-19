const validateNumber = require("./card-validator");
const isValidNumber = require("./card-validator");

test("returns true for a 16-digit number", () => {
  expect(validateNumber(1029384756820562)).toEqual(true);
});
test("should return false if the number is less than 16 digits", () => {
  expect(validateNumber(10293847568202)).toEqual(false);
});
test("should return false if the number is more than 16 digits long", () => {
  expect(validateNumber(1029384756820512348)).toEqual(false);
});

test("returns true when all characters are digits", () => {
  expect(validateNumber(1036294650361848)).toEqual(true);
});
test("should return false if one or more of the digits aren't numbers", () => {
  expect(validateNumber("103629465036184a")).toEqual(false);
});

test("returns true when digits are not all identical", () => {
  expect(validateNumber(3636363636363636)).toEqual(true);
});
test("returns true when one digit differs", () => {
  expect(validateNumber(3333333333333336)).toEqual(true);
});
test("returns false when all digits are identical", () => {
  expect(validateNumber(2222222222222222)).toEqual(false);
});

test("should return true if the final digit is even", () => {
  expect(validateNumber(1528056378293456)).toEqual(true);
});
test("should return false if the final digit isn't even", () => {
  expect(validateNumber(1528056378293457)).toEqual(false);
});

test("should return true if the sum of all digits is greater than 16", () => {
  expect(validateNumber(1903647295628592)).toEqual(true);
});
test("should return false if the sum of all the digits isn't greater than 16", () => {
  expect(validateNumber(1000100000000002)).toEqual(false);
});
