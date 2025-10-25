
const getOrdinalNumber = require("./get-ordinal-number");

// To ensure thorough testing, we need broad scenario coverage. Listing individual values, however, can quickly lead to an unmanageable number of test cases.
// Instead of writing tests for individual numbers, we group all possible input values into meaningful categories and select representative samples from each category to test. This approach improves coverage and makes our tests easier to maintain.

// Numbers ending in 1 (except those ending in 11): should append 'st'
test("append 'st' to numbers ending in 1, except those ending in 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(101)).toEqual("101st");
});

// Numbers ending in 2 (except those ending in 12): should append 'nd'
test("append 'nd' to numbers ending in 2, except those ending in 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(132)).toEqual("132nd");
});

// Numbers ending in 3 (except those ending in 13): should append 'rd'
test("append 'rd' to numbers ending in 3, except those ending in 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(103)).toEqual("103rd");
});

// Numbers ending in 11, 12, 13: should append 'th'
test("append 'th' to numbers ending in 11, 12, 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(112)).toEqual("112th");
  expect(getOrdinalNumber(113)).toEqual("113th");
});

// All other numbers: should append 'th'
test("append 'th' to all other numbers", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(14)).toEqual("14th");
  expect(getOrdinalNumber(0)).toEqual("0th");
});

