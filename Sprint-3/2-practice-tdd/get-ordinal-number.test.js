const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

describe("getOrdinalNumber (category-based tests)", () => {
  test("uses 'th' for 11, 12, 13 (teen exceptions)", () => {
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(12)).toBe("12th");
    expect(getOrdinalNumber(13)).toBe("13th");
  });
  test("adds 'st' for numbers ending in 1 (except 11)", () => {
    expect(getOrdinalNumber(1)).toBe("1st");
    expect(getOrdinalNumber(21)).toBe("21st");
  });
  test("adds 'nd' for numbers ending in 2 (except 12)", () => {
    expect(getOrdinalNumber(2)).toBe("2nd");
    expect(getOrdinalNumber(22)).toBe("22nd");
  });
  test("adds 'rd' for numbers ending in 3 (except 13)", () => {
    expect(getOrdinalNumber(3)).toBe("3rd");
    expect(getOrdinalNumber(23)).toBe("23rd");
  });
  test("uses 'th' for other endings (0, 4-9)", () => {
    expect(getOrdinalNumber(4)).toBe("4th");
    expect(getOrdinalNumber(10)).toBe("10th");
    expect(getOrdinalNumber(19)).toBe("19th");
  });

});