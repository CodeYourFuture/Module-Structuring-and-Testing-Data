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
test("should append 'st' for numbers ending with 1, except those having figure 1 in tens digit", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});

test("should append 'nd' for numbers ending with 2, except those having figure 1 in tens digit", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(132)).toEqual("132nd");
});

test("should append 'rd' for numbers ending with 3, except those having figure 1 in tens digit", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(133)).toEqual("133rd");
});

test("should append 'th' for other numbers ending with 1,2 or 3, except those having figure 1 in tens digit", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(113)).toEqual("113th");
  expect(getOrdinalNumber(213)).toEqual("213th");
  expect(getOrdinalNumber(313)).toEqual("313th");
  expect(getOrdinalNumber(1113)).toEqual("1113th");
});

test("should append 'th' for other numbers ending other than 1,2 or 3", () => {
  expect(getOrdinalNumber(5)).toEqual("5th");
  expect(getOrdinalNumber(8)).toEqual("8th");
  expect(getOrdinalNumber(9)).toEqual("9th"); 
  expect(getOrdinalNumber(10)).toEqual("10th"); 
  expect(getOrdinalNumber(57)).toEqual("57th");
  expect(getOrdinalNumber(79)).toEqual("79th");
  expect(getOrdinalNumber(94)).toEqual("94th");
  expect(getOrdinalNumber(266)).toEqual("266th");
  expect(getOrdinalNumber(465)).toEqual("465th");
  expect(getOrdinalNumber(1070)).toEqual("1070th");
});
