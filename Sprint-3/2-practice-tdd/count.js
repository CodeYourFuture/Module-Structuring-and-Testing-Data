function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  let x = 0;
  for (; x < stringOfCharacters.length; x++) {
    if (stringOfCharacters[x] === findCharacter) {
      count++;
    }
  }
  return count;
}

module.exports = countChar;
