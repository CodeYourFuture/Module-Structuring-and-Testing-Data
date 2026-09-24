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
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(132)).toEqual("132nd");
});

// Case 3: Numbers ending with 3 (but not 13)
// When the number ends with 3, except those ending with 13,
// Then the function should return a string by appending "rd" to the number.
test("should append 'rd' for numbers ending with 3, except those ending with 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(133)).toEqual("133rd");
});

// Case 4: Numbers ending with 11, 12, or 13
// When the number ends with 11, 12, or 13,
// Then the function should return a string by appending "th" to the number.
test("should append 'th' for numbers ending with 11, 12, or 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
});

// Case 5: All other numbers
// When the number does not fall into any of the above categories,
// Then the function should return a string by appending "th" to the number.
test("should append 'th' for all other numbers", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(5)).toEqual("5th");
  expect(getOrdinalNumber(6)).toEqual("6th");
  expect(getOrdinalNumber(7)).toEqual("7th");
  expect(getOrdinalNumber(8)).toEqual("8th");
  expect(getOrdinalNumber(9)).toEqual("9th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(127)).toEqual("127th");
});

// Case 6: Negative numbers
// When the number is negative,
// Then the function should throw an error, as negative numbers are not valid inputs.
test("should throw an error for negative numbers", () => {
  expect(() => getOrdinalNumber(-1)).toThrow("Invalid input: number must be a non-negative integer");
  expect(() => getOrdinalNumber(-22)).toThrow("Invalid input: number must be a non-negative integer");
});

// Case 7: Non-integer numbers
// When the number is not an integer (e.g., a float),
// Then the function should throw an error, as only non-negative integers are valid inputs.
test("should throw an error for non-integer numbers", () => {
  expect(() => getOrdinalNumber(1.5)).toThrow("Invalid input: number must be a non-negative integer");
  expect(() => getOrdinalNumber(2.7)).toThrow("Invalid input: number must be a non-negative integer");
});

// Case 8: Non-number inputs
// When the input is not a number (e.g., a string, object, or array),
// Then the function should throw an error, as only non-negative integers are valid inputs.
test("should throw an error for non-number inputs", () => {
  expect(() => getOrdinalNumber("1")).toThrow("Invalid input: number must be a non-negative integer");
  expect(() => getOrdinalNumber("abcd")).toThrow("Invalid input: number must be a non-negative integer");
});