function countChar(stringOfCharacters, findCharacter) {
  count = 0; // initialize the count

  for (let i = 0; i < stringOfCharacters.length; i++) {
    // for the length of the strength
    if (stringOfCharacters[i] === findCharacter) {
      count++;
    } // count the char if matches
  }

  return count;
}

module.exports = countChar;
