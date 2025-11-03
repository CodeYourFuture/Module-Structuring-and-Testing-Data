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
test("should return 'th' for 11, 12, 13", () => {
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(12)).toBe("12th");
  expect(getOrdinalNumber(13)).toBe("13th");
});
test("should return correct ordinal for numbers > 20", () => {
  expect(getOrdinalNumber(21)).toBe("21st");
  expect(getOrdinalNumber(22)).toBe("22nd");
  expect(getOrdinalNumber(23)).toBe("23rd");    
});