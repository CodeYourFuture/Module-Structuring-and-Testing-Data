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

test("Should return '22nd' for 22", () => {
  expect(getOrdinalNumber(22)).toEqual("22nd");
});

test("Should return '11th' for 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
});
test("Should return '90th' for 90", () => {
  expect(getOrdinalNumber(90)).toEqual("90th");
});
test("Should return '113th' for 113", () => {
  expect(getOrdinalNumber(113)).toEqual("113th");
});
test("Should return '115th' for 115", () => {
  expect(getOrdinalNumber(115)).toEqual("115th");
});
test("Should return '101st' for 101", () => {
  expect(getOrdinalNumber(101)).toEqual("101st");
});
