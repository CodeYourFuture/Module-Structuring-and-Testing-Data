function countChar(stringOfCharacters, findCharacter) {
  let count = 0;

  for (let letter of stringOfCharacters) {
    if (letter === findCharacter) {
      count++;
    }
  }

  return count;
}

module.exports = countChar;
