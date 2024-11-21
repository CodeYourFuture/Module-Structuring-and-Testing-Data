// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
// getOrdinalNumber.test.js (your Jest test file)

const getOrdinalNumber = require('./get-ordinal-number');

test('returns "1st" for 1', () => {
  expect(getOrdinalNumber(1)).toBe('1st');
});

test('returns "2nd" for 2', () => {
  expect(getOrdinalNumber(2)).toBe('2nd');
});

test('returns "3rd" for 3', () => {
  expect(getOrdinalNumber(3)).toBe('3rd');
});

test('returns "4th" for 4', () => {
  expect(getOrdinalNumber(4)).toBe('4th');
});

test('returns "11th" for 11', () => {
  expect(getOrdinalNumber(11)).toBe('11th');
});
