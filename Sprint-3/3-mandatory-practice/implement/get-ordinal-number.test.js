const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '...st' for numbers ending in 1, but not in 11", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(21)).toEqual("21st");
    expect(getOrdinalNumber(531)).toEqual("531st");
});

test("should return '...nd' for numbers ending in 2, but not in 12", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    expect(getOrdinalNumber(42)).toEqual("42nd");
    expect(getOrdinalNumber(132)).toEqual("132nd");
});

test("should return '...rd' for numbers ending in 3, but not in 13", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
    expect(getOrdinalNumber(123)).toEqual("123rd");
    expect(getOrdinalNumber(73)).toEqual("73rd");
});

test("should return '...th' for numbers ending in 4, but not in 14", () => {
    expect(getOrdinalNumber(4)).toEqual("4th");
    expect(getOrdinalNumber(84)).toEqual("84th");
    expect(getOrdinalNumber(784)).toEqual("784th");
});

test("should return '...th' for numbers ending in 10", () => {
    expect(getOrdinalNumber(10)).toEqual("10th");
    expect(getOrdinalNumber(150)).toEqual("150th");
    expect(getOrdinalNumber(340)).toEqual("340th");
});

test("should return '...th' for numbers ending in 11, 12, 13", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
    expect(getOrdinalNumber(12)).toEqual("12th");
    expect(getOrdinalNumber(13)).toEqual("13th");
    expect(getOrdinalNumber(311)).toEqual("311th");
    expect(getOrdinalNumber(512)).toEqual("512th");
    expect(getOrdinalNumber(413)).toEqual("413th");
});
