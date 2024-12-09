// In this week's prep, we started implementing getOrdinalNumber

//Continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

const getOrdinalNumber = require('./get-ordinal-number');

test("converts 1 to an ordinal number", function () {
  expect(getOrdinalNumber(1)).toEqual("1st");
});

test("converts 2 to an ordinal number", function () {
  expect(getOrdinalNumber(2)).toEqual("2nd");
});

test("converts 3 to an ordinal number", function () {
  expect(getOrdinalNumber(3)).toEqual("3rd");
});

test('converts 100 to an ordinal number', () => {
  expect(getOrdinalNumber(100)).toBe('100th');
});

test('converts 12 to an ordinal number', () => {
  expect(getOrdinalNumber(12)).toBe('12th');
});

test('converts 32 to an ordinal number', () => {
  expect(getOrdinalNumber(32)).toBe('32nd');
});

test('converts 21 to an ordinal number', () => {
  expect(getOrdinalNumber(21)).toBe('21st');
});

test('converts 43 to an ordinal number', () => {
  expect(getOrdinalNumber(43)).toBe('43rd');
});
