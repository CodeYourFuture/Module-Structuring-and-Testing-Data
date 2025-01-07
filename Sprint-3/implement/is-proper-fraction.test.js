const isProperFraction = require('./is-proper-fraction');

test('Proper Fraction', () => {
  expect(isProperFraction(2, 3)).toBe(true);
});

test('Improper Fraction', () => {
  expect(isProperFraction(5, 2)).toBe(false);
});

test('Negative Fraction', () => {
  expect(isProperFraction(-4, 7)).toBe(true);
});

test('Numerator = Denominator', () => {
  expect(isProperFraction(3, 3)).toBe(false);
});

test('Zero Denominator', () => {
  expect(() => {
    isProperFraction(3, 0);
  }).toThrowError(new Error("Denominator cannot be zero"));

});

