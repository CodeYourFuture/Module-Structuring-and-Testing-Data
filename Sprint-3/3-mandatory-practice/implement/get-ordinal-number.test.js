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

test("should return '10th' for 10", () => {
  expect(getOrdinalNumber(10)).toEqual("10th");
});
test("should return '42nd' for 42", () => {
  expect(getOrdinalNumber(42)).toBe("42nd");
});

test("should return '63rd' for 63", () => {
  expect(getOrdinalNumber(63)).toBe("63rd");
});

test("should return '13th' for 13 (special case)", () => {
  expect(getOrdinalNumber(13)).toBe("13th");
});

test("should throw an error for non-positive numbers", () => {
  expect(() => getOrdinalNumber(-11)).toThrow(
    "Input must be a positive number"
  );
});
