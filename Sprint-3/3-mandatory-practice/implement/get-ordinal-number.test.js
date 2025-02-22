const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return ordinal number for any number", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(11)).toEqual("11th");
    expect(getOrdinalNumber(2)).toEqual("2nd");
    expect(getOrdinalNumber(21)).toEqual("21st");
    expect(getOrdinalNumber(12)).toEqual("12th");
    expect(getOrdinalNumber(13)).toEqual("13th");
    expect(getOrdinalNumber(33)).toEqual("33rd");
    expect(getOrdinalNumber(16)).toEqual("16th");
    expect(getOrdinalNumber(78)).toEqual("78th");
    });
