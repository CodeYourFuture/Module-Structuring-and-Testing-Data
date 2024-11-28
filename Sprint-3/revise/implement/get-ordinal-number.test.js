// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

const { get } = require('http');
const getOrdinalNumber = require('./get-ordinal-number');

test('description', () => {
  expect(getOrdinalNumber(1)).toBe('1st');
  expect(getOrdinalNumber(21)).toBe('21st');
  expect(getOrdinalNumber(0)).toBe('0th')
});
test('The ordinal number for 12 is 12th', () => {
  expect(getOrdinalNumber(12)).toBe('12th');
});