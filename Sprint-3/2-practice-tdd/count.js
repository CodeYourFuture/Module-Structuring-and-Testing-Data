/**
 * Counts how many times a single character appears in a string.
 *
 * @param {string} stringOfCharacters - The string to search through.
 * @param {string} findCharacter - The single character to count.
 * @returns {number} The number of times findCharacter appears in stringOfCharacters.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */

function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  for (const char of stringOfCharacters) {
    if (char === findCharacter) {
      count++; // this means count = count + 1. This term is called 
      // "incrementing" the count variable.
    }
  }
  return count;
}

module.exports = countChar;
