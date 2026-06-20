const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber.

// Continue testing and implementing getOrdinalNumber for additional cases.
// Write your tests using Jest — remember to run your tests often for continual feedback.

// To ensure thorough testing, we need broad scenarios that cover all possible cases.
// Listing individual values, however, can quickly lead to an unmanageable number of test cases.
// Instead of writing tests for individual numbers, consider grouping all possible input values
// into meaningful categories. Then, select representative samples from each category to test.
// This approach improves coverage and makes our tests easier to maintain.

// Case 1: Numbers ending with 1 (but not 11)
// When the number ends with 1, except those ending with 11,
// Then the function should return a string by appending "st" to the number.
test("should append 'st' for numbers ending with 1, excluding 11", () => {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(21)).toBe("21st");
  expect(getOrdinalNumber(101)).toBe("101st");
  expect(getOrdinalNumber(131)).toBe("131st");
});

test("should append 'nd' for numbers ending with 2, excluding 12", () => {
  expect(getOrdinalNumber(2)).toBe("2nd");
  expect(getOrdinalNumber(22)).toBe("22nd");
  expect(getOrdinalNumber(132)).toBe("132nd");
});

test("should append 'rd' for numbers ending with 3, excluding 13", () => {
  expect(getOrdinalNumber(3)).toBe("3rd");
  expect(getOrdinalNumber(23)).toBe("23rd");
  expect(getOrdinalNumber(133)).toBe("133rd");
});

test("should append 'th' for numbers ending with 11, 12, or 13", () => {
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(12)).toBe("12th");
  expect(getOrdinalNumber(13)).toBe("13th");
  expect(getOrdinalNumber(111)).toBe("111th");
  expect(getOrdinalNumber(112)).toBe("112th");
  expect(getOrdinalNumber(113)).toBe("113th");
});

test("should append 'th' for numbers ending with 4-9 or 0", () => {
  expect(getOrdinalNumber(4)).toBe("4th");
  expect(getOrdinalNumber(5)).toBe("5th");
  expect(getOrdinalNumber(6)).toBe("6th");
  expect(getOrdinalNumber(7)).toBe("7th");
  expect(getOrdinalNumber(8)).toBe("8th");
  expect(getOrdinalNumber(9)).toBe("9th");
  expect(getOrdinalNumber(0)).toBe("0th");
});

test("non-integer and negative numbers should be handled correctly", () => {
  expect(getOrdinalNumber(1.5)).toBe("1.5th");
  expect(getOrdinalNumber(-2.3)).toBe("-2.3th");
  expect(getOrdinalNumber(-11)).toBe("-11th");
});

test("invalid input should throw an error", () => {
  expect(() => getOrdinalNumber("string")).toThrow("Input must be a number");
  expect(() => getOrdinalNumber(null)).toThrow("Input must be a number");
  expect(() => getOrdinalNumber(undefined)).toThrow("Input must be a number");
});

test("NaN input should throw an error", () => {
  expect(() => getOrdinalNumber(NaN)).toThrow("Input must be a number");
});

test("Infinity input should be handled correctly", () => {
  expect(getOrdinalNumber(Infinity)).toBe("Infinityth");
  expect(getOrdinalNumber(-Infinity)).toBe("-Infinityth");
});
