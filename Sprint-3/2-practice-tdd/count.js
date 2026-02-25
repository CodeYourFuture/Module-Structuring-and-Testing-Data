function countChar(stringOfCharacters, findCharacter) {
  let total = 0;
  for (const char of stringOfCharacters) {
    if (char === findCharacter) {
      total += 1;
    }
  }
  return total;
}

module.exports = countChar;
