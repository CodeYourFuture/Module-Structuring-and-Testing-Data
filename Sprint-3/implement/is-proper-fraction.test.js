// tests/isProperFraction.test.js

const  isProperFraction = require('./is-proper-fraction');

 // Path to the function

describe('isProperFraction', () => {
  test('should return true for a proper fraction', () => {
    expect(isProperFraction(2, 3)).toBe(true);
  });

  test('should return false for an improper fraction', () => {
    expect(isProperFraction(5, 2)).toBe(false);
  });

  test('should throw error for zero denominator', () => {
    expect(() => isProperFraction(3, 0)).toThrow('Denominator cannot be zero');
  });

  test('should return true for negative proper fraction', () => {
    expect(isProperFraction(-4, 7)).toBe(true);
  });

  test('should return false for equal numerator and denominator', () => {
    expect(isProperFraction(3, 3)).toBe(false);
  });
});
