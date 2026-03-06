function countChar(stringOfCharacters, findCharacter) {
  // 1. Assign a variable to keep track of the count
  let count = 0;

  // 2. Loop through all chars in the string
  for (let char = 0; char < stringOfCharacters.length; char++) {
    // 3. Check if the current char matches the one we are looking for
    if (stringOfCharacters[char] === findCharacter) {
      count++; // If it's a match, add 1 to our tally
    }
  }

  // 4. Return the final tally after the loop finishes
  return count;
}

module.exports = countChar;
