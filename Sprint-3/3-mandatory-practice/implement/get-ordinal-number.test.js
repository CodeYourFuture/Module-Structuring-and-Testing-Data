const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

// Numbers ending in 1 (but not 11)
test("should return 'st' for numbers ending in 1, except 11", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(21)).toEqual("21st");
    expect(getOrdinalNumber(141)).toEqual("141st");
  });
  
  
  test("should return 'nd' for numbers ending in 2, except 12", () => {
    expect(getOrdinalNumber(2)).toEqual("2nd");
    expect(getOrdinalNumber(22)).toEqual("22nd");
    expect(getOrdinalNumber(82)).toEqual("82nd");
  });
  

  test("should return 'rd' for numbers ending in 3, except 13", () => {
    expect(getOrdinalNumber(3)).toEqual("3rd");
    expect(getOrdinalNumber(23)).toEqual("23rd");
    expect(getOrdinalNumber(203)).toEqual("203rd");
  });
  
  
  test("should return 'th' for 11, 12, 13", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
    expect(getOrdinalNumber(12)).toEqual("12th");
    expect(getOrdinalNumber(13)).toEqual("13th");
  });
  

  test("should return 'th' for all other numbers", () => {
    expect(getOrdinalNumber(5)).toEqual("5th");
    expect(getOrdinalNumber(7)).toEqual("7th");
    expect(getOrdinalNumber(10)).toEqual("10th");
    expect(getOrdinalNumber(100)).toEqual("100th");
  });
