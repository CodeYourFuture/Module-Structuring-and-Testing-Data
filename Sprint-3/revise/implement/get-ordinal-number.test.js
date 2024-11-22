// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
const getOrdinalNumber = require("./get-ordinal-number");

describe("getOrdinalNumber", () => {
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

  test("returns 11th for 11", () => {
    expect(getOrdinalNumber(11)).toBe("11th");
  });

  test("returns 12th for 12", () => {
    expect(getOrdinalNumber(12)).toBe("12th");
  });

  test("returns 13th for 13", () => {
    expect(getOrdinalNumber(13)).toBe("13th");
  });

  test("returns 21st for 21", () => {
    expect(getOrdinalNumber(21)).toBe("21st");
  });

  test("returns 22nd for 22", () => {
    expect(getOrdinalNumber(22)).toBe("22nd");
  });

  test("returns 23rd for 23", () => {
    expect(getOrdinalNumber(23)).toBe("23rd");
  });

  test("returns 111th for 111", () => {
    expect(getOrdinalNumber(111)).toBe("111th");
  });

  test("returns 112th for 112", () => {
    expect(getOrdinalNumber(112)).toBe("112th");
  });

  test("returns 121st for 121", () => {
    expect(getOrdinalNumber(121)).toBe("121st");
  });

  test("returns 125th for 125", () => {
    expect(getOrdinalNumber(125)).toBe("125th");
  });
});
