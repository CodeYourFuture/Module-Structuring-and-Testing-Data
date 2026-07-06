function countChar(stringOfCharacters, findCharacter) {
  // return 0 if either the string or character is empty
  const hasNoInput =
    stringOfCharacters.length === 0 || findCharacter.length === 0;
  if (hasNoInput) return 0;

  let count = 0;
  for (const char of stringOfCharacters) {
    if (char === findCharacter) count++;
  }
  return count;
}

module.exports = countChar;
