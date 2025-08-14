const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
  const num = 1;
  const ordinal = "1st";
  expect(getOrdinalNumber(num)).toEqual(ordinal);
});

test("should return '1000th' for 1000", () => {
  const num = 1000;
  const ordinal = "1000th";
  expect(getOrdinalNumber(num)).toEqual(ordinal);
});

test("should return '102nd' for 102", () => {
  const num = 102;
  const ordinal = "102nd";
  expect(getOrdinalNumber(num)).toEqual(ordinal);
});

test("should return '3003rd' for 3003", () => {
  const num = 3003;
  const ordinal = "3003rd";
  expect(getOrdinalNumber(num)).toEqual(ordinal);
});

test("should return '21st' for 21", () => {
  const num = 21;
  const ordinal = "21st";
  expect(getOrdinalNumber(num)).toEqual(ordinal);
});
