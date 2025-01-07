const isValidTriangle = require('./is-valid-triangle');

test('Check a valid triangle', () => {
  expect(isValidTriangle(2, 3, 4)).toBe(true);
  expect(isValidTriangle(0, 3, 4)).toBe(false);
  expect(isValidTriangle(-1, 3, 4)).toBe(false);
  expect(isValidTriangle(3, 3, 3)).toBe(true);
});