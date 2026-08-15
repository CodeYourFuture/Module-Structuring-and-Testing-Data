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

// Case 2: Numbers ending with 2 should return with "nd" to the number
// Unless number 12 should return with the "th" to the number
test("should append 'nd' for numbers ending in 2", () => {
  expect(getOrdinalNumber(22)).toEqual("22nd");
});

// Case 3: Numbers ending with 3 should return with a "rd" to the number
// Unless number is 13 then it should return with the "th" to the number
test("should append 'rd' for numbers ending with 3", () => {
  expect(getOrdinalNumber(23)).toEqual("23rd");
});



// Case 4: all other numbers should return with a "th" to the number

test("should append 'th' for all other numbers", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(194)).toEqual("194th");
});

// Case 5: Negative numbers follow same rules.
test("should follow rules as previous tests while still showing '-' value", () => {
  expect(getOrdinalNumber(-12)).toEqual("-12th");
  expect(getOrdinalNumber(-52)).toEqual("-52nd");
});