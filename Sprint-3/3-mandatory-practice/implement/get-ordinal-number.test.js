const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(101)).toEqual("101st");
  expect(getOrdinalNumber(99991)).toEqual("99991st");
});

// Case 2
test("should return '11th' for 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(211)).toEqual("211th");
});

// Case 3
test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(113)).toEqual("113th");
});
//Case 4
test("should return '13th' for 13", () => {
  expect(getOrdinalNumber(13)).toEqual("13th");
});
