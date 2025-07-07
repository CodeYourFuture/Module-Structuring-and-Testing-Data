const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for numbers ending in 1 except for 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(31)).toEqual("31st");
});

// Case 2: Identify the ordinal number for 2
// When the number is 2,
// Then the function should return "2nd"
test("should return '2nd' for numbers ending in 2 except 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(32)).toEqual("32nd");
  expect(getOrdinalNumber(122)).toEqual("122nd");
});

// Case 3: Identify the ordinal number for 3
// When the number is 3,
// Then the function should return "3rd"
test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
});

// Case 4: Identify the ordinal number for numbers between 4 and 20
// When the number is between 4 and 20 (inclusive),
// Then the function should return the number with "th" appended
test("should return '4th' for 4", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(5)).toEqual("5th");
  expect(getOrdinalNumber(20)).toEqual("20th");
});

// Case 5: Identify the ordinal number for numbers greater than 20
// When the number is greater than 20,
// Then the function should return the number with "st", "nd", "rd", or "th" appended based on the last digit
