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
  expect(getOrdinalNumber(121)).toEqual("121st");
});

test("appends 'nd' to numbers ending in 2, except those ending in 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
});

test("appends 'rd' to numbers ending in 3, except those ending in 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
});

test("appends 'th' to numbers ending in 11, 12, or 13 and all others not ending in 1, 2, or 3", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(112)).toEqual("112th");
  expect(getOrdinalNumber(113)).toEqual("113th");

  //general `th` cases

  expect(getOrdinalNumber(0)).toEqual("0th");
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(24)).toEqual("24th");
  expect(getOrdinalNumber(100)).toEqual("100th");
  expect(getOrdinalNumber(104)).toEqual("104th");
});

test("handles edge cases for higher numbers", () => {
  expect(getOrdinalNumber(1011)).toEqual("1011th");
  expect(getOrdinalNumber(1012)).toEqual("1012th");
  expect(getOrdinalNumber(1013)).toEqual("1013th");
  expect(getOrdinalNumber(1021)).toEqual("1021st");
  expect(getOrdinalNumber(1022)).toEqual("1022nd");
  expect(getOrdinalNumber(1023)).toEqual("1023rd");
});