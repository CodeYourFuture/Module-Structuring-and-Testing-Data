function countChar(stringOfCharacters, findCharacter) {
  let count = 0;

  for (let x = 0; x < stringOfCharacters.length; x++) {
    if (stringOfCharacters[x] === findCharacter) {
      count ++;
    }
  }
  return count;
}

module.exports = countChar;
