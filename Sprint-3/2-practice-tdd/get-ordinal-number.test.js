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

/// Case 2: Identify the ordinal number for 2
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

// Case 4: Identify the ordinal number for 4
// When the number is 4,
// Then the function should return "4th"
test("should return '4th' for 4", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
});

// Case 5: Identify the ordinal number for 11
// When the number is 11,
// Then the function should return "11th"
test("should return '11th' for 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
});

// Case 6: Identify the ordinal number for 22
// When the number is 22,
// Then the function should return "22nd"
test("should return '22nd' for 22", () => {
  expect(getOrdinalNumber(22)).toEqual("22nd");
});

// Case 7: Identify the ordinal number for 33
// When the number is 33,
// Then the function should return "33rd"
test("should return '33rd' for 33", () => {
  expect(getOrdinalNumber(33)).toEqual("33rd");
});

// Case 8: Undefined input
// When the input is undefined,
// Then the function should return "Invalid input"
test("should handle undefined input gracefully", () => {
  expect(getOrdinalNumber(undefined)).toEqual("Invalid input");
});

// Case 9: Null input
// When the input is null,
// Then the function should return "Invalid input"
test("should handle null input gracefully", () => {
  expect(getOrdinalNumber(null)).toEqual("Invalid input");
});

// Case 10: Boolean input
// When the input is a boolean value,
// Then the function should return "Invalid input"
test("should handle boolean input gracefully", () => {
  expect(getOrdinalNumber(true)).toEqual("Invalid input");
});

// Case 11: Non-numeric string input
// When the input is a non-numeric string,
// Then the function should return "Invalid input"
test("should handle non-numeric string input gracefully", () => {
  expect(getOrdinalNumber("hello")).toEqual("Invalid input");
});

// Case 12: Negative number
// When the input is a negative number,
// Then the function should return the ordinal form with a negative sign
test("should return '-1st' for -1", () => {
  expect(getOrdinalNumber(-1)).toEqual("-1st");
});

// Case 13: Floating number
// When the input is a floating number,
// Then the function should return the ordinal with decimal intact
test("should handle decimal numbers", () => {
  expect(getOrdinalNumber(21.5)).toEqual("21.5th");
});