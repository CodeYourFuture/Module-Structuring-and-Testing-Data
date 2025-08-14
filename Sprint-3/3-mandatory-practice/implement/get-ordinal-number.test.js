// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

const getOrdinalNumber = require("./getOrdinalNumber");

test("returns 1st for 1", () => {
  expect(getOrdinalNumber(1)).toBe("1st");
});

  test("returns 2nd for 2", () => {
  expect(getOrdinalNumber(2)).toBe("2nd");
});

test("returns 3rd for 3", () => {
  expect(getOrdinalNumber(3)).toBe("3rd");
});

test("returns 4th for 4", () => {
  expect(getOrdinalNumber(4)).toBe("4th");
});

test("Handle the special case for teens (11, 12, 13)", () => {
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(12)).toBe("12th");
  expect(getOrdinalNumber(13)).toBe("13th");
});

test("Get the last digit to determine suffix", () => {
  expect(getOrdinalNumber(21)).toBe("21st");
  expect(getOrdinalNumber(22)).toBe("22nd");
  expect(getOrdinalNumber(23)).toBe("23rd");
  expect(getOrdinalNumber(101)).toBe("101st");
});
