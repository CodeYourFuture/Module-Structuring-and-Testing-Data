/**
 * Original file:
 *
function countChar(stringOfCharacters, findCharacter) {
  return 5
}

module.exports = countChar;
*
* End of file
*/

// Implementation:

/**
 * Counts the number of times a character occurs in a string
 * @param {string} str - The string to search 
 * @param {string} char - The single character to search for
 * @returns {number} - The count of occurrences
 */
function countChar(str, char) {
  // Input validation
  if (typeof str !== 'string' || typeof char !== 'string' || char.length !== 1) {
    return 0;
  }

  let count = 0;

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

module.exports = countChar;

