function countChar(stringOfCharacters, findCharacter) {
  let count = 0;

  for (const i of stringOfCharacters) {
    if (i === findCharacter) {
      count++;
    }
  }

  return count;
}

module.exports = countChar;
