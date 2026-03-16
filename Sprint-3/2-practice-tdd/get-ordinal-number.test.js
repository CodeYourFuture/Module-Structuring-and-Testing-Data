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

test("should append 'st' for numbers ending with 1, except 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

// Case 2: Numbers ending with 2
// When the number ends with 2,
// Then the function should return a string by appending "nd" to the number.

test("should append 'nd' for numbers ending with 2 except 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(32)).toEqual("32nd");
  expect(getOrdinalNumber(252)).toEqual("252nd");
});

// Case 3: Numbers ending with 3
// When the number ends with 3,
// Then the function should return a string by appending "rd" to the number.

test("should append 'rd' for numbers ending with 3 except 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(33)).toEqual("33rd");
  expect(getOrdinalNumber(133)).toEqual("133rd");
});

// Case 4: The remaining numbers
// For numbers ending in 0, 4, 5, 6, 7, 8, 9, 11, 12, 13
// the function should return a string by appending "th" to the number.

test("should append 'th' if number is ending in 0, 4, 5,6, 7, 8, 9, 10, 11, 12 or 13", () => {
  expect(getOrdinalNumber(20)).toEqual("20th");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(99)).toEqual("99th");
});
