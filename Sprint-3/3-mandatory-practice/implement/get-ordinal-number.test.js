const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
});

test("should return '2nd' for 2", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
});

test("should return '3rd' for 3", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
});

test("should return number + 'th' for numbers ending in 0, 4, 5, 6, 7, 8, 9", () => {
    expect(getOrdinalNumber(4)).toEqual("4th");
    expect(getOrdinalNumber(5)).toEqual("5th");
    expect(getOrdinalNumber(6)).toEqual("6th");
    expect(getOrdinalNumber(7)).toEqual("7th");
    expect(getOrdinalNumber(8)).toEqual("8th");
    expect(getOrdinalNumber(9)).toEqual("9th");
    expect(getOrdinalNumber(10)).toEqual("10th");
    expect(getOrdinalNumber(20)).toEqual("20th");
});

test("should return number + 'th' for special teen cases (11-13)", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
    expect(getOrdinalNumber(12)).toEqual("12th");
    expect(getOrdinalNumber(13)).toEqual("13th");
});

test("should return correct suffix for larger numbers", () => {
    expect(getOrdinalNumber(21)).toEqual("21st");
    expect(getOrdinalNumber(32)).toEqual("32nd");
    expect(getOrdinalNumber(43)).toEqual("43rd");
    expect(getOrdinalNumber(101)).toEqual("101st");
    expect(getOrdinalNumber(111)).toEqual("111th");
    expect(getOrdinalNumber(112)).toEqual("112th");
    expect(getOrdinalNumber(113)).toEqual("113th");
    expect(getOrdinalNumber(121)).toEqual("121st");
});
