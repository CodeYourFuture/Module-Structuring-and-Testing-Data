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

// Case 2: Numbers ending with 11
test("should append 'th' for numbers ending with 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(211)).toEqual("211th");
});

// Case 3: Numbers ending with 3
test("should append 'rd' for numbers ending with 3 excluding 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(103)).toEqual("103rd");
});

// Case 4: Numbers ending with 2
test("should append 'nd' for numbers ending with 2 excluding 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(42)).toEqual("42nd");
  expect(getOrdinalNumber(422)).toEqual("422nd");
});

// Case 5: Large numbers
test("should work with larger numbers", () => {
  expect(getOrdinalNumber(1001)).toEqual("1001st");
  expect(getOrdinalNumber(1002)).toEqual("1002nd");
  expect(getOrdinalNumber(1003)).toEqual("1003rd");
  expect(getOrdinalNumber(1004)).toEqual("1004th");
});

// Case 6: Numbers ending with 11 and above
test("should append 'th' for multiple digit numbers where the second to last digit is 1,", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(1111)).toEqual("1111th");
  expect(getOrdinalNumber(3213)).toEqual("3213th");
  expect(getOrdinalNumber(14)).toEqual("14th");
  expect(getOrdinalNumber(514)).toEqual("514th");
});
