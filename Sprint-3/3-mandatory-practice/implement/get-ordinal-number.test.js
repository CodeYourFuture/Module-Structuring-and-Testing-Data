const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("adds 'st' to numbers like 1, 21, 101 (except 11)", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(101)).toEqual("101st");
  expect(getOrdinalNumber(11)).toEqual("11th");
});

test("adds 'nd' to numbers like 2, 22, 102 (except 12)", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(102)).toEqual("102nd");
  expect(getOrdinalNumber(12)).toEqual("12th");
});

test("adds 'rd' to numbers like 3, 23, 103 (except 13)", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(103)).toEqual("103rd");
  expect(getOrdinalNumber(13)).toEqual("13th");
});

test("adds 'th' to other numbers", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(24)).toEqual("24th");
  expect(getOrdinalNumber(100)).toEqual("100th");
});
