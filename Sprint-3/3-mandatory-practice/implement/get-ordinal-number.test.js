const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    });

test("Should return '22nd' for 22", () => {
    expect(getOrdinalNumber(22)).toEqual("22nd");
    });

test("Should return '11th' for 11", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
    });

test("Should return '100th' for 100", () => {
    expect(getOrdinalNumber(100)).toEqual("100th");
    });

test("Should return '113th' for 113", () => {
    expect(getOrdinalNumber(113)).toEqual("113th");
    });

test("Should return '13th' for 13", () => {
    expect(getOrdinalNumber(13)).toEqual("13th");
    });

test("Should return '208th' for 208", () => {
    expect(getOrdinalNumber(208)).toEqual("208th");
    });

test("Should return '121st' for 121", () => {
    expect(getOrdinalNumber(121)).toEqual("121st");
    });

test("Should return '2nd' for 2", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    });
