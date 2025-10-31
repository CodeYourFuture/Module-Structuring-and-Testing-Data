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
// Case 2: Identify the ordinal number for 22
// When the number is 22,
// Then the function should return 22nd"
test("should return '22nd' for 22", () => {
  expect(getOrdinalNumber(22)).toEqual("22nd");
});
// Case 3: Identify the ordinal number for 73
// When the number is 73,
// Then the function should return 73rd"

test("should return '73rd' for 73", () => {
  expect(getOrdinalNumber(73)).toEqual("73rd");
});

// Case 4: Identify the ordinal number for 99
// When the number is 99,
// Then the function should return 99th"

test("should return '99th' for 99", () => {
  expect(getOrdinalNumber(99)).toEqual("99th");
});

// Case 5: Identify the ordinal number for number ends with 11,12, or 13
//  When the number is 111,
// Then the function should return 111th"
//  When the number is 212,
// Then the function should return 212th"
//  When the number is 413,
// Then the function should return 413th"

test("should return '111th' for 111", () => {
  expect(getOrdinalNumber(111)).toEqual("111th");
});
test("should return '212th' for 212", () => {
  expect(getOrdinalNumber(212)).toEqual("212th");
});
test("should return '413th' for 413", () => {
  expect(getOrdinalNumber(413)).toEqual("413th");
});

//case 6
// when is the number is 0 or negative number
test("should throw Invalid Input for negative numbers", () => {
  expect(getOrdinalNumber(-5)).toEqual("Invalid Input");
});
test("should throw Invalid Input for 0", () => {
  expect(getOrdinalNumber(0)).toEqual("Invalid Input");
});
