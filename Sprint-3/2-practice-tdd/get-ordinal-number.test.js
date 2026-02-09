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

// Case 4: Identify the ordinal number for 11
// When the number is 11,
// Then the function should return "11th"

test("should return '11th' for 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
});

// Case 5: Identify the ordinal number for 12
// When the number is 12,
// Then the function should return "12th"

test("should return '12th' for 12", () => {
  expect(getOrdinalNumber(12)).toEqual("12th");
});

// Case 6: Identify the ordinal number for 13
// When the number is 13,
// Then the function should return "13th"

test("should return '13th' for 13", () => {
  expect(getOrdinalNumber(13)).toEqual("13th");
});

// Case 7: Identify the ordinal number for 5
// When the number is 5,
// Then the function should return "5th"
test("should return '5th' for 5", () => {
  expect(getOrdinalNumber(5)).toEqual("5th");
});

// Case 8: Identify the ordinal number for 1035
// When the number is 1035,
// Then the function should return "1035th"
test("should return '1035th' for 1035", () => {
  expect(getOrdinalNumber(1035)).toEqual("1035th");
});

// Case 9: Identify the ordinal number for 111
// When the number is 111,
// Then the function should return "111th"
test("should return '111th' for 111", () => {
  expect(getOrdinalNumber(111)).toEqual("111th");
});

// Case 10: Identify the ordinal number for 321
// When the number is 321,
// Then the function should return "321st"
test("should return '321st' for 321", () => {
  expect(getOrdinalNumber(321)).toEqual("321st");
});

// Case 11: Identify the ordinal number for 0
// When the number is 0,
// Then the function should throw error
test("should return error for 0", () => {
  expect(() => getOrdinalNumber(0)).toThrow(
    "Only integer numbers,bigger than 0"
  );
});

// Case 12: Identify the ordinal number for -1
// When the number is -1,
// Then the function should throw error
test("should return error for -1", () => {
  expect(() => getOrdinalNumber(-1)).toThrow(
    "Only integer numbers,bigger than 0"
  );
});