const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return 'st' for ordinal numbers ending in 1 like (1, 21, 31..)", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(21)).toEqual("21st");
    expect(getOrdinalNumber(31)).toEqual("31st")
    });

// Case 2: Identify the ordinal number for 2
// When the number is 2,
// The function should then return "2nd".

test("Should return `nd` for ordinal numbers ending in 2 like (2, 22, 32)", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    expect(getOrdinalNumber(22)).toEqual("22nd");
    expect(getOrdinalNumber(32)).toEqual("32nd");
});

// Case 3: Identify the ordinal number for 3
// When the number is 3,
// The Function should the return "3rd"

test("Should return `3rd` for 3", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
    expect(getOrdinalNumber(23)).toEqual("23rd");
    expect(getOrdinalNumber(33)).toEqual("33rd");
});