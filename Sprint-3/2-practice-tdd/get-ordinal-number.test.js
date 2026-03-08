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

//case 2: Numbers ending with 11
test("should return 'th' for numbers ending with 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(211)).toEqual("211th");
  expect(getOrdinalNumber(1011)).toEqual("1011th");
});

//case:3 Numbers ending with 3 but not 13
test("Should return 'rd' for numbers ending with 3", () => {
  expect(getOrdinalNumber(73)).toEqual("73rd");
  expect(getOrdinalNumber(93)).toEqual("93rd");
  expect(getOrdinalNumber(43)).toEqual("43rd");
  expect(getOrdinalNumber(2003)).toEqual("2003rd");
});

//case:4 expect Numbers ending with 13 to return th
test(" should return 'th' for numbers ending with 13", () => {
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(413)).toEqual("413th");
  expect(getOrdinalNumber(613)).toEqual("613th");
});
//case 4: expect number ending with 2 to return nd
test(" should return 'nd' for numbers ending with 2", () => {
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(42)).toEqual("42nd");
  expect(getOrdinalNumber(102)).toEqual("102nd");
});

// case 5: expect number not included in the above case to return th
test("should return 'th' for numbers ending with 4, 5,6,7,8,9,0", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(5)).toEqual("5th");
  expect(getOrdinalNumber(6)).toEqual("6th");
  expect(getOrdinalNumber(7)).toEqual("7th");
  expect(getOrdinalNumber(8)).toEqual("8th");
  expect(getOrdinalNumber(9)).toEqual("9th");
  expect(getOrdinalNumber(10)).toEqual("10th");
});
