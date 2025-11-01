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

test("should return '2nd' for 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

test("should return '4th' for 4", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
});

test("should return '11th' for 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
});

test("should return '12th' for 12", () => {
  expect(getOrdinalNumber(12)).toEqual("12th");
});

test("should return '13th' for 13", () => {
  expect(getOrdinalNumber(13)).toEqual("13th");
});

test("should return '21st' for 21", () => {
  expect(getOrdinalNumber(21)).toEqual("21st");
});

test("should return '22nd' for 22", () => {
  expect(getOrdinalNumber(22)).toEqual("22nd");
});

test("should return '23rd' for 23", () => {
  expect(getOrdinalNumber(23)).toEqual("23rd");
});

test("should return '101st' for 101", () => {
  expect(getOrdinalNumber(101)).toEqual("101st");
});

test("should return '111th' for 111", () => {
  expect(getOrdinalNumber(111)).toEqual("111th");
});

test("should return '0th' for 0", () => {
  expect(getOrdinalNumber(0)).toEqual("0th");
});

// Extra test to check for correct number of arguments
test("should throw an error if no arguments are provided", () => {
  expect(() => getOrdinalNumber()).toThrow("Function requires exactly one argument");
});

test("should throw an error if more than one argument is provided", () => {
  expect(() => getOrdinalNumber(1, 2)).toThrow("Function requires exactly one argument");
});

//Invalid input tests
test("should throw an error if the argument is not a number", () => {
  expect(() => getOrdinalNumber("a")).toThrow("Input must be a number");
});

test("should throw an error if the argument is a negative number", () => {
  expect(() => getOrdinalNumber(-1)).toThrow("Input must be a non-negative integer");
});

test("should throw an error if the argument is a decimal", () => {
  expect(() => getOrdinalNumber(1.5)).toThrow("Input must be a non-negative integer");
});

test("should throw an error if the argument is NaN", () => {
  expect(() => getOrdinalNumber(NaN)).toThrow("Input must be a finite number");
});

test("should throw an error if the argument is Infinity", () => {
  expect(() => getOrdinalNumber(Infinity)).toThrow("Input must be a finite number");
});

test("should throw an error if the argument is -Infinity", () => {
  expect(() => getOrdinalNumber(-Infinity)).toThrow("Input must be a finite number");
});
test("should throw an error if the argument is an object", () => {
  expect(() => getOrdinalNumber({})).toThrow("Input must be a number");
});
test("should throw an error if the argument is an array", () => {
  expect(() => getOrdinalNumber([])).toThrow("Input must be a number");
});
test("should throw an error if the argument is null", () => {
  expect(() => getOrdinalNumber(null)).toThrow("Input must be a number");
});
test("should throw an error if the argument is undefined", () => {
  expect(() => getOrdinalNumber(undefined)).toThrow("Input must be a number");
}); 