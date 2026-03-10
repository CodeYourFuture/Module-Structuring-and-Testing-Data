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
test("appends 'st' for numbers ending in 1 except 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

test("appends 'nd' for numbers ending in 2 except 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(92)).toEqual("92nd");
  expect(getOrdinalNumber(132)).toEqual("132nd");
  expect(getOrdinalNumber(1142)).toEqual("1142nd");
})

test("appends 'rd' for numbers ending in 3 except 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(63)).toEqual("63rd");
  expect(getOrdinalNumber(533)).toEqual("533rd");
})

test("appends 'th' when number does not end in 1, 2, or 3", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(14)).toEqual("14th");
  expect(getOrdinalNumber(20)).toEqual("20th");
  expect(getOrdinalNumber(99)).toEqual("99th");
  expect(getOrdinalNumber(100)).toEqual("100th");
  expect(getOrdinalNumber(670)).toEqual("670th");
})

test("appends 'th' for numbers ending in 11, 12, or 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
})