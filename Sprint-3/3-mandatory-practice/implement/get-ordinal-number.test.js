const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("append 'st' to numbers ending in 1, except those ending in 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(101)).toEqual("101st");
  expect(getOrdinalNumber(111)).toEqual("111th"); // special case
});

test("append 'nd' to numbers ending in 2, except those ending in 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(102)).toEqual("102nd");
  expect(getOrdinalNumber(112)).toEqual("112th"); // special case
});

test("append 'rd' to numbers ending in 3, except those ending in 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(103)).toEqual("103rd");
  expect(getOrdinalNumber(113)).toEqual("113th"); // special case
});

test("append 'th' to numbers ending in 4-9 or 0", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(14)).toEqual("14th");
  expect(getOrdinalNumber(19)).toEqual("19th");
  expect(getOrdinalNumber(20)).toEqual("20th");
  expect(getOrdinalNumber(100)).toEqual("100th");
});

test("append 'th' to numbers ending in 11, 12, 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(1112)).toEqual("1112th");
  expect(getOrdinalNumber(1013)).toEqual("1013th");
});

test("throw error for non-integer inputs", () => {
  expect(() => getOrdinalNumber("5")).toThrow("Input must be an integer.");
  expect(() => getOrdinalNumber(5.5)).toThrow("Input must be an integer.");
  expect(() => getOrdinalNumber(null)).toThrow("Input must be an integer.");
});