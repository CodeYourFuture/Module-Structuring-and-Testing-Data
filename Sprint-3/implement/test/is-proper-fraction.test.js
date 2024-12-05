const isProperFraction = require('../is-proper-fraction');

test('Proper Fraction check', () => {
  expect(isProperFraction(2, 3)).toBe(true);
});

test('Improper Fraction check', () => {
  expect(isProperFraction(5, 2)).toBe(false);
});

test('Negative Fraction check', () => {
  expect(isProperFraction(-4, 7)).toBe(true);
});

test('Equal Numerator and Denominator check', () => {
  expect(isProperFraction(3, 3)).toBe(false);
});

test('Zero Denominator check', () => {
  expect(() => {
    isProperFraction(3, 0);
  }).toThrowError(new Error("Denominator cannot be zero"));

});