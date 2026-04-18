
const getOrdinalNumber = require("./get-ordinal-number");

describe("getOrdinalNumber", () => {
  // Case 1: Numbers ending with 1 (but not 11)
  test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
    expect(getOrdinalNumber(1)).toBe("1st");
    expect(getOrdinalNumber(21)).toBe("21st");
    expect(getOrdinalNumber(101)).toBe("101st");
  });

  // Case 2: Numbers ending with 2 (but not 12)
  test("should append 'nd' for numbers ending with 2, except those ending with 12", () => {
    expect(getOrdinalNumber(2)).toBe("2nd");
    expect(getOrdinalNumber(42)).toBe("42nd");
    expect(getOrdinalNumber(122)).toBe("122nd");
  });

  // Case 3: Numbers ending with 3 (but not 13)
  test("should append 'rd' for numbers ending with 3, except those ending with 13", () => {
    expect(getOrdinalNumber(3)).toBe("3rd");
    expect(getOrdinalNumber(53)).toBe("53rd");
    expect(getOrdinalNumber(1003)).toBe("1003rd");
  });

  // Case 4: The Teen Exceptions (11, 12, 13)
  test("should append 'th' for numbers ending in 11, 12, or 13", () => {
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(12)).toBe("12th");
    expect(getOrdinalNumber(13)).toBe("13th");
    expect(getOrdinalNumber(111)).toBe("111th"); // Edge case: triple digits
  });

  // Case 5: All other numbers (Ending in 0, 4, 5, 6, 7, 8, 9)
  test("should append 'th' for all other numbers", () => {
    expect(getOrdinalNumber(0)).toBe("0th");
    expect(getOrdinalNumber(4)).toBe("4th");
    expect(getOrdinalNumber(9)).toBe("9th");
    expect(getOrdinalNumber(10)).toBe("10th");
    expect(getOrdinalNumber(20)).toBe("20th");
  });
});
