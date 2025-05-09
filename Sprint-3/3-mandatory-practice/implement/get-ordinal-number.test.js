const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(42352)).toEqual("42352nd");
});

test("should return '10th' for 10", () => {
  expect(getOrdinalNumber(112)).toEqual("112th");
});

test("should return '8th' for 8", () => {
  expect(getOrdinalNumber(1221)).toEqual("1221st");
});

test("should return '13rd' for 13", () => {
  expect(getOrdinalNumber(13)).toEqual("13th");
});
