const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should append 'st' to numbers with 1 at the end except for those ending with 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(101)).toEqual("101st");
  expect(getOrdinalNumber(151)).toEqual("151st");
  expect(getOrdinalNumber(2061)).toEqual("2061st");
});

test("should append 'nd' to numbers with 2 at the end except for those ending with 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(342)).toEqual("342nd");
  expect(getOrdinalNumber(592)).toEqual("592nd");
  expect(getOrdinalNumber(1972)).toEqual("1972nd");
});

test("should append 'rd' to numbers with 3 at the end except for those ending with 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(33)).toEqual("33rd");
  expect(getOrdinalNumber(353)).toEqual("353rd");
  expect(getOrdinalNumber(93)).toEqual("93rd");
  expect(getOrdinalNumber(783)).toEqual("783rd");
});

test("should append 'th' to all other numbers which do not end in 1,2,3,11,12 or 13", () => {
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(212)).toEqual("212th");
  expect(getOrdinalNumber(113)).toEqual("113th");
  expect(getOrdinalNumber(17)).toEqual("17th");
});
