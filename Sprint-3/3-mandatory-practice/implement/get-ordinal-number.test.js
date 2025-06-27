const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return ordinal numbers what end with the "1st"

test("should return '1st' for ordinal numbers ending in 1 like (1, 21, 31..)", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(21)).toEqual("21st");
    expect(getOrdinalNumber(31)).toEqual("31st")
    });

// Case 2: Identify the ordinal number for 2
// When the number is 2,
// The function should then return ordinal numbers what end with the "2nd".

test("Should return `2nd` for ordinal numbers ending in 2 like (2, 22, 32...)", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    expect(getOrdinalNumber(22)).toEqual("22nd");
    expect(getOrdinalNumber(32)).toEqual("32nd");
});

// Case 3: Identify the ordinal number for 3
// When the number is 3,
// The Function should return the ordinal numbers what finish with the "3rd"

test("Should return `3rd` for ordinal numbers ending in 3 like (3, 23, 33...", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
    expect(getOrdinalNumber(23)).toEqual("23rd");
    expect(getOrdinalNumber(33)).toEqual("33rd");
});

// Case 4: identify the special ordinal numbers for 11, 12, 13 
// When the number is 11, 12, 13,
// The function should return "11th, 12th, 13th"

test ("should return `11th, 12th, 13th` for special ordinal numbers ending on these", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
    expect(getOrdinalNumber(12)).toEqual("12th");
    expect(getOrdinalNumber(13)).toEqual("13th");
    expect(getOrdinalNumber(111)).toEqual("111th");
    expect(getOrdinalNumber(112)).toEqual("112th");
    expect(getOrdinalNumber(113)).toEqual("113th");
});