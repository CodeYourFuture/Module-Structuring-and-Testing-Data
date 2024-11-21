// Import the function (you might need to adjust this depending on your file structure)
const isProperFraction = require('./is-proper-fraction'); // Adjust path if necessary

describe('isProperFraction', () => {
  test('should return true for a proper fraction (2/3)', () => {
    expect(isProperFraction(2, 3)).toBe(true);
  });

  test('should return false for an improper fraction (5/2)', () => {
    expect(isProperFraction(5, 2)).toBe(false);
  });

  test('should throw an error for a zero denominator (3/0)', () => {
    expect(() => isProperFraction(3, 0)).toThrow('Denominator cannot be zero');
  });

  test('should return true for a negative proper fraction (-4/7)', () => {
    expect(isProperFraction(-4, 7)).toBe(true);
  });

  test('should return false for equal numerator and denominator (3/3)', () => {
    expect(isProperFraction(3, 3)).toBe(false);
  });

  test('should return false for a negative improper fraction (-5/2)', () => {
    expect(isProperFraction(-5, 2)).toBe(false);
  });

  test('should return true for a proper fraction with a negative numerator (-2/3)', () => {
    expect(isProperFraction(-2, 3)).toBe(true);
  });

  test('should return true for a proper fraction with a negative denominator (2/-3)', () => {
    expect(isProperFraction(2, -3)).toBe(true);
  });
});
