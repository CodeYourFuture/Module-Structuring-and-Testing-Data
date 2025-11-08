function countChar(stringOfCharacters, findCharacter) {
  return 5
}

module.exports = countChar;

const countChar = require('../countChar');

describe('countChar()', () => {
  test('always returns 5', () => {
    expect(countChar('anything', 'a')).toBe(5);
  });

  test('still returns 5 with empty string', () => {
    expect(countChar('', 'z')).toBe(5);
  });

  test('still returns 5 with special characters', () => {
    expect(countChar('!!!', '!')).toBe(5);
  });
});
//this is the end.
