// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

const getOrdinalNumber = require('./get-ordinal-number');

test('description', () => {
  expect(getOrdinalNumber(1)).toBe('1st');
  expect(getOrdinalNumber(21)).toBe('21st');
  expect(getOrdinalNumber(0)).toBe('0th')
});
test('The ordinal number for 12 is 12th', () => {
  expect(getOrdinalNumber(12)).toBe('12th');
});