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

// Case 2: Identify the ordinal number for 2
// When the number is 2,
// Then the function should return "2nd"
test('should return "2nd" for input 2', () => {
  expect(getOrdinalNumber(2)).toBe("2nd");
});

// Case 3: Identify the ordinal number for 3
// When the number is 3,
// Then the function should return "3rd"
test('should return "3rd" for input 3', () => {
  expect(getOrdinalNumber(3)).toBe("3rd");
});

// Case 4: Handle special case for 11
// When the number is 11,
// Then the function should return "11th"
test('should return "11th" for input 11', () => {
  expect(getOrdinalNumber(11)).toBe("11th");
});

// Case 5: Handle special case for 12
// When the number is 12,
// Then the function should return "12th"
test('should return "12th" for input 12', () => {
  expect(getOrdinalNumber(12)).toBe("12th");
});

// Case 6: Handle special case for 13
// When the number is 13,
// Then the function should return "13th"
test('should return "13th" for input 13', () => {
  expect(getOrdinalNumber(13)).toBe("13th");
});

// Case 7: Identify the ordinal number for 21
// When the number is 21,
// Then the function should return "21st"
test('should return "21st" for input 21', () => {
  expect(getOrdinalNumber(21)).toBe("21st");
});

// Case 8: Identify the ordinal number for 102
// When the number is 102,
// Then the function should return "102nd"
test('should return "102nd" for input 102', () => {
  expect(getOrdinalNumber(102)).toBe("102nd");
});

// Case 9: Identify the ordinal number for 113
// When the number is 113,
// Then the function should return "113th"
test('should return "113th" for input 113', () => {
  expect(getOrdinalNumber(113)).toBe("113th");
});

// Case 10: Identify the ordinal number for 100
// When the number is 100,
// Then the function should return "100th"
test('should return "100th" for input 100', () => {
  expect(getOrdinalNumber(100)).toBe("100th");
});
