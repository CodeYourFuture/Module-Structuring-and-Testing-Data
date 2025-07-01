const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

const getOrdinalNumber = require("./getOrdinalNumber");

test("should return 1st", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

test("should return 2nd", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

test("should return 3rd", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

test("should return 8th", () => {
  expect(getOrdinalNumber(8)).toEqual("8th");
});

test("should return 19th", () => {
  expect(getOrdinalNumber(19)).toEqual("19th");
});

test("should return 81st", () => {
  expect(getOrdinalNumber(81)).toEqual("81st");
});

test("should return 125th", () => {
  expect(getOrdinalNumber(125)).toEqual("125th");
});
