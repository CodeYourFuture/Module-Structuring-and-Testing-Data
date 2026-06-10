/**
 * countChar(stringOfCharacters, findCharacter)
 *
 * Count the number of times a single character appears in a string.
 *
 * Behaviour / contract:
 * - The function is case-sensitive: 'a' ≠ 'A'.
 * - `stringOfCharacters` may be `null` or `undefined`; in that case the function returns 0.
 * - `findCharacter` is treated as a single character (a single Unicode code point).
 *   If you pass a longer string it will never match.
 *
 * Parameters:
 * @param {string|null|undefined} stringOfCharacters - The string to search through.
 * @param {string} findCharacter - The single character to count (should be length 1).
 *
 * Returns:
 * @returns {number} The number of occurrences of `findCharacter` in `stringOfCharacters`.
 *
 * Throws:
 * - Does not throw for `null`/`undefined` source; returns 0.
 * - If you want stricter validation for types or for multi-character `findCharacter`,
 *   validate and throw in the implementation and update tests accordingly.
 *
 * Examples:
 * // basic
 * countChar('aaaaa', 'a'); // 5
 * countChar('Hello', 'l'); // 2
 *
 * // empty/absent inputs
 * countChar('', 'a'); // 0
 * countChar(null, 'a'); // 0
 *
 * Notes:
 * - Uses strict equality (===) so it matches exact code points.
 * - For emoji or other characters outside the BMP this implementation (for..of)
 *   iterates code points, which handles many emoji correctly.
 */

function countChar(stringOfCharacters, findCharacter) {
  if (stringOfCharacters == null) return 0;
  let count = 0;
  for (const char of stringOfCharacters) {
    if (char === findCharacter) {
      count++;
    }
  }
  return count;
}

module.exports = countChar;
