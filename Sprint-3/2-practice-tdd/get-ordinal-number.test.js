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

test("should append 'nd' for numbers ending with 2, except those ending with 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(132)).toEqual("132nd");
});
test("should append 'rd' for numbers ending with 3, except those ending with 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(133)).toEqual("133rd");
});
test("should append 'th' for numbers ending with 0, 4-9, 11, 12, 13", () => {
  // 0
  expect(getOrdinalNumber(0)).toEqual("0th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(100)).toEqual("100th");
  // 4
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(24)).toEqual("24th");
  expect(getOrdinalNumber(134)).toEqual("134th");

  // 5
  expect(getOrdinalNumber(5)).toEqual("5th");
  expect(getOrdinalNumber(25)).toEqual("25th");
  expect(getOrdinalNumber(135)).toEqual("135th");

  // 6
  expect(getOrdinalNumber(6)).toEqual("6th");
  expect(getOrdinalNumber(26)).toEqual("26th");
  expect(getOrdinalNumber(136)).toEqual("136th");

  // 7
  expect(getOrdinalNumber(7)).toEqual("7th");
  expect(getOrdinalNumber(27)).toEqual("27th");
  expect(getOrdinalNumber(137)).toEqual("137th");

  // 8
  expect(getOrdinalNumber(8)).toEqual("8th");
  expect(getOrdinalNumber(28)).toEqual("28th");
  expect(getOrdinalNumber(138)).toEqual("138th");

  // 9
  expect(getOrdinalNumber(9)).toEqual("9th");
  expect(getOrdinalNumber(29)).toEqual("29th");
  expect(getOrdinalNumber(139)).toEqual("139th");
});

// edge cases
test("should throw an error when given a wrong input type", () => {
  expect(getOrdinalNumber("string")).toThrow(Error);
});
