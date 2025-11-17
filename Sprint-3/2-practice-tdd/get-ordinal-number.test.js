const getOrdinalNumber = require("./get-ordinal-number");


module.exports = getOrdinalNumber;

// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"


describe("getOrdinalNumber()", () => {
  test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toBe("1st");
  });

  test("should return '2nd' for 2", () => {
    expect(getOrdinalNumber(2)).toBe("2nd");
  });

  test("should return '3rd' for 3", () => {
    expect(getOrdinalNumber(3)).toBe("3rd");
  });

  test("should return '4th' for 4", () => {
    expect(getOrdinalNumber(4)).toBe("4th");
  });

  test("should return '11th', '12th', '13th' for special cases", () => {
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(12)).toBe("12th");
    expect(getOrdinalNumber(13)).toBe("13th");
  });

  test("should return correct suffixes for 21, 22, 23", () => {
    expect(getOrdinalNumber(21)).toBe("21st");
    expect(getOrdinalNumber(22)).toBe("22nd");
    expect(getOrdinalNumber(23)).toBe("23rd");
  });

  test("should return '111th' for numbers ending with 11, 12, 13 even if larger", () => {
    expect(getOrdinalNumber(111)).toBe("111th");
    expect(getOrdinalNumber(112)).toBe("112th");
    expect(getOrdinalNumber(113)).toBe("113th");
  });
});
