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
  expect(getOrdinalNumber(31562)).toEqual("31562nd");
  expect(getOrdinalNumber(2322)).toEqual("2322nd");
});

// Case 3: Numbers ending with 3 (but not 13)
// When the number ends with 3, except those ending with 13,
// Then the function should return a string by appending "rd" to the number.
test("should append 'rd' for numbers ending with 3, except those ending with 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(3243)).toEqual("3243rd");
  expect(getOrdinalNumber(5462133)).toEqual("5462133rd");
});

// Case 4: Numbers ending with 11, 12 or 13
// When the number ends with 11, 12 or 13
// Then the function should return a string by appending "th" to the number.
test("should append 'th' for numbers with 11, 12 or 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(2111)).toEqual("2111th");
  expect(getOrdinalNumber(2113)).toEqual("2113th");
  expect(getOrdinalNumber(524312)).toEqual("524312th");
});

// Case 4: Numbers not ending in 1, 2 and 3
// When the number ends with 0, 4, 5, 6, 7, 8, 9
// Then the function should return a string by appending "th" to the number.
test("should append 'th' for numbers not ending in 1, 2 and 3", () => {
  expect(getOrdinalNumber(19)).toEqual("19th");
  expect(getOrdinalNumber(2118)).toEqual("2118th");
  expect(getOrdinalNumber(2110)).toEqual("2110th");
  expect(getOrdinalNumber(524334)).toEqual("524334th");
});
