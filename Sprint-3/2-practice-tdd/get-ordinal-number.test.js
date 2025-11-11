const getOrdinalNumber = require("./get-ordinal-number");

describe("getOrdinalNumber", () => {
  test("returns 'st', 'nd', 'rd', 'th' for standard numbers", () => {
    expect(getOrdinalNumber(1)).toBe("1st");
    expect(getOrdinalNumber(2)).toBe("2nd");
    expect(getOrdinalNumber(3)).toBe("3rd");
    expect(getOrdinalNumber(4)).toBe("4th");
    expect(getOrdinalNumber(10)).toBe("10th");
  });

  test("handles numbers ending with 11, 12, 13 as special cases", () => {
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(12)).toBe("12th");
    expect(getOrdinalNumber(13)).toBe("13th");
    expect(getOrdinalNumber(111)).toBe("111th");
    expect(getOrdinalNumber(112)).toBe("112th");
    expect(getOrdinalNumber(113)).toBe("113th");
  });

  test("handles numbers ending with 1, 2, or 3 correctly beyond 100", () => {
    expect(getOrdinalNumber(101)).toBe("101st");
    expect(getOrdinalNumber(102)).toBe("102nd");
    expect(getOrdinalNumber(103)).toBe("103rd");
    expect(getOrdinalNumber(104)).toBe("104th");
    expect(getOrdinalNumber(132)).toBe("132nd");
  });

  test("returns '0th' for zero", () => {
    expect(getOrdinalNumber(0)).toBe("0th");
  });

  test("works with large numbers", () => {
    expect(getOrdinalNumber(1001)).toBe("1001st");
    expect(getOrdinalNumber(1012)).toBe("1012th");
  });

  test("handles negative numbers", () => {
    expect(getOrdinalNumber(-1)).toBe("-1st");
    expect(getOrdinalNumber(-11)).toBe("-11th");
  });
});
