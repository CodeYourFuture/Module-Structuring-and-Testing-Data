const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"
test("append 'st' to numbers ending in 1, except those ending in 11", () => {
    expect( getOrdinalNumber(1) ).toEqual("1st");
    expect( getOrdinalNumber(21) ).toEqual("21st");
    expect( getOrdinalNumber(221) ).toEqual("221st");
    expect( getOrdinalNumber(11) ).toEqual("11th");
});

test("append 'nd' to numbers ending in 2, except those ending in 12 ", () => {
    expect( getOrdinalNumber(2) ).toEqual("2nd");
    expect( getOrdinalNumber(22) ).toEqual("22nd");
    expect( getOrdinalNumber(132) ).toEqual("132nd");
    expect( getOrdinalNumber(12) ).toEqual("12th");
});

test("append 'rd' to numbers ending in 3, except those ending in 13", () => {
    expect( getOrdinalNumber(3) ).toEqual("3rd");
    expect( getOrdinalNumber(33) ).toEqual("33rd");
    expect( getOrdinalNumber(133) ).toEqual("133rd");
    expect( getOrdinalNumber(13) ).toEqual("13th");
});

test("appends 'th' to numbers ending in 4 - 9, and 0 ", () => {
    expect(getOrdinalNumber(4)).toBe("4th");
    expect(getOrdinalNumber(15)).toBe("15th");
    expect(getOrdinalNumber(36)).toBe("36th");
    expect(getOrdinalNumber(57)).toBe("57th");
    expect(getOrdinalNumber(78)).toBe("78th");
    expect(getOrdinalNumber(10)).toBe("10th");
});

