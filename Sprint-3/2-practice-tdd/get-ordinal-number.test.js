const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

test("should return '1st' for 1", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

test('should return "2nd" for 2', () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

test("should return '3rd' for 3", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

test('should return "13th" for 13', () => {
  expect(getOrdinalNumber(13)).toEqual("13th");
});

test("should return '41st' for 41", () => {
  expect(getOrdinalNumber(41)).toEqual("41st");
});

test('should return "212th" for 212', () => {
  expect(getOrdinalNumber(212)).toEqual("212th");
});

test("should return '221st' for 221", () => {
  expect(getOrdinalNumber(221)).toEqual("221st");
});
