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
  expect(getOrdinalNumber(1021)).toEqual("1021st");
});
//case 2; Numbers ending with 4,5,6,7,8,9 and 0
test("should append 'th' for numbers ending with 4,5,6,7,8,9,0", () => {
  expect(getOrdinalNumber(104)).toEqual("104th");
  expect(getOrdinalNumber(2000)).toEqual("2000th");
  expect(getOrdinalNumber(167)).toEqual("167th");
  expect(getOrdinalNumber(19)).toEqual("19th");
});
//case 3; Numbers ending with 11,12,13
test("should append 'th' for numbers ending with 11,12,13", () => {
  expect(getOrdinalNumber(1013313)).toEqual("1013313th");
  expect(getOrdinalNumber(2012)).toEqual("2012th");
  expect(getOrdinalNumber(16711)).toEqual("16711th");
});
//case 4;Numbers ending with 2
test("should append 'nd' for numbers ending with 2", () => {
  expect(getOrdinalNumber(102)).toEqual("102nd");
  expect(getOrdinalNumber(2022)).toEqual("2022nd");
  expect(getOrdinalNumber(16732)).toEqual("16732nd");
});
//case 4;Numbers ending with 3
test("should append 'nd' for numbers ending with 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(2023)).toEqual("2023rd");
  expect(getOrdinalNumber(16733)).toEqual("16733rd");
});