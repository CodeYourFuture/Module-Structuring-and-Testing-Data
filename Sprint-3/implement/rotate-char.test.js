const { rotateCharacter } = require('./rotate-char'); // Import the function from rotate-char.js

describe('rotateCharacter', () => {
  test('should rotate lowercase letters correctly', () => {
    expect(rotateCharacter('a', 3)).toBe('d');
    expect(rotateCharacter('z', 1)).toBe('a');
  });

  test('should rotate uppercase letters correctly', () => {
    expect(rotateCharacter('A', 3)).toBe('D');
    expect(rotateCharacter('Z', 1)).toBe('A');
  });

  test('should leave non-letter characters unchanged', () => {
    expect(rotateCharacter('7', 5)).toBe('7');
    expect(rotateCharacter('@', 2)).toBe('@');
  });

  test('should handle negative shifts', () => {
    expect(rotateCharacter('d', -3)).toBe('a');
    expect(rotateCharacter('A', -1)).toBe('Z');
  });
});