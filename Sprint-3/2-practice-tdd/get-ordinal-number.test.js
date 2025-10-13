const getOrdinalNumber = require('./get-ordinal-number');

// In this week's prep, we started implementing getOrdinalNumber
// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"
test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

// Case 2: Identify the ordinal number for 2
// When the number is 2,
// Then the function should return "2nd"
test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

// Case 3: Identify the ordinal number for 3
// When the number is 3,
// Then the function should return "3rd"
test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

// Case 4: Identify the ordinal number for numbers ending with 1 (except 11)
// When the number ends with 1 but is not 11,
// Then the function should return "[number]st"
test("should return correct ordinal for numbers ending with 1 (except 11)", () => {
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(31)).toEqual("31st");
  expect(getOrdinalNumber(41)).toEqual("41st");
});

// Case 5: Identify the ordinal number for numbers ending with 2 (except 12)
// When the number ends with 2 but is not 12,
// Then the function should return "[number]nd"
test("should return correct ordinal for numbers ending with 2 (except 12)", () => {
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(32)).toEqual("32nd");
  expect(getOrdinalNumber(42)).toEqual("42nd");
});

// Case 6: Identify the ordinal number for numbers ending with 3 (except 13)
// When the number ends with 3 but is not 13,
// Then the function should return "[number]rd"
test("should return correct ordinal for numbers ending with 3 (except 13)", () => {
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(33)).toEqual("33rd");
  expect(getOrdinalNumber(43)).toEqual("43rd");
});

// Case 7: Identify the ordinal number for numbers ending with 11, 12, 13
// When the number is 11, 12, or 13,
// Then the function should return "[number]th"
test("should return 'th' for numbers 11, 12, 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
});

// Case 8: Identify the ordinal number for other numbers
// When the number doesn't end with 1, 2, or 3 (or is 11, 12, 13),
// Then the function should return "[number]th"
test("should return 'th' for other numbers", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(5)).toEqual("5th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(15)).toEqual("15th");
  expect(getOrdinalNumber(20)).toEqual("20th");
  expect(getOrdinalNumber(100)).toEqual("100th");
});