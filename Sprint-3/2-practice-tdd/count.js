/**
 *
function countChar(stringOfCharacters, findCharacter) {
  return 5
}

module.exports = countChar;
*
*/

function countChar(stringOfCharacters, findCharacter) {
  // Input validation - return 0 for invalid inputs
  if (typeof stringOfCharacters !== 'string' || typeof findCharacter !== 'string') {
    return 0;
  }

  // Return 0 if either parameter is empty
  if (stringOfCharacters.length === 0 || findCharacter.length === 0) {
    return 0;
  }

  // Use only the first character of findCharacter (as per test expectations)
  const searchChar = findCharacter[0];

  let count = 0;

  // Count occurrences of the character
  for (let i = 0; i < stringOfCharacters.length; i++) {
    // Case-sensitive comparison
    if (stringOfCharacters[i] === searchChar) {
      count++;
    }
  }

  return count;
}

module.exports = countChar;

