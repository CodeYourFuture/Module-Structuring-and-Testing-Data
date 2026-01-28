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
  expect(getOrdinalNumber(31)).toEqual("131st");
});

test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});
test("should return '4th' for 4", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
});
test("should return '5th' for 5", () => {
  expect(getOrdinalNumber(5)).toEqual("5th");
});
test("should return '11th' for 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
});
test("should return '21st' for 21", () => {
  expect(getOrdinalNumber(21)).toEqual("21st");
});
test("should return '32nd' for 32", () => {
  expect(getOrdinalNumber(32)).toEqual("32nd");
});
test("should return '53rd' for 53", () => {
  expect(getOrdinalNumber(53)).toEqual("53rd");
});
