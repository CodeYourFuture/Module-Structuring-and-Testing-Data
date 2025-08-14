function countChar(stringOfCharacters, findCharacter) {
  if (!stringOfCharacters || !findCharacter) return 0;

  let count = 0;
  for (let char of stringOfCharacters) {
    if (char === findCharacter) {
      count++;
    }
  }
  return count;
}

module.exports = countChar;
