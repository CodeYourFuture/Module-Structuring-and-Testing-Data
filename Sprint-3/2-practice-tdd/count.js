function countChar(stringOfCharacters, findCharacter) {
  let charCount = 0;
  for (let i = 0; i < stringOfCharacters.length; i++) {
    if (stringOfCharacters[i] === findCharacter) {
      charCount += 1;
    }
  }
  return charCount;
}

module.exports = countChar;
