const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(21)).toEqual("21st");
    expect(getOrdinalNumber(91)).toEqual("91st");
    expect(getOrdinalNumber(101)).toEqual("101st");
    expect(getOrdinalNumber(141)).toEqual("141st");

    });
test("should return '2nd' for 2", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    expect(getOrdinalNumber(22)).toEqual("22nd");
    expect(getOrdinalNumber(92)).toEqual("92nd");
    expect(getOrdinalNumber(142)).toEqual("142nd");
    });
test("should return '3rd' for 3", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
    expect(getOrdinalNumber(23)).toEqual("23rd");
    expect(getOrdinalNumber(93)).toEqual("93rd");
    expect(getOrdinalNumber(143)).toEqual("143rd"); 
    });
test("should return '4th' for 4", () => {
    expect(getOrdinalNumber(4)).toEqual("4th");
    expect(getOrdinalNumber(24)).toEqual("24th");
    expect(getOrdinalNumber(94)).toEqual("94th");
    expect(getOrdinalNumber(144)).toEqual("144th");
    });
test("should return '11th' for 11", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
    expect(getOrdinalNumber(111)).toEqual("111th");
    });