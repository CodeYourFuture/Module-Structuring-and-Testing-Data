function countChar(stringOfCharacters, findCharacter) {
  //count the occurrences of the char in the string
  // Make it case insensitive
  let countChar = 0;
  for (const char of stringOfCharacters) {
    if (char.toLowerCase() === findCharacter.toLowerCase()) {
      countChar++;
    }
  }
  return countChar;
}

module.exports = countChar;
