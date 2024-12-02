// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
const getOrdinalNumber = require("./get-ordinal-number");

describe("getOrdinalNumber", () => {
  test("should return '1st' for the input 1, representing the first ordinal number", () => {
    expect(getOrdinalNumber(1)).toBe("1st");
  });

  test("should return '2nd' for the input 2, representing the second ordinal number", () => {
    expect(getOrdinalNumber(2)).toBe("2nd");
  });

  test("should return '3rd' for the input 3, representing the third ordinal number", () => {
    expect(getOrdinalNumber(3)).toBe("3rd");
  });

  test("should return '4th' for the input 4, representing the fourth ordinal number", () => {
    expect(getOrdinalNumber(4)).toBe("4th");
  });

  test("should return '11th' for the input 11, handling edge case for 11th", () => {
    expect(getOrdinalNumber(11)).toBe("11th");
  });

  test("should return '12th' for the input 12, handling edge case for 12th", () => {
    expect(getOrdinalNumber(12)).toBe("12th");
  });

  test("should return '13th' for the input 13, handling edge case for 13th", () => {
    expect(getOrdinalNumber(13)).toBe("13th");
  });

  test("should return '21st' for the input 21, continuing the pattern for 21st", () => {
    expect(getOrdinalNumber(21)).toBe("21st");
  });

  test("should return '22nd' for the input 22, continuing the pattern for 22nd", () => {
    expect(getOrdinalNumber(22)).toBe("22nd");
  });

  test("should return '23rd' for the input 23, continuing the pattern for 23rd", () => {
    expect(getOrdinalNumber(23)).toBe("23rd");
  });

  test("should return '111th' for the input 111, handling edge case for 111th", () => {
    expect(getOrdinalNumber(111)).toBe("111th");
  });

  test("should return '112th' for the input 112, handling edge case for 112th", () => {
    expect(getOrdinalNumber(112)).toBe("112th");
  });

  test("should return '121st' for the input 121, continuing the pattern for 121st", () => {
    expect(getOrdinalNumber(121)).toBe("121st");
  });

  test("should return '125th' for the input 125, continuing the pattern for 125th", () => {
    expect(getOrdinalNumber(125)).toBe("125th");
  });
});
