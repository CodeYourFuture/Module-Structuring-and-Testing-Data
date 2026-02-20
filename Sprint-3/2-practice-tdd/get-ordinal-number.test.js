const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber.

// Continue testing and implementing getOrdinalNumber for additional cases.
// Write your tests using Jest — remember to run your tests often for continual feedback.

// To ensure thorough testing, we need broad scenarios that cover all possible cases.
// Listing individual values, however, can quickly lead to an unmanageable number of test cases.
// Instead of writing tests for individual numbers, consider grouping all possible input values
// into meaningful categories. Then, select representative samples from each category to test.
// This approach improves coverage and makes our tests easier to maintain.

// Case 1: Numbers ending with 1 (but not 11)
// When the number ends with 1, except those ending with 11,
// Then the function should return a string by appending "st" to the number.
test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

// Case 2: Numbers ending with 2 (except 12)
// Given the number ends with 2 but not 12,
// When getOrdinalNumber is called,
// Then it should append "nd".
test("should append 'nd' for numbers ending with 2 except those ending with 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(102)).toEqual("102nd");
});

// Case 3: Numbers ending with 3 (except 13)
// Given the number ends with 3 but not 13,
// When getOrdinalNumber is called,
// Then it should append "rd".
test("should append 'rd' for numbers ending with 3 except those ending with 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(103)).toEqual("103rd");
});

// Case 4: Numbers ending with 4-9, 0, or 11-19
// Given the number ends with 4-9, 0, ot 11-19,
// When getOrdinalNumber is called,
// Then it should append "th".
test("should append 'th' for numbers ending with 4-9, 0, or 11-19", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(5)).toEqual("5th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(20)).toEqual("20th");
});

// Case 5: Large numbers
// Give a very large positive number,
// When getOrdinalNumber is called,
// Then it should still append the correct suffix based on the last digits.
test("should handle large numbers correctly", () => {
  expect(getOrdinalNumber(101)).toEqual("101st");
  expect(getOrdinalNumber(112)).toEqual("112th");
  expect(getOrdinalNumber(1000)).toEqual("1000th");
});
