const countChar = require('./count'); // Adjust the path as needed

describe('countChar', () => {
  test('counts multiple occurrences of a character', () => {
    expect(countChar("aaaaa", "a")).toBe(5);
  });

  test('returns 0 when the character is not present', () => {
    expect(countChar("hello world", "z")).toBe(0);
  });

  test('handles empty strings', () => {
    expect(countChar("", "a")).toBe(0);
  });

  test('is case-sensitive by default', () => {
    expect(countChar("Hello", "h")).toBe(0); // Lowercase 'h' doesn't match uppercase 'H'
  });

  test('works with special characters', () => {
    expect(countChar("hello! world!", "!")).toBe(2);
  });

  test('counts spaces as valid characters', () => {
    expect(countChar("a b c", " ")).toBe(2);
  });
});


