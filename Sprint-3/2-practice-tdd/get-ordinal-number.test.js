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
// Then the function should return a string by appending "nd".
test("should append 'nd' for numbers ending with 2, except those ending with 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(142)).toEqual("142nd");
});

// Case 3: Numbers ending with 3 (but not 13)
// When the number ends with 3, except those ending with 13,
// Then the function should return a string by appending 'rd'.
test("should append 'rd' for numbers ending with 3, except those ending with 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(33)).toEqual("33rd");
  expect(getOrdinalNumber(153)).toEqual("153rd");
});

// Case 4: Special cases 11, 12, 13
// When the number ends with 11, 12, or 13,
// Then the function should always append "th".
test("should append 'th' for special cases 11, 12, 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(212)).toEqual("212th");
});

// Case 5: All other numbers that is not end in 1,2 or 3.
// When the number does not end with 1, 2, or 3,
// Then the function should append "th".
test("should append 'th' for all other numbers", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(100)).toEqual("100th");
  expect(getOrdinalNumber(204)).toEqual("204th");
});

// Case 6: Float numbers should be giving a error since the function do nut accept float number input
// When the input is a float,
// Then the function should round it and return the correct ordinal.
test("should return error for invalid input", () => {
  expect(() =>getOrdinalNumber(1.2)).toThrow("Invalid input");   
  expect(() =>getOrdinalNumber(1.8)).toThrow("Invalid input");   
  expect(() =>getOrdinalNumber(2.5)).toThrow("Invalid input");   
  expect(() =>getOrdinalNumber(10.51)).toThrow("Invalid input"); 
  expect(() =>getOrdinalNumber(12.49)).toThrow("Invalid input"); 
  expect(() =>getOrdinalNumber(12.5)).toThrow("Invalid input"); 
});

// Case 7: Invalid inputs should throw an error
// When the input is not a number,
// Then the function should throw an error.
test("should throw an error for invalid inputs", () => {
  expect(() => getOrdinalNumber("10")).toThrow("Invalid input");
  expect(() => getOrdinalNumber(null)).toThrow("Invalid input");
  expect(() => getOrdinalNumber(undefined)).toThrow("Invalid input");
  expect(() => getOrdinalNumber(NaN)).toThrow("Invalid input");
});
