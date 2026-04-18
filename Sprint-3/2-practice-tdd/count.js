

/**
 * Counts the occurrences of a character within a string.
 * @param {string} str - The string to search through.
 * @param {string} char - The character to look for.
 * @returns {number} - The total count of the character.
 */
function countChar(str, char) {
  let count = 0;

  for (const letter of str) {
    if (letter === char) {
      count++;
    }
  }

  return count;
}

module.exports = countChar;