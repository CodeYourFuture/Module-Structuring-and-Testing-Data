const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

// Case 1: 1 → Standard ordinals

test("should return correct ordinals for 1, 2, 3, 4, 21, 22, 23, 24", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(24)).toEqual("24th");
});

// Case 2: Exceptions 11, 12, 13
test("should handle exceptions 11, 12, 13 correctly", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(111)).toEqual("111th"); 
});

// Case 3: Large numbers
test("should handle larger numbers correctly", () => {
  expect(getOrdinalNumber(101)).toEqual("101st");
  expect(getOrdinalNumber(112)).toEqual("112th"); 
  expect(getOrdinalNumber(123)).toEqual("123rd");
});

// Case 4: Invalid cases / inputs 
test("should throw error for zero, negative or non-integer inputs", () => {
  expect(() => getOrdinalNumber(0)).toThrow("Only positive integers are allowed");
  expect(() => getOrdinalNumber(-5)).toThrow("Only positive integers are allowed");
  expect(() => getOrdinalNumber(2.5)).toThrow("Only positive integers are allowed");
});

// Added possible and invalid cases and tested using npx jest  