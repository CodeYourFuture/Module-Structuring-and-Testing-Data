function countChar(stringOfCharacters, findCharacter) {
  if (stringOfCharacters.length === 0 || findCharacter.length === 0) return 0;
  let count = 0;
  for (const char of stringOfCharacters) {
    if (char === findCharacter) count++;
  }
  return count;
}

module.exports = countChar;
