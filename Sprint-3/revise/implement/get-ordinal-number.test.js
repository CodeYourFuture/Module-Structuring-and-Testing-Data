// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

const getOrdinalNumber = require("./get-ordinal-number");

test("returns correct ordinal for numbers 1 to 3", () => {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(2)).toBe("2nd");
  expect(getOrdinalNumber(3)).toBe("3rd");
});

test("returns correct ordinal for numbers ending in 11, 12, 13", () => {
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(12)).toBe("12th");
  expect(getOrdinalNumber(13)).toBe("13th");
});

test("returns correct ordinal for numbers 21 to 23", () => {
  expect(getOrdinalNumber(21)).toBe("21st");
  expect(getOrdinalNumber(22)).toBe("22nd");
  expect(getOrdinalNumber(23)).toBe("23rd");
});

test("returns correct ordinal for numbers greater than 20", () => {
  expect(getOrdinalNumber(24)).toBe("24th");
  expect(getOrdinalNumber(100)).toBe("100th");
  expect(getOrdinalNumber(111)).toBe("111th");
  expect(getOrdinalNumber(112)).toBe("112th");
});

test("handles edge case with 0", () => {
  expect(getOrdinalNumber(0)).toBe("0th");
});
