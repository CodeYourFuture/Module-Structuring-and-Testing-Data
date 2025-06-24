const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "num+st"
test("works for any number ending in 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(41)).toEqual("41st");
  expect(getOrdinalNumber(51)).toEqual("51st");
  expect(getOrdinalNumber(91)).toEqual("91st");
});

// Case 2: Identify the ordinal number for 2
// When the number is 2,
// Then the function should return "num+nd"
test("works for any number ending in 2", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(52)).toEqual("52nd");
  expect(getOrdinalNumber(72)).toEqual("72nd");
});

// Case 3: Identify the ordinal number for 3
// When the number is 3,
// Then the function should return "3rd"
test("works for any number ending in 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(33)).toEqual("33rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(63)).toEqual("63rd");
});

// Case 4: Identify the ordinal number for 11, 12, 13
// When the number is num = 11, 12, 13
// Then the function should return "11st", "12nd", "13rd",
test("should return 'num th' for num", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
});

// Case 5: Identify the ordinal number for any number not covered above, up to 100
// When the number is num = 4, 5,.... , 100
// Then the function should return "4th", "5th", "6th", "7th", "8th", "9th", "10th", "55th", ...
test("should return 'num th' for num", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(5)).toEqual("5th");
  expect(getOrdinalNumber(6)).toEqual("6th");
  expect(getOrdinalNumber(7)).toEqual("7th");
  expect(getOrdinalNumber(8)).toEqual("8th");
  expect(getOrdinalNumber(9)).toEqual("9th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(55)).toEqual("55th");
  expect(getOrdinalNumber(46)).toEqual("46th");
  expect(getOrdinalNumber(77)).toEqual("77th");
});
