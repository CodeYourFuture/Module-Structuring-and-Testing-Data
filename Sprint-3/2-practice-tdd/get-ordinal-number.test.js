const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"


// Case 1: Identify the ordinal number for 1
test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

// Case 2: Identify the ordinal number for 2
test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

// Case 3: Identify the ordinal number for 3
test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

// Case 4: Identify the ordinal number for 4
test("should return '4th' for 4", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
});

// Case 5: Handle special cases 11, 12, 13
test("should return '11th', '12th', '13th' for special cases", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
});

// Case 6: Handle 21, 22, 23 correctly
test("should handle 21st, 22nd, 23rd correctly", () => {
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
});

// Case 7: Handle numbers ending with 0, 4–9
test("should return 'th' for numbers ending with 0, 4–9", () => {
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(14)).toEqual("14th");
  expect(getOrdinalNumber(19)).toEqual("19th");
});