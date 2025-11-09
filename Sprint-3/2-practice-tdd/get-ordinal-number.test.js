const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

describe("getOrdinalNumber", () => {
  test("append 'st' to numbers ending in 1 expect 11", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(101)).toEqual("101st");
  });
  test("should return '11th' for 11", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
  });

  test("append 'rd' to numbers ending in 3", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
    expect(getOrdinalNumber(23)).toEqual("23rd");
    expect(getOrdinalNumber(33)).toEqual("33rd");
    expect(getOrdinalNumber(103)).toEqual("103rd");
  });
  test("should return '4th' for 4", () => {
    expect(getOrdinalNumber(4)).toEqual("4th");
  });

  test("should return '12th' for 12", () => {
    expect(getOrdinalNumber(12)).toEqual("12th");
  });
  test("should return '13th' for 13", () => {
    expect(getOrdinalNumber(13)).toEqual("13th");
  });

  test("append 'nd' to numbers ending in 2, except those ending in 12", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    expect(getOrdinalNumber(22)).toEqual("22nd");
    expect(getOrdinalNumber(132)).toEqual("132nd");
  });
});
