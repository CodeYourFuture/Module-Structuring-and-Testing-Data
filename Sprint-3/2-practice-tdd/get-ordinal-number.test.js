/**
 * getOrdinalNumber - Full Test Suite
 */

const getOrdinalNumber = require("./get-ordinal-number");

// Case 1: Numbers ending with 1 (but not 11)
test("should append 'st' for numbers ending with 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(101)).toEqual("101st");
});

// Case 2: Numbers ending with 2 (but not 12)
test("should append 'nd' for numbers ending with 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(42)).toEqual("42nd");
});

// Case 3: Numbers ending with 3 (but not 13)
test("should append 'rd' for numbers ending with 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(33)).toEqual("33rd");
});

// Case 4: The 'Teens' exceptions (11, 12, 13)
test("should append 'th' for numbers ending with 11, 12, and 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(212)).toEqual("212th");
  expect(getOrdinalNumber(313)).toEqual("313th");
});

// Case 5: General 'th' cases
test("should append 'th' for numbers ending in 0, 4, 5, 6, 7, 8, and 9", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(10)).toEqual("10th");
});
