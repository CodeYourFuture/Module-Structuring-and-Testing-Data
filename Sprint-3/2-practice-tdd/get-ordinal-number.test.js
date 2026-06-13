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

/// Case 2: Numbers ending with 2 (but not 12)
test("should append 'nd' for numbers ending with 2, except those ending with 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(102)).toEqual("102nd");
});

// Case 3: Numbers ending with 3 (but not 13)
test("should append 'rd' for numbers ending with 3, except those ending with 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(103)).toEqual("103rd");
});

// Case 4: Numbers ending with 11, 12, or 13 should always use 'th'
test("should append 'th' for numbers ending with 11, 12, or 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(212)).toEqual("212th");
  expect(getOrdinalNumber(313)).toEqual("313th");
});

// Case 5: All other numbers should use 'th'
test("should append 'th' for numbers that do not end in 1, 2, or 3", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(20)).toEqual("20th");
  expect(getOrdinalNumber(99)).toEqual("99th");
});

// Case 6: Zero should return '0'
test("should return '0' when the input is zero", () => {
  expect(getOrdinalNumber(0)).toEqual("0");
});
