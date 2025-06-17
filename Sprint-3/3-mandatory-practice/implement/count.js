function countChar(stringOfCharacters, findCharacter) {
  // Find the number of times findCharacter appears in stringOfCharacters

  let count = 0;
  for (let i = 0; i < stringOfCharacters.length; i++) {
    if (stringOfCharacters[i] === findCharacter) {
      // Increment the count
      count++;
    }
  }
  // Return the count
  return count;
}

module.exports = countChar;
