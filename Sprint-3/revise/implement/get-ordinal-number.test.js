// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

const getOrdinalNumber = require("./getOrdinalNumber");


test("Checks for Ordinal Number", () => {
    expect(getOrdinalNumber(1)).toBe("1st");
    expect(getOrdinalNumber(2)).toBe("2nd");
    expect(getOrdinalNumber(3)).toBe("3rd");
    expect(getOrdinalNumber(4)).toBe("4th");
    expect(getOrdinalNumber(21)).toBe("21st");
    expect(getOrdinalNumber(100)).toBe("100th");
    expect(getOrdinalNumber(102)).toBe("102nd");
    expect(getOrdinalNumber(113)).toBe("113th");
    expect(getOrdinalNumber(-5)).toBe("Invalid input");
});
