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

// Case 2: Numbers ending with 2 (but not 12)
// When the number ends with 2, except those ending with 12,
// Then the function should return a string by appending "nd" to the number.
test("should append 'nd' for numbers ending with 2, except those ending with 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(202)).toEqual("202nd");
  expect(getOrdinalNumber(1032)).toEqual("1032nd");
});

// Case 3: Numbers ending with 3 (but not 13)
// When the number ends with 3, except those ending with 13,
// Then the function should return a string by appending "rd" to the number.
test("should append 'rd' for numbers ending with 3, except those ending with 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(2333)).toEqual("2333rd");
  expect(getOrdinalNumber(13453)).toEqual("13453rd");
});

// Case 4: numbers ending with 11, 12, or 13
// When the number ends with 11, 12, or 13,
// Then the function should return a string by appending "th" to the number.

test("should append 'th' for numbers ending with 11, 12, or 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
});

// Case 5: numbers that ends with 0, 4, 5, 6, 7, 8, or 9
// When the number ends with 0, 4, 5, 6, 7, 8, or 9
// Then the function should return a string by appending "th" to the number.

test("should append 'th' for numbers ending with 0, 4, 5, 6, 7, 8, or 9", () => {
  expect(getOrdinalNumber(0)).toEqual("0th");
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(11)).toEqual("115th");
  expect(getOrdinalNumber(12)).toEqual("126th");
  expect(getOrdinalNumber(13)).toEqual("137th");
  expect(getOrdinalNumber(100)).toEqual("100th");
  expect(getOrdinalNumber(1012)).toEqual("1012th");
  expect(getOrdinalNumber(1038)).toEqual("1038th");
});
