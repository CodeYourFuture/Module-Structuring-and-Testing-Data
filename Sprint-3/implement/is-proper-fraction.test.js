const isProperFraction = require('./is-proper-fraction');

test('return true for a proper function', () => {
  expect(isProperFraction(2, 3)).toBe(true);
  });

test('returns an error for an improper function', () => {
  expect(() => isProperFraction(3, 0)).toThrow('Denominator cannot be zero');
});

test('return false for a improper function', () => {
expect(isProperFraction(5, 2)).toBe(false);
});

test('return true for a proper function', () => {
 expect(isProperFraction(-4, 7)).toBe(true);
});

test('return false for a improper function', () => {
 expect(isProperFraction(3, 3)).toBe(false);
});

