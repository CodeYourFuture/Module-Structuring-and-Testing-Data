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
  expect(getOrdinalNumber(112)).toEqual("112th"); // special case
});

test("appends 'rd' to numbers ending in 3, except those ending in 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(113)).toEqual("113th"); // special case
});

test("appends 'th' to numbers ending in 11, 12, or 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
});
