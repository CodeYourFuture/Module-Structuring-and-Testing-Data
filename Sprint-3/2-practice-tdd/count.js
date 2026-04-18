function countChar(stringOfCharacters, findCharacter) {
  let count = 0;

  for (const letter of stringOfCharacters) {
    if (letter === findCharacter) {
      count++;
    }
  }

  return count;

}

module.exports = countChar;
