/**
 * TDD Practice: Count Characters
 * -----------------------------
 * Goal: Implement a function that counts how many times a character appears in a string.
 * This version uses a classic 'for...of' loop for maximum clarity.
 */

function countChar(stringOfCharacters, findCharacter) {
  // 1. Initialize a counter starting from 0
  let totalCount = 0;

  // 2. Loop through every character in the input string
  for (let currentCharacter of stringOfCharacters) {
    // 3. Check if the current character matches the character we are looking for
    if (currentCharacter === findCharacter) {
      // 4. If they match, increment the counter by 1
      totalCount++;
    }
  }

  // 5. Return the final count after finishing the loop
  return totalCount;
}

// Exporting the function so the test file can access it
module.exports = countChar;
